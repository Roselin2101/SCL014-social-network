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
      // console.log(userCredential);
      //User is signed in.
    })
    .catch((error) => {
      // console.log("Error");
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

export const posteame = (titulo, descripcion, id_usuario) => {
  const db = firebase.firestore();

  db.collection("publicaciones")

    .add({ titulo: titulo, descripcion: descripcion, id_usuario: id_usuario })

    .then(function (docRef){
     console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
    console.error("Error adding document: ", error);
    
    });

  }

//funcion leeme
export const leeme = () => {
  console.log("hola leeme");
  const db = firebase.firestore();
  db.collection("publicaciones").onSnapshot((querySnapshot) => {
    // constante vista general de los post
    const posts = document.querySelector("#vista");
    posts.innerHTML = " ";
    querySnapshot.forEach((doc) => {
      const dataPosts = doc.data();
      const templatePost = `<div><h3>${dataPosts.titulo}</h3></div>
        <div>${dataPosts.descripcion}</div>
        <button class='eliminar' data-id='${doc.id}'>Eliminar</button>
        <button class='editar' data-id='${doc.id}'>Editar</button>
        `;
      posts.innerHTML += templatePost;
    });

    const botonesEliminar = document.querySelectorAll(".eliminar");
    botonesEliminar.forEach((btnEliminar) => {
      btnEliminar.addEventListener("click", (event) => {
        // console.log(event.target.dataset.id);
        eliminar(event.target.dataset.id);
      });
    });
    const botonesEditar = document.querySelectorAll(".editar");
    botonesEditar.forEach((btnEditar) => {
      btnEditar.addEventListener("click", (event) => {
        // console.log(event.target.dataset.id);
        editar(event.target.dataset.id, {
          titulo: document.getElementById("titulo").value,
          descripcion: document.getElementById("task-description").value
        });
      });
    });
  });
};

export const eliminar = (id) => {
  const db = firebase.firestore();
  if(doc.exists && doc.data().id_usuario === firebase.auth.auid){
  db.collection("publicaciones").doc(id).delete();
} else {
  console.log("No such document!");
}
};

export const editar = (id, data) => {
  const db = firebase.firestore();

 
 const query = db.collection("publicaciones").doc(id);

 query.get().then(function(doc) {
     if (doc.exists && doc.data().id_usuario === firebase.auth().currentUser.uid){
      db.collection("publicaciones").doc(id).update(data);
        //  console.log("Document data:", doc.data());
        //  console.log( doc.data().id_usuario)
     } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
     }
 }).catch(function(error) {
     console.log("Error getting document:", error);
 });
}
