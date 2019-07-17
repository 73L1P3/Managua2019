const cafeList = document.querySelector('#cafe-list');

const form = document.querySelector('#add-cafe-form');

//Crear elementos y renderizarlos
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x';

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);

  //Eliminar Datos
  cross.addEventListener('click', e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('Cafes')
      .doc(id)
      .delete();
  });
}

//Obteniendo Datos
/* db.collection('Cafes')
  //.where('city', '==', 'New York') // ~ Mostrar solo los cafe de NY
  //.orderBy('name') // ~ Ordenar Alfabeticamente
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderCafe(doc);
    });
  }); */

//Guardando Datos
form.addEventListener('submit', e => {
  e.preventDefault(); //No Actualiza la Pagina
  db.collection('Cafes').add({
    name: form.name.value,
    city: form.city.value
  });
  form.name.value = '';
  form.city.value = '';
});

//Escuchar en Tiempo Real
db.collection('Cafes')
  .orderBy('city')
  .onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        renderCafe(change.doc);
      } else if (change.type == 'removed') {
        let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
        cafeList.removeChild(li);
      }
    });
  });
