/*1-Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.*/

alert("Hello World");

/* 2- Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).*/

document.write("hello world");


/* 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5. */

document.write(3+5);

/* 4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”*/

let nombreUsuario = prompt("Ingrese nombre de usuario");

document.write(`Hola usuario ${nombreUsuario}`);

/* 5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números. */

const num1 = parseInt(prompt('Ingrese el primer numero'));
const num2 = parseInt(prompt('Ingrese el segundo numero'));

const suma = num1 + num2;

document.write(`la suma de ${num1} y ${num2} es:${suma}`);

/* 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor. */

let num3 = parseInt(prompt('Ingrese el primer numero'));
let num4 = parseInt(prompt('Ingrese el segundo numero'));

if ( num3 > num4 ){
    alert(`El numero mayor es: ${num3}`);
} else{
    alert(`El numero mayo es: ${num4}`);
}

/* 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres. */

let num5 = prompt("Ingrese el primer número:");
let num6 = prompt("Ingrese el segundo número:");
let num7 = prompt("Ingrese el tercer número:");

let mayor;

if (num5 > num6 &&  num5 > num7){
    mayor = num5
} else if (num6 > num5 && num6 > num7){
  mayor = num6
} else {
  mayor = num7
}
document.write(`El mayor de los numeros es: ${mayor}`);

/*8. Escribe un programa que pida un número y diga si es divisible 
por 2 en javascript*/ 

let numero = parseInt(prompt("Ingrese un numero"));
if (numero % 2 == 0){
    document.write("El numero es divisible por dos");
} else{
    document.write("El numero no es divisible por dos")
}

/* 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a en javascript 

let frase = (prompt("Ingrese una frase:"));
let contador = 0;

for (let i=0; i < frase.length; i++){
    if (frase[i] === 'a'){
        contador ++;
    }
}

alert(`la letra a aparece en la frase ${contador} veces`);*/

/*10. Escribe un programa que pida un parrafo y escriba las vocales que aparecen

let parrafo = prompt("Introduce una frase:");
let resultado = "";

for (let i = 0; i < parrafo.length; i++) {
 let letra = parrafo[i].toLowerCase();

 if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
   resultado += letra;
 }
}

alert(` las vocales que aparecen son: ${resultado}`);*/

/*11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales 

let frase = prompt("Introduce una frase:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
 let letra = frase[i].toLowerCase();  //método toLowerCase devuelve el valor de la cadena convertida a minúsculas

 if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
  contador++;
 }
}

console.log(` la cantidad de las letras que tiene la frase y son volcales son: ${contador}`); */


/*12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales */

let frase = prompt("Introduce una frase:");
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < frase.length; i++) {
 let letra = frase[i].toLowerCase();

 if (letra === 'a') {
  contadorA++;
 } else if (letra === 'e') {
  contadorE++;
 } else if (letra === 'i') {
  contadorI++;
 } else if (letra === 'o') {
  contadorO++;
 } else if (letra === 'u') {
  contadorU++;
 }
}

console.log("A: " + contadorA);
console.log("E: " + contadorE);
console.log("I: " + contadorI);
console.log("O: " + contadorO);
console.log("U: " + contadorU);

/*13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro) 


let num= prompt("Introduce un número:");

if (num % 2 === 0) {
 console.log(num + " es divisible por 2");
} else if (num % 3 === 0) {
 console.log(nume+ " es divisible por 3");
} else if (num % 5 === 0) {
 console.log(num + " es divisible por 5");
} else if (num % 7 === 0) {
 console.log(num + " es divisible por 7");
} else {
 console.log(num + " no es divisible por 2, 3, 5 o 7");
}
*/

/*14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
    que decir todos por los que es divisible)*/

let num = prompt("Introduce un número:");

let divisores = "";

if (num % 2 === 0) {
 divisores += "2 ";
}

if (num % 3 === 0) {
 divisores += "3 ";
}

if (num % 5 === 0) {
 divisores += "5 ";
}

if (num % 7 === 0) {
 divisores += "7 ";
}

if (divisores !== "") {
 console.log(num + " es divisible por " + divisores);
} else {
 console.log(num + " no es divisible por 2, 3, 5 o 7");
}
/*15.Escribir un programa que escriba en pantalla los divisores de un número dado*/

let n = prompt("Introduce un número:");

for (let i = 1; i <= n; i++) {
 if (n % i === 0) {
   console.log(i);
 }
}

/*16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados*/
let num8 = parseInt(prompt("Introduce el primer número"));
let num9 = parseInt(prompt("Introduce el segundo número"));

for (let i = 1; i <= num8; i++) {
 if (num8 % i === 0 && num9 % i === 0) {
  console.log(i);
 }
}

/* 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
    por ninguno otro número que no sea él mismo o la unidad)
let num = prompt("Introduce un número:");

let numeroPrimo = true;

for (let i = 2; i < num; i++) {
 if (num % i === 0) {
 numeroPrimo = false;
 break;
 }
}

if (numeroPrimo) {
 console.log(num + " es un número primo");
} else {
 console.log(num + " no es un número primo");
}
*/

/*18. Pide la edad y si es mayor de 18 años indica que ya puede conducir*/

let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
 console.log("Mayor de 18 años podes conducir");
} else {
 console.log("Menor de 18 no podes conducir");
}


/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */

while (true) {
    let nota = parseInt(prompt("Ingrese la nota o 'n' para terminar:"));
   
    if (nota === 'n') {
    break;
    }
   
    if (nota >= 0 && nota <= 3) {
    console.log("Muy deficiente");
    } else if (nota >= 4 && nota <= 5) {
    console.log("Insuficiente");
    } else if (nota >= 6 && nota <= 6) {
    console.log("Suficiente");
    } else if (nota >= 7 && nota <= 7) {
    console.log("Bien");
    } else if (nota >= 8 && nota <= 9) {
    console.log("Notable");
    } else if (nota >= 10 && nota <= 10) {
    console.log("Sobresaliente");
    } else {
    console.log("Nota inválida");
    }
   }

   /*20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión*/

let cadenaFinal = '';
let cadenaActual;

while (true) {
 cadenaActual = prompt('Introducir una cadena de texto (o "cancelar" para terminar):');
 
 if (cadenaActual === 'cancelar') {
   break;
 }
 
 cadenaFinal += cadenaActual + '-';
}

console.log(cadenaFinal);


/*21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. 

let sumaTotal = 0;
let numero;

while (true) {
   numero = prompt("Introducir un número o pulsar 'cancelar' para finalizar");

   // Si el usuario pulsa 'cancelar' o introduce algo que no es un número, sale del bucle
   if (numero === null || isNaN(numero)) {
       break;
   }
 
   // Si el usuario introduce un número, lo sumamos a la suma total
   sumaTotal += Number(numero);
}

alert("La suma total de los números introducidos es: " + sumaTotal);*/ 



/*22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente:

- El número debe ser entre 0 y 99999999
-  Debemos calcular el resto de la división entera entre el número y el número
23.
- Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
-Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
- Deberá de repetirse el proceso hasta que el usuario pulse «cancelar»

/*document.getElementById('dniForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var numeroDNI = document.getElementById('dniInput').value;
    if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
      alert('Por favor, introduce un número de DNI válido.');
      return;
    }
    var letraDNI = calcularLetraDNI(numeroDNI);
    document.getElementById('dniLetter').textContent = "La letra del DNI " + numeroDNI + " es: " + letraDNI;
   }); */

   /*función  para calcular la letra del DNI: Esta función tomará el número de DNI ingresado por el usuario, 
   calculará el resto de la división entera entre el número y 23, y devolverá la letra correspondiente 
   a ese resto.*/

   function calcularLetraDNI(numeroDNI) {
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var resto = numeroDNI % 23;
    return letras.charAt(resto);
   }


   /*Crear un controlador de eventos para el formulario: Este controlador de eventos tomará el número de DNI ingresado por el usuario, calculará la letra del 
   DNI utilizando la función que acabas de crear, y mostrará la letra del DNI en la página. */
   
   document.getElementById('dniForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var numeroDNI = document.getElementById('dniInput').value;
    if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
      alert('Por favor, introduce un número de DNI válido.');
      return;
    }
    var letraDNI = calcularLetraDNI(numeroDNI);
    document.getElementById('dniLetter').textContent = "La letra del DNI " + numeroDNI + " es: " + letraDNI;
   });







/*23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
....... */

for (let i = 1; i <= 30; i++) {
  let salida = '';
  for (let j = 1; j <= i; j++) {
      salida += i.toString();
  }
  console.log(salida);
}
/*24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1 

let n = 3; // número ingresado por el usuario
for (let i = n; i >= 1; i--) {
  let output = '';
  for (let j = 1; j <= i; j++) {
      output += i.toString();
  }
  console.log(output);
}*/



/* 25. Un script que escriba los números del 1 al 10, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7

8 (Múltiplo de 4)
9 (Múltiplo de 9)
10  */


for(let i = 1; i <= 10; i++) {
  if(i % 4 === 0) {
      console.log(i + " (Múltiplo de 4)");
  } else if(i % 9 === 0) {
      console.log(i + " (Múltiplo de 9)");
  } else {
      console.log(i);
  }

  if(i % 5 === 0) {
      console.log("———————————————————");
  }
}