// calculator.js

// 1. Funciones matemáticas básicas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    // Manejo básico de error
    throw new Error("Error: División por cero no permitida.");
  }
  return a / b;
}

// 2. Función calculadora principal
// recibe num1, num2 (números) y oper (string): "suma", "+", "resta", "-", "multiplicar", "*", "division", "/"
function calculadora(num1, num2, oper) {
  // Normalizar oper
  const op = (oper || "").toString().trim().toLowerCase();

  switch (op) {
    case "suma":
    case "+":
    case "sumar":
      return sumar(num1, num2);
    case "resta":
    case "-":
    case "restar":
      return restar(num1, num2);
    case "multiplicar":
    case "x":
    case "*":
    case "por":
      return multiplicar(num1, num2);
    case "division":
    case "dividir":
    case "/":
      return dividir(num1, num2);
    default:
      throw new Error("Operación no reconocida. Usa: suma, resta, multiplicar, division (o símbolos + - * /).");
  }
}

// 3. Función para pedir datos con prompt (esto funciona si abres index.html en el navegador)
function ejecutarConPrompts() {
  try {
    const entrada1 = prompt("Ingresa el primer número:", "0");
    const entrada2 = prompt("Ingresa el segundo número:", "0");
    const oper = prompt("Ingresa la operación (suma, resta, multiplicar, division o + - * /):", "+");

    // Convertir a números (manejo simple)
    const num1 = Number(entrada1);
    const num2 = Number(entrada2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      console.log("Error: Debes ingresar valores numéricos válidos.");
      return;
    }

    const resultado = calculadora(num1, num2, oper);
    console.log(Resultado: ${resultado});
    alert(Resultado: ${resultado});
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
}

// Exportar si se usa con módulos (opcional)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    calculadora
  };
}
