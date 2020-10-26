//Registrandose
export const registrarseAutenticarse= (email, password)=>{
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( userCredential =>{
        if (userCredential) {
            window.location.hash = '#/';
            console.log('hola')
            // ...
          } else {
            window.location.hash = '#/';
            // User is signed out.
            // ...
          }
        // return response.send(responseString);
            console.log(userCredential);
                //User is signed in.
    }) .catch(error => { alert("Error Usuario No Registrado")})
 

}
//Ingresar sesion con cuenta ya registrada

export const iniciarSesionUsuarioPass = (emailRegistrado,passwordRegistrado)=> {
auth
.signInWithEmailAndPassword(emailRegistrado, passwordRegistrado) 
.then ( userCredential => {
    
    if (userCredential) {
        window.location.hash ='#/inicio';
        console.log('hola')
        // ...
      } else {
        window.location.hash ='#/';
        // User is signed out.
        // ...
      }
    // return response.send(responseString);
        console.log(userCredential);
            //User is signed in.
}) .catch(error =>  { console.log("Error")})
  

}
// funcion para ingresar por medio de cuentas google
export const iniciarSesionGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    window.location.hash='#/inicio'

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

//funcion para cerrar sesion

export  const cerrarSesionApp = () =>{
 auth.signOut().then(()=>{
   console.log('salida');
   window.location.hash='#/inicio'
 })
}

// funcion para recuperar contraseña

export const recuperarContraseña = (emailAddress)=> {
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    window.location.hash = '#/'
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}

// Funcion para las Publicaciones 

export const publicacionesNuevas = (inputPost)=>{
  const fs = firebase.firestore();
const usuario= ()=> firebase.auth()
.currentUser;
const user = usuario();


const guardarPublicaciones = (titulo, descripcion) =>
 fs.collection('publicaciones').doc().set({
    titulo,
    descripcion
});
// de mi coleccion  publicaciones firebaseobtener todo
const getPublicaciones = () => fs.collection('publicaciones').get();


 })

})
}