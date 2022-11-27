import { collection, query, getDocs, where, doc, updateDoc } from "firebase/firestore"; 
import { deepCopy } from '@firebase/util'
import {db} from "./firebase"
import { getLocation } from "./locations";

const getSubscriptions = (userId)=> {
    let subscriptions = []
    const locationsRef = collection(db, "Locations")
     
    return getDocs(query(locationsRef, where("subscribers", "array-contains", userId)))
        .then(docs => {  
            docs.forEach(doc => 
                subscriptions.push(Object.assign(deepCopy(doc.data()), {id: doc.id}))
            )
            return subscriptions
            })
    }

const modifySubscription = (activeUser,locationId,userId) => {
    return getLocation(locationId)
    .then(data => data.subscribers)
    .then(results =>{ 
        const subscribers = []
        results.map(resultado => subscribers.push(resultado))
        return subscribers
    }).then(subscribers => {
        const copySubscribers = [...subscribers]
        let modifiedSubscribers
        if(activeUser){
            modifiedSubscribers = copySubscribers.filter(subscriber => subscriber !== userId)
        }
        else{
            modifiedSubscribers = [...subscribers]
            modifiedSubscribers.push(userId)
        }
        return modifiedSubscribers
        
    }).then(modifiedSubscribers => {
        const locationDocRef = doc(db,'Locations', locationId)
        return updateDoc(locationDocRef, {subscribers: modifiedSubscribers}).catch(err => console.log(err))
    }).catch(err => console.log(err))
}
export {modifySubscription, getSubscriptions};
