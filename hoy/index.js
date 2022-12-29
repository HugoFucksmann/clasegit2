//https://pokeapi.co/api/v2/pokemon?limit=10&offset=0&age=2

const section = document.getElementById("section");

class pokemon {
  constructor(name) {
    this.name = name;
    this.entrenador = "juan";
  }
}

async function getResult() {
  const result = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0&age=2"
  )
    .then((res) => {
      //console.log(res);
      
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res.results;
    })
    .catch((e) => {
      console.warn("aqui el error");
      console.warn(e);
      return null;
    });

  console.log(result);

  /*  for (let i = 0; i < result.length; i++) {
    const cardPokemon = document.createElement("div");
    const title = document.createElement("h4");
    const value = document.createElement("h5");
    const button = document.createElement("button");

    title.textContent = "Nombre";
    value.textContent = result[i].name;

    button.textContent = "ver mas";

    cardPokemon.classList.add("card");
    cardPokemon.appendChild(title);
    cardPokemon.appendChild(value);
    cardPokemon.appendChild(button);
    section.appendChild(cardPokemon);
  } */
  if(result !== null){
    result.map(async (obj) => {
      let cardPokemon = document.createElement("div");
      let title = document.createElement("h4");
      let value = document.createElement("h5");
      const button = document.createElement("button");
  
      const datos = await fetch(obj.url)
        .then((res) => res.json())
        .catch((e) => console.log(e));
  
      console.log(datos);
  
      const newPokemon = new pokemon(obj.name);
  
      button.textContent = "ver mas";
      title.textContent = "Nombre";
      value.textContent = newPokemon.name;
  
      cardPokemon.classList.add("card");
      cardPokemon.appendChild(title);
      cardPokemon.appendChild(value);
      cardPokemon.appendChild(button);
      section.appendChild(cardPokemon);
    });
  }

}

function appendH1(){

  try {
     
    const storage = localStorage.getItaem("key")
    console.log(storage);
  } catch(e) {
    console.warn("ocurrio un error en appendH1");
    console.warn(e);
  }

 


}

function cortarTexto(text){
  try {

    return text.slice(0,3)

    
  } catch (error) {
    console.log(error);
    return "ocurrio un error"
  }
}


console.log(cortarTexto(2134214));
getResult();
console.log("Hello ");