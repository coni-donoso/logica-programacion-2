//Recibir en número
function convertirTemperatura() {
    let celsius = prompt("Ingrese la temperatura en grados Celsius: ");
//Verificar que el dato ingresado sea un número
    while (isNaN(parseFloat(celsius))){
        alert("Por favor inténtelo de nuevo e ingrese un número válido. ");
        celsius = prompt("Ingrese la temperatura en grados Celsius:");
    }
//Convertir la temperatura ingresada de celsius a fahrenheit y kelvin
    let fahrenheit = (parseFloat(celsius)*9/5 + 32);
    let kelvin = (parseFloat(celsius) + 273.15);

//Imprimir los resultados de las temperaturas 
    console.log("Grados Celsius:", celsius);
    console.log("Grados Fahrenheit:", fahrenheit);
    console.log("Grados Kelvin:", kelvin);

}
convertirTemperatura();