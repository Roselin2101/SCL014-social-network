// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const iniciarSesionGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
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

// const llenarFormulario = document.querySelector('#logForm');
// llenarFormulario.addEventListener('submit', (event) => {
// event.preventDefault();
// let name= document.querySelector('#nombreRegistro').value;
// let email = document.querySelector('#emailRegistro').value;
// let ingresaPassword= document.querySelector('#registropassword').value;
// let ingresePassword2= document.querySelector('#registropassword2').value;
// console.log( name, email, password, password2)

// });
