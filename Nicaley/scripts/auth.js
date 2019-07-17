//Crear Admins Funcion en la nube
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', e => {
  e.preventDefault();

  const adminEmail = document.querySelector('#admin-email').value;
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({
    email: adminEmail
  }).then(result => {
    console.log(result);
  });
});

//Escuchar los cambios en auth
auth.onAuthStateChanged(user => {
  if (user) {
    //verificamos si el usuario es admin
    user.getIdTokenResult().then(idTokenResult => {
      user.admin = idTokenResult.claims.admin;
      setupUI(user);
      if (user.admin == true) {
        db.collection('Leyes').onSnapshot(snapshot => {
          setupLey(snapshot.docs);
        });
      } else {
        setupLey([]);
      }
    });

    //Conseguimos la info del foro
    db.collection('Foro').onSnapshot(snapshot => {
      setupForo(snapshot.docs);
    });
  } else {
    // Conseguimos la info de las leyes
    db.collection('Leyes').onSnapshot(snapshot => {
      setupLey(snapshot.docs);
      setupUI();
      setupForo([]);
    });
  }
});

//crear foro
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', e => {
  e.preventDefault();

  db.collection('Foro')
    .add({
      Titulo: createForm['Titulo'].value,
      Contenido: createForm['Contenido'].value
    })
    .then(() => {
      // Cerramos el modal y reiniciamos el form
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close(); //materialize
      createForm.reset();
    });
});

// Creacion de cuenta
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  //tomamos la info del usuario
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //ingresar el nombre del usuario
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db
        .collection('Usuarios')
        .doc(cred.user.uid)
        .set({
          bio: signupForm['signup-bio'].value,
          username: signupForm['signup-username'].value
        });
    })
    .then(() => {
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
      signupForm.querySelector('.error').innerHTML = '';
    })
    .catch(err => {
      signupForm.querySelector('.error').innerHTML = err.message;
    });
});

//Salir
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
});

//Inicio de Seccion
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  //tomamos la informacion del usuario
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      // console.log(cred.user);
      //cerramos el modal de inicio de seccion y reiniciamos el form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      loginForm.querySelector('.error').innerHTML = '';
    })
    .catch(err => {
      loginForm.querySelector('.error').innerHTML = err.message;
    });
});
