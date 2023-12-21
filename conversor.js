//llamamos los elemntos por su id para guardarlos en variables
const monedaEl_uno = document.getElementById("moneda-uno");
const monedaEl_dos = document.getElementById("moneda-dos");
const cantidadEl_uno = document.getElementById("cantidad-uno");
const cantidadEl_dos = document.getElementById("cantidad-dos");
const cambioEl = document.getElementById("cambio");
const tazaEl = document.getElementById("taza");

//Fech Intercambia la tasa y actualiza el DOM
function calcular(){
    const moneda1 = monedaEl_uno.value;
    const moneda2 = monedaEl_dos.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda1}`)
    .then(res => res.json())
    .then(data => {
        const taza = data.rates[moneda2];
        cambioEl.innerText = `1 ${moneda1} = ${taza} ${moneda2}`;

       cantidadEl_dos.value = (cantidadEl_uno.value * taza).toFixed(2);
    });

}
//Event Listeners
monedaEl_uno.addEventListener("change", calcular);
cantidadEl_uno.addEventListener("input", calcular);
monedaEl_uno.addEventListener("change", calcular);
cantidadEl_dos.addEventListener("input", calcular);

taza.addEventListener('click', () =>{
    const temp = monedaEl_uno.value;
    monedaEl_uno.value = monedaEl_dos.value;
    monedaEl_dos.value = temp;
    calcular();
} );

calcular();