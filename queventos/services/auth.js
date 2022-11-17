import { auth } from "./firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";


/*const signIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Nuevo inicio de sesión")
        console.log("Usuario: " + user.uid)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(error.code === 'auth/user-not-found'){
            alert('Usuario invalido') 
            // Crear un contexto , setear provider, aca se llamaria la funcion del context la cual va a mostrar la alerta creada en el contexto global(importada previamente)
        }
    });
}*/

const signIn = (auth, email, password)=> signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user;
    console.log("Nuevo inicio de sesión")
    console.log("Usuario: " + user.uid)
})
.catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;

    let message

    if(errorCode === 'auth/user-not-found'){
        message = "No hay un usuario registrado con ese email"
    } else if (errorCode === "auth/wrong-password") {
        message = "El email o la contraseña son incorrectos"
    } 
    else {
        console.log(errorCode)
        message = "Algo salió mal"
    }
    throw new Error(message);
});


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

const authStateListener = (setAuth)=>{
  onAuthStateChanged(auth, (user) => {
    setAuth(user)
  })
}

const signOut = ()=>{
  auth.signOut()
}

export { signIn, createUser, authStateListener, signOut };