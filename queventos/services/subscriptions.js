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
    console.log(activeUser)
    console.log(locationId)
    console.log(userId)
    return getLocation(locationId)
    .then(data => data.subscribers)
    .then(results =>{ 
        const subscribers = []
        //console.log( 'resultados :' ,results)
        results.map(resultado => subscribers.push(resultado))
        return subscribers
    }).then(subscribers => {
        const copySubscribers = [...subscribers]
        let modifiedSubscribers
        if(activeUser){
            console.log( 'antes',copySubscribers)
            modifiedSubscribers = copySubscribers.filter(subscriber => subscriber !== userId)
            console.log('despues', modifiedSubscribers)

        }
        else{
            modifiedSubscribers = [...subscribers]
            console.log('antes', modifiedSubscribers)

            modifiedSubscribers.push(userId)
            console.log('despues', modifiedSubscribers)
        }
        return modifiedSubscribers
        
    }).then(modifiedSubscribers => {
        const locationDocRef = doc(db,'Locations', locationId)
        //console.log(modifiedSubscribers)
        return updateDoc(locationDocRef, {subscribers: modifiedSubscribers})
    }).catch(err => console.log(err))
}
    //hay que revisar si esta o no el userId y luego tengo que hacer el update en firebase , le tengo que pasar un objeto a firebase y enviar el array del objeto
    // el ultimo paso es devolver (un .then que devuelve un true or false)
export {modifySubscription, getSubscriptions};
