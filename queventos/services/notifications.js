import { db } from "./firebase"
import { doc, getDoc } from "firebase/firestore";

const getNotifications = (userId)=> {
    const docRef = doc(db, "Users", `${userId}`);
    return getDoc(docRef).then(doc => doc.exists() ? {id: doc.id, data: doc.data().notifications } : Promise.reject(new Error("No encontramos tus datos")))

}

export { getNotifications }