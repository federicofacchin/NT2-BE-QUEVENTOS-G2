import { collection, query, getDocs, where } from "firebase/firestore"; 
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

const cancelSubscription = (locationId,userId) => {//refactorizar a verificar subscripcion
    
    return getLocation(locationId)
    .then(data => data.subscribers)
    .then(results =>{ 
        const subscribers = []
        results.map(resultado => subscribers.push(resultado))
        return subscribers
    }).then(subscribers => console.log(subscribers))
    //hay que revisar si esta o no el userId y luego tengo que hacer el update en firebase , le tengo que pasar un objeto a firebase y enviar el array del objeto
    // el ultimo paso es devolver (un .then que devuelve un true or false)
}

export {cancelSubscription, getSubscriptions};
