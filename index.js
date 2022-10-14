async function mostraLibri() {
  let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");

  let tuttiLibri = await httpLibri.json();
  //^prendo i dati dalla fetch e li parso
  //   console.log(tuttiLibri);

  for (let i = 0; i < tuttiLibri.length; i++) {
    let libro = tuttiLibri[i];
    document.querySelector(".container").innerHTML += "";
    let container = document.querySelector(".row");
    container.innerHTML += `<div class="col col-lg-3 col-md-4 col-sm-6 mb-5 align-self-stretch text-center "> <div class="card card h-100">
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

// async function cercaLibro(ricerca) {
//   let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");
//   let tuttiLibri = await httpLibri.json();

//   let libri = tuttiLibri.filter((libro) => {
//     return libro.title.toLowerCase().includes(ricerca.toLowerCase());
//   });
//   console.log(libri);
// }

window.onload = () => {
  mostraLibri();
};
