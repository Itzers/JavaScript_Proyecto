alert (`Bienvenidx!`);

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
const masaje3 = new Masaje ("Julieta","quiropraxia",12);




