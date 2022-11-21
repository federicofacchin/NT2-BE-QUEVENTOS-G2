import { darkColors } from "@rneui/base";
import { collection, doc, setDoc ,getDocs, getDoc} from "firebase/firestore"; 
import {db} from "./firebase"

const locationId = 'mBsjUL0FDdnrGGUHBJQQ';

const getAllLocations = () => getDocs(collection(db, "Locations")).then(docs => {
   let locations = []
   docs.forEach(doc => locations.push({id: doc.id, data: doc.data()}))
   return locations
}).catch(err => err)





//console.log(getAllLocations)
//docs.forEach(doc => doc.data())
const getLocation = (locationId) => {
    const docRef = doc(db, "Locations", `${locationId}`);
    return getDoc(docRef).then(doc => doc.exists() ? doc.data() : Promise.reject(new Error("No encontramos ubicaciones")))

}

//getLocation(locationId).then(location => console.log(location));

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
