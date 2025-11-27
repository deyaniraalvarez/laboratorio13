// node_calculator.js
const { sumar, restar, multiplicar, dividir, calculadora } = require('./calculator.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function pregunta(promptText) {
  return new Promise(resolve => {
    readline.question(promptText, answer => resolve(answer));
  });
}

(async function() {
  try {
    const a = await pregunta("Ingresa el primer número: ");
    const b = await pregunta("Ingresa el segundo número: ");
    const op = await pregunta("Ingresa la operación (suma, resta, multiplicar, division o + - * /): ");

    const num1 = Number(a);
    const num2 = Number(b);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      console.log("Error: Debes ingresar números válidos.");
      readline.close();
      return;
    }

    const result = calculadora(num1, num2, op);
    console.log(Resultado: ${result});
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    readline.close();
  }
})();
