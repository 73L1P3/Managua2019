const foroList = document.querySelector('.foro');
const leyList = document.querySelector('.ley');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = user => {
  if (user) {
    //info del usuario
    db.collection('Usuarios')
      .doc(user.uid)
      .get()
      .then(doc => {
        const html = `
      <!-- <div>Ingresado como ${user.email}</div> -->
      <div>Usuario: ${doc.data().username}</div>
      <div>${doc.data().bio}</div>
    `;
        accountDetails.innerHTML = html;
      });
    //mostramos elementos
    loggedInLinks.forEach(item => (item.style.display = 'block'));
    loggedOutLinks.forEach(item => (item.style.display = 'none'));
  } else {
    // Escondemos la info del usuario
    accountDetails.innerHTML = '';
    // mostramos elementos
    loggedInLinks.forEach(item => (item.style.display = 'none'));
    loggedOutLinks.forEach(item => (item.style.display = 'block'));
  }
};

// configuramos el foro
const setupForo = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const foro = doc.data();
      const li = `
      <li>
        <div class="collapsible-header grey lighten-4">${foro.Titulo}</div>
        <div class="collapsible-body white">${foro.Contenido}</div>
      </li>
    `;
      html += li;
    });

    foroList.innerHTML = html;
  } else {
    foroList.innerHTML =
      '<h5 class="center-align">Cree una cuenta para ver el foro</h5>';
  }
};

// Configuramos las leyes
const setupLey = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const ley = doc.data();
      const li = `
        <li>
          <div class="collapsible-header blue lighten-2">${ley.Articulo}</div>
          <div class="collapsible-body white">${ley.Contenido}</div>
        </li>
      `;
      html += li;
    });

    leyList.innerHTML = html;
  } else {
    leyList.innerHTML = '<h5 class="center-align">Ley aqui</h5>';
  }
};

// configuramos los componentes de materialize
document.addEventListener('DOMContentLoaded', function() {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});
