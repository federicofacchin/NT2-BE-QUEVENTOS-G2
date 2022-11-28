import { collection, doc, getDocs, getDoc} from "firebase/firestore"; 
import { deepCopy } from '@firebase/util'
import {db} from "./firebase"


const getAllLocations = () => getDocs(collection(db, "Locations")).then(docs => {
   let locations = []
   docs.forEach(doc => locations.push({id: doc.id, data: doc.data()}))
   return locations
}).catch(err => err)


const getLocation = (locationId) => {
    const docRef = doc(db, "Locations", `${locationId}`);
    return getDoc(docRef).then(doc => doc.exists() ? Object.assign(deepCopy(doc.data()), {id: doc.id}) : Promise.reject(new Error("No encontramos ubicaciones")))
}


const createLocation = (data,locationId) =>{
    const {name} = data
    const docRef = doc(db, "Locations", `${locationId}`);

    return updateDoc(docRef, {
        name: name

    })
}

const updateLocation = (data,locationId) => {
    const {name} = data
    const docRef = doc(db, "Locations", `${locationId}`);

    return updateDoc(docRef, {
        name: name

    })
}

export { getLocation, getAllLocations, updateLocation, createLocation};
