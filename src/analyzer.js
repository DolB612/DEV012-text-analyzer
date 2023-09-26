const analyzer = {  
  getWordCount: (text) => {

    let array= text.replace(/[0-9]\s]+/g, "");
    array=array.trim();
    
    if(array===""){
      return 0;

    }else{
      array=array.split(" ");
      return array.length;
    }
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let textWithoutSpaces = text.replace(/[^A-Za-z0-9]/g, ''); // Elimina espacios
    textWithoutSpaces=textWithoutSpaces.replace(/\s+/g, "");
    return textWithoutSpaces.length;
  },
   getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g); // Encuentra números y decimales
    return numbers ? numbers.length : 0;
  },
  getNumbersSum: (text) => {
     // Utilizamos una expresión regular para encontrar todos los números (enteros y decimales) en el texto
    const numbers = text.match(/[-+]?\d*\.?\d+/g);

    // Si no se encontraron números, devolvemos 0
    if (!numbers) {
        return 0;
    }

    // Inicializamos una variable para almacenar la suma
    let sum = 0;

    // Recorremos el array de números y los sumamos
    for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
    }

    return sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/).filter((word) => word !== ''); // Divide el texto en palabras
    const totalLength = words.reduce((acc, word) => acc + word.length, 0); // Suma la longitud de las palabras
    return words.length > 0 ? (totalLength / words.length).toFixed(2) : 0; // Calcula la longitud promedio
  },
};

export default analyzer;
