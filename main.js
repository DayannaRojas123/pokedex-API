const botonapi = document.getElementById('botonapi')
const apidata = document.getElementById('apidata')

botonapi.addEventListener('click',pokemones)


function pokemones() {
    
   let idpoke = Math.round((Math.random() * 150)) //para que el parametro id sea un entero

   llamado(idpoke)

}


function llamado(id) {

   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //le pasa la url del api con fetch y con then hacemos la promesa con un parametro res
      .then(function (res) {
         res.json() //nos traemos la respuesta del api

            //el primer then se trae la info general de la api, para ver lo que hay dentro necesitamos encadenar otro then

            .then(function (pokemon) {


               mostrarpokemon(pokemon, id)


            })


            //hacemos otro then donde tendremos toda la data y los extraemos
            .catch(e => console.error(new Error(e))) //hacemos catch por buena practica por si hay algun error

      })
}


let lista = document.getElementById('listapoke')
let info = document.getElementById('info')

function mostrarpokemon(pokemon, id) {


   let imagen = lista.getElementsByTagName('img')[0] //busca la primera etiqueta img y cambia la imagen al pokemon
   imagen.setAttribute('src', pokemon.sprites.front_default)
   console.log(pokemon.types[0].type.name)

   lista.setAttribute("class", pokemon.types[0].type.name)
   info.setAttribute("class", pokemon.types[0].type.name)

   let nombre = lista.getElementsByTagName('span')[0]
   nombre.textContent = pokemon.name

   let experiencia = lista.getElementsByTagName('span')[1]
   experiencia.textContent = pokemon.base_experience

   const {
      types
   } = pokemon //crea un arreglo con el nombre types con los elementos que hay en pokemon que se llamen types

   types.forEach(element => {

      let todtipos = element.type.name

      tipospokemon(todtipos, pokemon)


   });
}


function tipospokemon(element, pokemon) {


   let tipo = document.getElementById('tipos')

   tipo.innerHTML = ''

   pokemon.types.forEach(element => {


      let tiposs = document.createElement('span')


      tiposs.textContent = element.type.name


      tipo.appendChild(tiposs)
   });
}


