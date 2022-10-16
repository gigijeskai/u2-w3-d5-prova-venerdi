async function mostraLibri() {
  let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");

  let tuttiLibri = await httpLibri.json();
  let container = document.querySelector(".row");
  container.innerHTML = "";
  for (let i = 0; i < tuttiLibri.length; i++) {
    let libro = tuttiLibri[i];

    container.innerHTML += `<div class="col col-lg-3 col-md-4 col-sm-6 mb-5 align-self-stretch text-center "> <div class="card card h-100">
    <img src=${libro.img} class="card-img-top " alt=${libro.title}>
    <div class="card-body bg-secondary">
  <h5 class="card-title">${libro.title}</h5>
  <p class="card-text">${libro.category}</p>
 <a href="#" class="btn btn-primary">${libro.price}  €</a>

   </div>
 </div>`;
  }
}

async function cercaLibro() {
  let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");
  let tuttiLibri = await httpLibri.json();
  let ricerca = document.querySelector("#input").value;
  let container = document.querySelector(".row");
  let libri = tuttiLibri.filter((libro) => {
    return libro.title.toLowerCase().includes(ricerca.toLowerCase());
  });
  container.innerHTML = "";
  for (let i = 0; i < libri.length; i++) {
    let libro = libri[i];

    container.innerHTML += `<div class="col col-lg-3 col-md-4 col-sm-6 mb-5 align-self-stretch text-center "> <div class="card card h-100">
     <img src=${libro.img} class="card-img-top " alt=${libro.title}>
     <div class="card-body ">
   <h5 class="card-title">${libro.title}</h5>
   <p class="card-text">${libro.category}</p>
  <a href="#" class="btn btn-primary">${libro.price}  €</a>
 
    </div>
  </div>`;
  }
}

window.onload = () => {
  document.querySelector(".row").innerHTML = `
<button class="btn btn-primary mb-5" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`;
  mostraLibri();
};
