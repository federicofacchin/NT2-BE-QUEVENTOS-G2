import { collection, query, getDocs, where } from "firebase/firestore"; 
import { deepCopy } from '@firebase/util'
import {db} from "./firebase"

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

const cancelSubscription = (id) => {
    console.log('Borrado')
} 

export {cancelSubscription, getSubscriptions};
