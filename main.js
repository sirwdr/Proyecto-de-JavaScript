let tasa = 391; // Valor de Dolar Blue en pesos Argentinos
let opcion = prompt("¿Que operacion desea realizar?\n1. Cambiar dolares a pesos\n2. Cambiar pesos a dolares\n3. Salir");

while (opcion != "3") {
  if (opcion == "1") {
    let dolares = prompt("Ingresa la cantidad de dolares a cambiar");
    let pesos = dolares * tasa;
    alert(`El resultado es: ${pesos} pesos`);
  } else if (opcion == "2") {
    let pesos = prompt("Ingresa la cantidad de pesos a cambiar");
    let dolares = pesos / tasa;
    alert(`El resultado es: ${dolares} dólares`);
  } else {
    alert("Opción inválida");
  }
  opcion = prompt("¿Que operacion desea realizar?\n1. Cambiar dolares a pesos\n2. Cambiar pesos a dolares\n3. Salir");
}