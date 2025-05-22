const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se coloca el punto
const $b = document.querySelector('.blog'); // se quita hashtag de blog
const $l = document.querySelector('.location');


//Se debe agregar async porque se está ocupando un await.
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // se agrega esta línea par ainformar que hay una promesa y se lea como JSON
  console.log(data);
  $n.textContent = `${data.name}`; // se cambian las comillas simples por backticks
  $b.textContent = `${data.blog}`;  // se cambian las comillas simples por backticks
  $l.textContent = `${data.location}`;  // se cambian las comillas simples por backticks
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);