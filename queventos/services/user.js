import { db } from "./firebase"
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

const userId = "sI95hZXXc3flD6ql62nIxJ0Anem2"

const getUser = ()=> {
    const docRef = doc(db, "Users", `${userId}`);
    //const docRef = doc(db, "Users", "1");
    
    return getDoc(docRef)
    .then(doc => doc.exists() ? doc.data() : Promise.reject(new Error("No encontramos tus datos")))

}

const updateUser = (data) =>{
    const {name} = data
    const docRef = doc(db, "Users", `${userId}`);

    return updateDoc(docRef, {
        name: name
    })
}

export { getUser, updateUser };
