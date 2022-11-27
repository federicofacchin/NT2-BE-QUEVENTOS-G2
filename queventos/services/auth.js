import { auth } from "./firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
import { addUser } from "./user"

const signIn = (auth, email, password, setAuthenticationData)=> signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user;
    setAuthenticationData(user)
})
.catch((error) => {
    const errorCode = error.code;
    let message

    if(errorCode === 'auth/user-not-found'){
        message = "No hay un usuario registrado con ese email"
    } else if (errorCode === "auth/wrong-password") {
        message = "El email o la contraseña son incorrectos"
    } 
    else {
        message = "Algo salió mal"
    }
    throw new Error(message);
});

const createUser = (auth, data, setAuthenticationData) => {

  const { name, email, password } = data

  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setAuthenticationData(user)
    addUser(name, email, password, user.uid)

    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    let message

    if(errorCode === 'auth/email-already-in-use'){
        message = "El email ya fue registrado por otro usuario"
    }
    else {
        console.log(errorCode)
        message = "Algo salió mal"
    }
    throw new Error(message);
  });
}
  
const authStateListener = (setAuth)=>{
  onAuthStateChanged(auth, (user) => {
    setAuth(user)
  })
}

const signOut = ()=>{
  auth.signOut()
}

export { signIn, createUser, authStateListener, signOut };