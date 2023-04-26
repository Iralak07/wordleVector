let intentos = 6;
let diccionario = ['VOLAR','VUELO', 'AVION','JABON','LAPIZ','VELAR','ZORRO','GUISO','PESAS','LOCOS','VASOS','LUCHA','MARCO','NORMA' ]
const BOTON = document.getElementById("guess-button");
const INPUT = document.getElementById("guess-input");
const VALOR = INPUT.value;

const GRID = document.getElementById("grid");
const PALABRA = diccionario[Math.floor(Math.random() * diccionario.length)];


BOTON.addEventListener("click", intentar);


function intentar() {
  const INTENTO = leerIntento();
  if (INTENTO === PALABRA) {
    terminar("<h1>GANASTE!😀</h1>");
    return;
  }
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  for (let i in PALABRA) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO[i] === PALABRA[i]) {
      //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "green";
    } else if (PALABRA.includes(INTENTO[i])) {
      //AMARILLO
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "yellow";
    } else {
      //GRIS
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "grey";
    }
    ROW.appendChild(SPAN);
  }
  GRID.appendChild(ROW);
  intentos--
  console.log(intentos);
  if (intentos==0){
      terminar("PERDISTE!")
  }
}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  INPUT.disabled = true;
  BOTON.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}
