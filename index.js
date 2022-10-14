async function mostraLibri() {
  let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");
  let tuttiLibri = await httpLibri.json();
  //^prendo i dati dalla fetch e li parso
  //   console.log(tuttiLibri);

  let container = document.querySelector(".row");
  for (let i = 0; i < tuttiLibri.length; i++) {
    let libro = tuttiLibri[i];
    container.innerHTML += `<div class="col col-lg-3 col-md-3 col-sm-2 mb-5 align-self-stretch text-center "> <div class="card card h-100">
    <img src=${libro.img} class="card-img-top " alt=${libro.title}>
    <div class="card-body ">
  <h5 class="card-title">${libro.title}</h5>
  <p class="card-text">${libro.category}</p>
 <a href="#" class="btn btn-primary">${libro.price}  €</a>

   </div>
 </div>`;
  }
  //^ciclo che mi restituisce l'indice e crea le card
}

// async function cercaLibro() {
//   let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");
//   let tuttiLibri = await httpLibri.json();
//   //^prendo i dati dalla fetch e li parso
//   console.log(tuttiLibri);
// }

window.onload = () => {
  mostraLibri();
};
