import { db } from "./firebase"
import { collection, doc, getDoc, getDocs, updateDoc, setDoc, addDoc, query, where, limit } from "firebase/firestore";

// Add a new document with a generated id.


//const userId = "sI95hZXXc3flD6ql62nIxJ0Anem2"

const getUser = (userId)=> {
    const docRef = doc(db, "Users", `${userId}`);
    //const docRef = doc(db, "Users", "1");
    
    return getDoc(docRef)
    .then(doc => doc.exists() ? doc.data() : Promise.reject(new Error("No encontramos tus datos")))

}

const updateUser = (data,userId) =>{
    const {name} = data
    const docRef = doc(db, "Users", `${userId}`);

    return updateDoc(docRef, {
        name: name
    })
}

const searchUserByMail = (data) => {
    const usersRef = collection(db, "Users")
    
    return getDocs(query(usersRef, where("email", "==", `${data.email}`), limit(1)))
        .then(result => !result.empty ? result.docs[0].data() : null)
}

const addUser = (data) =>{
        const docRef = addDoc(collection(db, "Users"), {
        name: data.name,
        email: data.email,
        notifications: []
    }).then(data => (data))
    //console.log("Se creo el documento con el id: " , docRef.id);
}

export { getUser, updateUser, addUser, searchUserByMail };
