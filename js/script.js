// Creamos el objeto Character
class character {
    //Constructor
    constructor(Nombre, Especie, Imagen) {
            this.Nombre = Nombre;
            this.Especie = Especie;
            this.Imagen = Imagen;
        }
        //getter
    get information() {
        let array = [this.Nombre, this.Especie, this.Imagen];
        return array;
    }
}
// Function encargada de inyectar al DOM
// Pasamos la informacion de js al html por medio del div#test
function show(params) {
    //estructura de la card
    let id = document.getElementById("person");

    id.innerHTML += ` <div class="col">
    <div class="card shadow-sm">
    <img width="100%" src="${params[2]}" />
      <div class="card-body">
        <p class="card-text">
        <h3>${params[0]}</h3>
        <p>${params[1]}</p>
        </p>   
      </div>
    </div>
  </div>`;
}
// Function encargada de realizar la peticion al API
async function getPersonas() {
    //Peticion Fetch
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();
    let persons = data.results;
    //.map de la informacion del api
    persons.map((person) => {
        let people = new character(person.name, person.species, person.image);
        show(people.information);
    });
}
// 

axios.get('https://rickandmortyapi.com/api/character')
.then((info) => {
 
  let persons = info.data.results;
  //.map de la informacion del api
  persons.map((person) => {
      let people = new character(person.name, person.species, person.image);
      show(people.information);
  });

})
.catch((error)=> {
  console.log(error)
})


// START - aqui iniciamos todo
// getPersonas();