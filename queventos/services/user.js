import { db } from "./firebase"
import { collection, doc, getDoc, getDocs, updateDoc, setDoc, addDoc, query, where, limit } from "firebase/firestore";

const getUser = (userId)=> {
    const docRef = doc(db, "Users", `${userId}`);
    
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

const addUser = (name, email, password, id) => {
    const newUser = {
        name: name,
        email: email,
        notifications: []
    }
    setDoc(doc(db, "Users", `${id}`), newUser)
}

export { getUser, updateUser, addUser, searchUserByMail };
