/*1. Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”*/

function mostrarMensajeNVeces(n) {
    for (let i = 0; i < n; i++) {
      console.log('Bienvenidos al curso Full Stack');
    }
   }

   mostrarMensajeNVeces(10);


   /*2. Diseñar una función que tenga como parámetros dos números, y que
   calcule el máximo. */
    
   
   function calcularMaximo(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  console.log(calcularMaximo(4, 8));


/*3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.*/

  function promedio3(valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3) / 3;
   }

   console.log(promedio3(4, 6, 8));

/*4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro*/

function calcularPromedioNotas() {
    let sumaNotas = 0;
    let contadorDeNotas = 0;
    let nota;
    
    while (true) {
     nota = parseInt(prompt('Introduce una nota (o -1 para terminar):'));
    
     if (nota === -1) {
       break;
     }
    
     sumaNotas += nota;
     contadorDeNotas++;
    }
    
    return sumaNotas / contadorDeNotas;
   }
    // llamar a la funció para calcular el promedio de notas
   console.log(calcularPromedioNotas());


   /* 5. Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro.*/

   function doble(valor) {
    return valor * 2;
   }
   console.log(doble(6));

  /* 6. Una función que se llame cuadrado, que reciba como parámetro un
   valor, y devuelva el valor del numero ingresado como parámetro
   elevado al cuadrado.*/

   function cuadrado(valor) {
    return valor * valor;
   }

   console.log(cuadrado(8));


/* 7. Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado. */


function siguiente(num) {
    return num + 1;
 }
 
 function doble(num) {
    return num * 2;
 }
 
 function cuadrado(num) {
    return num * num;
 }

 function imprimirValores(num) {
    console.log("El siguiente número es: " + siguiente(num));
    console.log("El doble es: " + doble(num));
    console.log("El cuadrado es: " + cuadrado(num));
 }

 imprimirValores(4);

/* 8. Realizar Una función que se denomine imprimirElDobleDelSiguiente que dado
 un número por parámetro, imprima cual es el valor siguiente al el doble.
 Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
 doble. */

 function siguiente(num) {
    return num + 1;
  }
  
  function doble(num) {
    return num * 2;
  }

  function imprimirDobleDelSiguiente(num) {
    console.log("El doble del siguiente número es: " + doble(siguiente(num)));
  }

  imprimirDobleDelSiguiente(2);


 /* 9. Hacer Una función que se denomine
  imprimirElDobleDelSiguienteAlCuadrado que dado un número por
  parámetro, imprima cual es el valor siguiente al el doble. Usando las
  funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
  cuadrado */

  function siguiente(num) {
    return num + 1;
   }
   
   function doble(num) {
    return num * 2;
   }
   
   function cuadrado(num) {
    return num * num;
   }

   function imprimirElDobleDelSiguienteAlCuadrado(num) {
    console.log("El cuadrado del doble del siguiente número es: " + cuadrado(doble(siguiente(num))));
   }

   imprimirElDobleDelSiguienteAlCuadrado(12);

   /*10. Hacer Una función que dado la longitud de un lado de un cuadrado devuelva
   el perímetro */

   function perimetroCuadrado(lado) {
    return lado * 4;
   }

   console.log(perimetroCuadrado(2));

/* 11. Una función que dado la longitud de un lado de un cuadrado devuelva
   la superficie.*/


   function superficieCuadrado(lado) {
    return lado * lado;             //sin metodo Math.pow
   }
   console.log(superficieCuadrado(8));


/* 12.Una función que dado el radio de un círculo devuelva la circunferencia
(perímetro del círculo). 


const PI = 3.14159;

function circunferenciaCirculo(radio) {
 return 2 * radio * PI;              //sin metodo math.PI
}
console.log(circunferenciaCirculo(10));
*/

/*13.Una función que dado el radio de un círculo devuelva el área del
círculo.*/

const PI = 3.14159;

function areaCirculo(radio) {
 return PI * radio * radio;    //sin metodo math.PI
}

console.log(areaCirculo(8));

/*14.Una función que dado un número de mes y me devuelva la cantidad de
días de ese mes (suponiendo que no es un año bisiesto).*/

const cantidadDiasPorMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31
   };
   
   function diasEnMes(mes) {
    return cantidadDiasPorMes[mes];
   }

   console.log(diasEnMes('febrero'));

   /*15.Una función que reciba como parámetro un año y diga si ese año es
   bisiesto.
   - Tener en cuenta que  para determinar si un año es bisiesto, 
   necesitas verificar si el año es divisible por 4, 
   pero no por 100, a menos que también sea divisible por 400. */


   function anioBisiesto(anio) {
    if (anio % 4 !== 0) {
      return false;
    } else if (anio % 100 !== 0) {
      return true;
    } else if (anio % 400 !== 0) {
      return false;
    } else {
      return true;
    }
   }

   console.log(anioBisiesto(2019));

/* 16. hacer Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes.*/
   const diasPorMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31
   };
   
   function diasEnMes(mes, anio) {
    if (mes === 'febrero' && esBisiesto(anio)) {
     return 29;
    } else {
     return diasPorMes[mes];
    }
   }
   console.log(diasEnMes('febrero', 2019));


   /*17. Hacer Una función que reciba día, mes y año y devuelva el día anterior 
   const diasPorMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31
   };

   function diaAnterior(dia, mes, anio) {
    if (dia > 1) {
     return [dia - 1, mes, anio];
    } else if (mes > 1) {
     return [diasEnMes(meses[mes - 2], anio), meses[mes - 2], anio];
    } else {
     return [31, 'diciembre', anio - 1];
    }
   }


   console.log(diaAnterior(1, 'enero', 2021));  */

/*18. Hacer Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes.

const diasPorMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31
   };
   
   function diasEnMes(mes, anio) {
    if (mes === 'febrero' && esBisiesto(anio)) {
    return 29;
    } else {
    return diasPorMes[mes];
    }
   }
   
   function ultimoDiaDelMes(dia, mes, anio) {
    return diasEnMes(mes, anio);
   } 
   
   console.log(ultimoDiaDelMes(1, 'enero', 2021));
   */


   // TEMA: STRINGS Y ARRAYS


/*19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
clase. Itere el array utilizando un bucle while y luego imprima todas las
edades en la consola. */

let edades = [19, 23, 26, 28, 30];
let i = 0;
while (i < edades.length) {
   console.log(edades[i]);
   i++;
}

/*20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
para imprimir solo números pares. Cambie el ciclo para usar un ciclo
"for" en lugar de un ciclo "while". 

let edades = [19, 28, 20, 22, 24];
for (let i = 0; i < edades.length; i++) {
  if (edades[i] % 2 === 0) {
     console.log(edades[i]);
  }
}*/


/*21.Ejercicio 3: escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola.

function imprimirMinimo(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log(min);
   }

let edades = [19, 28, 20, 22, 24];
imprimirMinimo(edades);
*/

/* 22.Ejercicio 4: escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola. 


function imprimirMaximo(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    }
    console.log(max);
   }

   let edades = [19, 28, 20, 22, 24];
imprimirMaximo(edades); */

/* 23.Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
un índice. La función imprimirá el valor del elemento en la posición
dada (basado en uno) en la consola. Por ejemplo, dada la siguiente

array e índice, la función imprimirá '6'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1; */


function imprimirElemento(arr, index) {
    let elemento = arr[index - 1]; // Los índices comienzan en 0
    console.log(elemento);
   }
   
   var array = [6,7,26,24,10,90,80,33,60,14,22];  // imprime 6
   var index = 1;
   imprimirElemento(array, index);

  /* 24.Ejercicio 6: Escriba una función que reciba una array y solo imprima los
   valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
   función imprimirá '6,23,33,100'.
   var array =
   [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */

   function imprimirRepetidos(arr) {
    for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] === arr[j]) {
         console.log(arr[i]);
       }
     }
    }
   }

   var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
   imprimirRepetidos(array); // Imprime: 6, 23, 33, 100

/*25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
elementos de la siguiente array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
"Negro"


var myColor = ["Red", "Green", "White", "Black"];
var result = "";
for (var i = 0; i < myColor.length; i++) {   //sin metodos join ni  slice
 result += myColor[i] + ", ";   
}
console.log(result); // Imprime: "Red, Green, White, Black," */

/* 26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423. */


function invertirNumero(num) {
    var numInvertido = 0;
    while (num > 0) {
       numInvertido = (numInvertido * 10) + (num % 10);
       num = Math.floor(num / 10);
    }
    return numInvertido;
  }
  console.log(invertirNumero(32443)); // salida: 34423


 /* 27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
  en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
  ser 'abeemrstw'. La puntuación y los números no se pasan en la
  cadena.  */

  function ordenarCadena(cadena) {
    var cadenaOrdenada = '';
    var longitud = cadena.length;
    var caracteres = [];
   
    // Llenar el array con los caracteres de la cadena
    for (var i = 0; i < longitud; i++) {
      caracteres.push(cadena[i]);
    }
   
    // Ordenar el array de caracteres
    for (var i = 0; i < longitud - 1; i++) {
      for (var j = i + 1; j < longitud; j++) {
        if (caracteres[i] > caracteres[j]) {
          var temp = caracteres[i];
          caracteres[i] = caracteres[j];
          caracteres[j] = temp;
        }
      }
    }
   
    // Unir los caracteres ordenados en la cadena
    for (var i = 0; i < longitud; i++) {
      cadenaOrdenada += caracteres[i];
    }
   
    return cadenaOrdenada;
   }
   console.log(ordenarCadena('webmaster')); // salida: 'abeemrstw'


/*28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
persia", la salida debería ser "Prince Of Persia". */



function convertirPrimeraLetraMayusculas(cadena) {
    var resultado = '';
    var esPrimeraLetra = true;
   
    for (var i = 0; i < cadena.length; i++) {
      var caracter = cadena.charAt(i);
      if (caracter === ' ') {
        esPrimeraLetra = true;
        resultado += caracter;
      } else if (esPrimeraLetra) {
        resultado += caracter.toUpperCase();
        esPrimeraLetra = false;
      } else {
        resultado += caracter;
      }
    }
   
    return resultado;
   }
   console.log(convertirPrimeraLetraMayusculas('prince of persia')); // SALIDA: 'Prince Of Persia'


/*29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
el resultado debería ser "Desarrollo". */
function encontrarPalabraMasLarga(cadena) {
    var palabras = [];
    var palabraActual = '';
   
    for (var i = 0; i < cadena.length; i++) {
     var caracter = cadena.charAt(i);
     if (caracter !== ' ') {
       palabraActual += caracter;
     } else {
       palabras.push(palabraActual);
       palabraActual = '';
     }
    }
   
    palabras.push(palabraActual);
   
    var palabraMasLarga = '';
    for (var i = 0; i < palabras.length; i++) {
     if (palabras[i].length > palabraMasLarga.length) {
       palabraMasLarga = palabras[i];
     }
    }
   
    return palabraMasLarga;
   }
   console.log(encontrarPalabraMasLarga('Tutorial de desarrollo web')); // SALIDA: 'Desarrollo'
