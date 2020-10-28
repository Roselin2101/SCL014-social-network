//Registrandose
export const registrarseAutenticarse = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      if (userCredential) {
        window.location.hash = "#/";
        // console.log('hola')
        // ...
      } else {
        window.location.hash = "#/";
        // User is signed out.
        // ...
      }
      // return response.send(responseString);
      // console.log(userCredential);
      //User is signed in.
    })
    .catch((error) => {
      alert("Error Usuario No Registrado");
    });
};
//Ingresar sesion con cuenta ya registrada

export const iniciarSesionUsuarioPass = (
  emailRegistrado,
  passwordRegistrado
) => {
  auth
    .signInWithEmailAndPassword(emailRegistrado, passwordRegistrado)
    .then((userCredential) => {
      if (userCredential) {
        window.location.hash = "#/inicio";
        // console.log('hola')
        // ...
      } else {
        window.location.hash = "#/";
        // User is signed out.
        // ...
      }
      // return response.send(responseString);
      console.log(userCredential);
      //User is signed in.
    })
    .catch((error) => {
      console.log("Error");
    });
};
// funcion para ingresar por medio de cuentas google
export const iniciarSesionGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;

      window.location.hash = "#/inicio";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

//funcion para cerrar sesion

export const cerrarSesionApp = () => {
  auth.signOut().then(() => {
    //  console.log('salida');
    window.location.hash = "#/inicio";
  });
};

// funcion para recuperar contraseña

export const recuperarContraseña = (emailAddress) => {
  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {
      window.location.hash = "#/";
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};

// Funcion para las Publicaciones

export const posteame = (post) => {
  const db = firebase.firestore();

  const usuario = () => firebase.auth().currentUser;

  db.collection("publicaciones")
    .add(post)
    .then(function (docRef) {
      // console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      // console.error("Error adding document: ", error);
    });
};
//funcion leeme
export const leeme = () => {
  console.log("hola leeme");
  const db = firebase.firestore();
  db.collection("publicaciones").onSnapshot((querySnapshot) => {
    // constante vista general de los post
    const posts = document.getElementById("vistaPost");
    posts.innerHTML = " ";
    querySnapshot.forEach((doc) => {
      const dataPosts = doc.data();
      const templatePost = `<div><h3>${dataPosts.titulo}</h3> </div>
        <div>${dataPosts.descripcion}</div>
        <button class='eliminar' data-id='${doc.id}'>Elimar</button>
        <button class='editar' data-id='${doc.id}'>Editar</button>
        `;
      posts.innerHTML += templatePost; 
    });
    const botonesEliminar = document.querySelectorAll('.eliminar');
    botonesEliminar.forEach((btnEliminar)=>{
      btnEliminar.addEventListener('click', (event)=>{
        // console.log(event.target.dataset.id);
        eliminar(event.target.dataset.id);
    });
  });
    const botonesEditar = document.querySelectorAll('.editar');
    botonesEditar.forEach((btnEditar)=>{
      btnEditar.addEventListener('click', ( event)=>{
        console.log(event.target.dataset.id);
        editar(event.target.dataset.id);
      
    });

    });
  
  });

};

export const eliminar = (id) => {
  const db = firebase.firestore();
  db.collection("publicaciones").doc(id).delete();
}

export const editar = (id)=>{
  const db = firebase.firestore();
  db.collection("publicaciones").doc(id).update();
}
