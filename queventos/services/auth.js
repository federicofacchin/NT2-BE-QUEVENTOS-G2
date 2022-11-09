import { auth } from "./firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";


const signIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Nuevo inicio de sesión")
        console.log("Usuario: " + user.uid)
    })
    .catch((error) => {
        console.log("No se pudo iniciar sesión")
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

const createUser = (auth, email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Se creó un nuevo usuario")
    console.log("Usuario: " + user)
  })
  .catch((error) => {
    console.log("No se pudo crear el usuario")
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


export { signIn, createUser };