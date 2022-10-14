async function mostraLibri() {
  let httpLibri = await fetch("https://striveschool-api.herokuapp.com/books");
  let tuttiLibri = await httpLibri.json();
  //^prendo i dati dalla fetch e li parso
  document.querySelector("#container").innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let libro = tuttiLibri[i];
    document.querySelector("#container").innerHTML += `${tuttiLibri[i].title} ${tuttiLibri[i].img}${tuttiLibri[i].price}`;
    console.log(libro);
  }
  //^ciclo che mi restituisce l'indice
}
window.onload = () => {
  document.querySelector("#container").innerHTML = "loading...";
  mostraLibri();
};
