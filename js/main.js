/*Generare l'output nello screenshot allegato.
*/

const myArray = [{
  name: 'Adam',
  age: 0.3,
  color: '#00FFFF',
  gender: 'male'
},
{
  name: 'Emily',
  age: 0.8,
  color: '#F700FF',
  gender: 'female'
},
{
  name: 'Willoby',
  age: 1.3,
  color: '#FF6600',
  gender: 'male'
},
{
  name: 'Poppy',
  age : 0.2,
  color: '#00FF00',
  gender: 'female'
},
];
//stampo il risultato della funzione dei colori
generateColorName(myArray);
//creo le costanti con i gatti maschi, presi tramite filter
const males = myArray.filter((elemento) => {
  return elemento.gender === "male"
})
//uguale procedimento per le gatte
const females = myArray.filter((elemento) => {
  return elemento.gender === "female"
})
//stampo le due liste con maschi e femmine
generateColorMale(males)
generateColorFemale(females)
//stampo ultima lista
allCats(females, males);
