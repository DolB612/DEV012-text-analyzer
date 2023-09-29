import analyzer from './analyzer.js';
// Inicializamos el contador en 0
let Conteo = 0;

// TODO: Escuchar eventos del DOM e invocar los métodos del objeto `analyzer`
document.querySelector("textarea[name='user-input']").addEventListener("input", calcularValores);

function calcularValores(e) {
  const texto = e.target.value;
  
  // Conteo de palabras
  const palabras = analyzer.getWordCount(texto);
  document.querySelector("li[data-testid='word-count']").textContent = "Palabras: " + palabras;

  // Conteo de caracteres
  const caracteres = analyzer.getCharacterCount(texto);
  document.querySelector("li[data-testid='character-count']").textContent = "Caracteres: " + caracteres;

  // Conteo de caracteres sin espacios
  const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(texto);
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent = "Carácteres sin espacios: " + caracteresSinEspacios;

  // Conteo de números
  const numeros = analyzer.getNumberCount(texto);
  document.querySelector("li[data-testid='number-count']").textContent = "Números: " + numeros;

  // Suma de números
  const sumaNumeros = analyzer.getNumbersSum(texto);
  document.querySelector("li[data-testid='number-sum']").textContent = "Suma números: " + sumaNumeros;

  // Longitud palabras
  const longitudPromedioPalabras = analyzer.getAverageWordLength(texto);
  document.querySelector("li[data-testid='word-length-average']").textContent = "Longitud palabras: " + longitudPromedioPalabras;
  
}

// Limpiar botón para el textarea y los li
let boton = document.getElementById("reset-button");
let textarea = document.querySelector("textarea[name='user-input']");
boton.addEventListener("click", function() {
  textarea.value = "";
  document.querySelector("li[data-testid='word-count']").textContent = "Palabras: 0";
  document.querySelector("li[data-testid='character-count']").textContent = "Caracteres: 0";
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent = "Carácteres sin espacios: 0";
  document.querySelector("li[data-testid='number-count']").textContent = "Números: 0";
  document.querySelector("li[data-testid='number-sum']").textContent = "Suma números: 0";
  document.querySelector("li[data-testid='word-length-average']").textContent = "Longitud palabras: 0";
});