//creo funzione che mi stampi l'elenco dei gatti che abbia l'icona dello stesso colore dell'oggetto
function generateColorName(array){
  array.forEach((elemento) =>{
    $("#color-list").append(
      `
      <li><i class="fas fa-cat" style = "color: ${elemento.color}"></i> ${elemento.name}</li>
      `
    )
  });
}
//funzione che genera la lista dei gatti maschi
function generateColorMale(array){
  array.forEach((elemento) =>{
    $("#male-list").append(
      `
      <li><i class="fas fa-cat" style = "color: ${elemento.color}"></i>
      <i class="fas fa-ribbon" style = "color: blue; opacity: ${elemento.age}"></i>
      ${elemento.name}</li>
      `
    )
  })
}
//funzione uguale a quella sopra, ma per le femmine
function generateColorFemale(array){
  array.forEach((elemento) =>{
    $("#female-list").append(
      `
      <li><i class="fas fa-cat" style = "color: ${elemento.color}">
      </i>
      <i class="fas fa-ribbon" style = "color: pink; opacity: ${elemento.age}"></i>
      ${elemento.name}</li>
      `
    )
  })
}
//funzione che genera la lista dei gatti, prima le femmine e poi i maschi
function allCats(array1, array2){
  females.forEach((elemento) => {
    $("#cats").append(
      `
      <li><i class="fas fa-cat" style = "color: ${elemento.color}">
      </i>
      <i class="fas fa-ribbon" style = "color: pink; opacity: ${elemento.age}"></i>
      ${elemento.name}</li>

      `
    )
  });
  males.forEach((elemento) => {
    $("#cats").append(
      `
      <li><i class="fas fa-cat" style = "color: ${elemento.color}"></i>
      <i class="fas fa-ribbon" style = "color: blue; opacity: ${elemento.age}"></i>
      ${elemento.name}</li>
      `
    )
  });
}
