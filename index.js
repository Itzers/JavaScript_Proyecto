const opciones = document.getElementById('opciones')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
   fetchData()
})

opciones.addEventListener('click', e => {
   addCarrito(e)
})

const fetchData = async () => {
   try {
      const res = await fetch ('index.json')
      const data = await res.json()
      //console.log(data)
      pintarCards(data)
   } catch (error) {
      console.log(error)
   }
}

const pintarCards = data => {
   data.forEach(producto => {
      templateCard.querySelector('h5').textContent = producto.title 
      templateCard.querySelector('p').textContent = producto.precio
      templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
      templateCard.querySelector('.btn-dark').dataset.id = producto.id
      const clone = templateCard.cloneNode(true)
      fragment.appendChild(clone)
   })
   opciones.appendChild(fragment)
}

const addCarrito = e => {
   //console.log(e.target)
   //console.log(e.target.classList.contains('btn-dark'))
   if (e.target.classList.contains('btn-dark')) {
      setCarrito(e.target.parentElement)
   }
   e.stopPropagation()
}

const setCarrito = objeto => {
   //console.log(objeto)
   const producto = {
      id: objeto.querySelector('.btn-dark').dataset.id,
      title: objeto.querySelector('h5').textContent,
      precio: objeto.querySelector('p').textContent,
      cantidad: 1
   }

   if(carrito.hasOwnProperty(producto.id)) {
      producto.cantidad = carrito[producto.id].cantidad + 1
   }

   carrito[producto.id] = {...producto}

   console.log(carrito)
}








/*alert (`Bienvenidx!`);

function solicitarNombre () {
let nombre = prompt ("Cual es tu nombre");
   console.log(`El usuario se llama ${nombre}`);
}
solicitarNombre();

function Masaje (masajista,estilo,horario){
   this.personal = masajista;
   this.estilo = estilo;
   this.tiempo = 60;
   this.horario = horario;
   this.precio = function (){
      console.log (13.31* 60);
   }
}
const masaje1 = new Masaje ("Juan","quiropractico",14);
const masaje2 = new Masaje ("María","relajante",12);
const masaje3 = new Masaje ("Julieta","quiropraxia",12);*/




