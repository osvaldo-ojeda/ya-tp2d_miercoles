# clase 1

## ¿Qué es una variable?

Una variable es un contenedor para un valor, como un número que podríamos usar en una suma, o una cadena que podríamos usar como parte de una oración. Pero una cosa especial acerca de las variables es que los valores que contienen pueden cambiar.

## Declarar una variable

Para usar una variable, primero debes crearla — precisamente, a esto lo llamamos declarar la variable. Para hacerlo, escribimos la palabra clave var o let seguida del nombre con el que deseas llamar a tu variable:

     let name;
     let age;

Aquí estamos creando dos variables llamadas name y age.

Puedes probar si estos valores existen ahora en el entorno de ejecución escribiendo solo el nombre de la variable, p. ej.

    console.log(name);
    console.log(age);
     

Actualmente no tienen ningún valor; son contenedores vacíos. Cuando ingreses los nombres de las variables, deberías obtener devuelto un valor undefined. 

- Nota: No confundas una variable que existe pero no tiene un valor definido, con una variable que no existe en absoluto — son cosas muy diferentes. Haciendo una analogi con cajas, no existir significaría que no hay una caja (variable) para guardar un valor. Ningún valor definido significaría que HAY una caja, pero no tiene ningún valor dentro de ella.

## Iniciar una variable
Una vez que hayas declarado una variable, la puedes iniciar con un valor. Para ello, escribe el nombre de la variable, seguido de un signo igual (=), seguido del valor que deseas darle. Por ejemplo:

     name = 'Pedro';
     age = 37;

Intenta volver a la consola ahora y escribe estas líneas. Deberías ver el valor que le has asignado a la variable devuelto en la consola para confirmarlo, en cada caso. Nuevamente, puedes devolver los valores de tus variables simplemente escribiendo su nombre en la consola;

     name;
     age;
o 

     console.log(name);
     console.log(age);
Podes declarar e iniciar una variable al mismo tiempo, así:

     let dog = 'Juampi';

Esto probablemente es lo que harás la mayor parte del tiempo, ya que es más rápido que realizar las dos acciones en dos líneas separadas.

## Diferencia entre var y let
En este punto, podes estar pensando "¿por qué necesitamos dos palabras clave para definir variables? ¿Por qué var y let?".

Las razones son algo históricas. Cuando se creó JavaScript por primera vez, solo existía var. Esto básicamente funciona bien en la mayoría de los casos, pero tiene algunos problemas en la forma en que trabaja — su diseño a veces puede ser confuso o francamente molesto. Entonces, se creó let en versiones modernas de JavaScript, una nueva palabra clave para crear variables que funciona de manera algo diferente a var, solucionando sus problemas en el proceso.

A continuación se explican un par de diferencias simples. No abordaremos todas las diferencias ahora, pero comenzarás a descubrirlas a medida que aprendas más sobre JavaScript.

Para empezar, si escribes un programa JavaScript de varias líneas que declara e inicia una variable, puedes declarar una variable con var después de iniciarla y seguirá funcionando. Por ejemplo:

     myName = 'Chris';
     function logName() {
     console.log(myName);
     }
     logName();
     var myName;

Nota: Esto no funcionará al escribir líneas individuales en una consola de JavaScript, solo cuando se ejecutan varias líneas de JavaScript en un documento web.

Esto funciona debido a la elevación o hoisting.

-----------
> ## Hoisting
> Hoisting es un término que no encontrará utilizado en ninguna especificación previa a la Especificación del Lenguaje ECMAScript® 2015. El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto puede ser un poco confuso al principio.
>Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
>Una de las ventajas en JavaScript de colocar (ponerlas en memoria) las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el código. Por ejemplo:

     function nombreDelGato(nombre) {
     console.log("El nombre de mi gato es " + nombre);
     }

     nombreDelGato("Pepe");
     /*
     El resultado del código es: "El nombre de mi gato es Pepe"
     */

>El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:

     nombreDelGato("Dumas");

     function nombreDelGato(nombre) {
     console.log("El nombre de mi gato es " + nombre);
     }
     /*
     El resultado del código es: "El nombre de mi gato es Dumas"
     */

>Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript.
>Hoisting se lleva también bien con otros tipos de datos y variables. Observemos el siguiente ejemplo:

     //Ejemplo técnico
     var x = 5;
     (function () {
     console.log("x:", x); // no obtenemos '5' sino 'undefined'
     var x = 10;
     console.log("x:", x); // 10
     }());

>¿No hemos obtenido lo esperado?, como la declaración de variables se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es igual a declararla al inicio del mismo. Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable se eleva y pasa a declararse al comienzo de su contexto, en este caso la función que la contiene.

>El ejemplo anterior se entiende implícitamente como:

     var x = 5;
     (function () {
     var x; // Se elevo la declaración
     console.log("x:", x); // undefined
     x = 10;
     console.log("x:", x); // 10
     }());

>JavaScript sólo utiliza el hoisting en declaraciones, no inicializaciones. Si está utilizando una variable que es declarada e inicializada después (está después en el código) de usarla, el valor será undefined. El siguiente ejemplo demuestra ese comportamiento:

     var x = 1; // Inicializa x
     console.log(x + " " + y); // '1 undefined'
     var y = 2; // Inicializa y

>como se puede apreciar la elevación afecta la declaración de variables, pero no su inicialización. El valor será asignado exactamente cuando la sentencia de asignación sea alcanzada.

>El ejemplo anterior se entiende implícitamente como:

     var x = 1; // Inicializa x
     var y;// Se elevo la declaración
     console.log(x + " " + y); // '1 undefined'
     y = 2; // Inicializa y

-----------
<p style="color:red">La elevación (hoisting) ya no funciona con let. Si cambiamos var a let en el ejemplo anterior, fallaría con un error. Esto es bueno — declarar una variable después de iniciarla resulta en un código confuso y más difícil de entender.</p>

En segundo lugar, cuando usas var, puedes declarar la misma variable tantas veces como desees, pero con let no puedes. Lo siguiente funcionaría:

     var myName = 'Chris';
     var myName = 'Bob';

Pero lo siguiente arrojaría un error en la segunda línea:

     let myName = 'Chris';
     let myName = 'Bob';

Tendrías que hacer esto en su lugar:

     let name = 'Chris';
     name = 'Bob';

>Nuevamente, esta es una sensata decisión del lenguaje. No hay razón para volver a declarar las variables — solo hace que las cosas sean más confusas.

Por estas y otras razones, se recomienda utilizar let tanto como sea posible en tu código, en lugar de var. No hay ninguna razón para usar var, a menos que necesites admitir versiones antiguas de Internet Explorer con tu código (no es compatible con let hasta la versión 11; Edge el moderno navegador de Windows admite let perfectamente).

## Actualizar una variable
Una vez que una variable se ha iniciado con un valor, puedes cambiar (o actualizar) ese valor simplemente dándole un valor diferente. Intenta ingresar las siguientes líneas en tu consola:

     name = 'Bob';
     age = 40;

## Un consejo sobre las reglas de nomenclatura de variables
Puedes llamar a una variable prácticamente como quieras, pero existen limitaciones. En general, debes limitarte a usar caracteres latinos (0-9, a-z, A-Z) y el caracter de subrayado.

- No debes usar otros caracteres porque pueden causar errores o ser difíciles de entender para una audiencia internacional.
- No use guiones bajos al comienzo de los nombres de las variables — esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede resultar confuso.
- No uses números al comienzo de las variables. Esto no está permitido y provoca un error.
- Una convención segura a seguir es la llamada "minúscula mayúsculas intercaladas", en la que se juntan varias palabras con minúsculas para la primera palabra completa y luego en mayúsculas las primeras letras de las siguientes palabras. Así lo hemos estado haciendo en nuestros nombres de variables en el artículo hasta ahora.
- Haz que los nombres de las variables sean intuitivos, para que describan los datos que contienen. No uses solo letras/números o frases grandes y largas.
- Las variables distinguen entre mayúsculas y minúsculas — por lo tanto myage es una variable diferente de myAge.
- Un último punto: también debes evitar el uso de palabras reservadas de JavaScript como nombres de variables — con esto, nos referimos a las palabras que componen la sintaxis real de JavaScript. Por lo tanto, no puedes usar palabras como var, function, let y for como nombres de variables. Los navegadores las reconocen como elementos de código diferentes, por lo que obtendrás errores.
Nota: Puedes encontrar una lista bastante completa de palabras clave reservadas que debes evitar en Gramática léxica — Palabras clave.

     Ejemplos de buenos nombres:

     age
     myAge
     init
     initialColor
     finalOutputValue
     audio1
     audio2

     Ejemplos de nombres incorrectos:

     1
     a
     _12
     myage
     MYAGE
     var
     Document
     skjfndskjfnbdskjfb
     thisisareallylongstupidvariablenameman



## Tipo de las variables

Hay algunos tipos de datos diferentes que podemos almacenar en variables. En esta sección, los describiremos brevemente.

Hasta ahora hemos analizado los dos primeros, pero hay otros.
### ___Datos primitivos___
### Números
- Puedes almacenar números en variables, ya sea números enteros como 30 (también llamados enteros — "integer") o números decimales como 2.456 (también llamados números flotantes o de coma flotante — "number"). No es necesario declarar el tipo de las variables en JavaScript, a diferencia de otros lenguajes de programación. Cuando le das a una variable un valor numérico, no incluye comillas:

     let myAge = 17;

### Cadenas de caracteres (Strings)
- Las strings (cadenas) son piezas de texto. Cuando le das a una variable un valor de cadena, debes encerrarlo entre comillas simples o dobles; de lo contrario, JavaScript intenta interpretarlo como otro nombre de variable.

     let saludo ='Hola, como estas? ';

### Booleanos
- Los booleanos son valores verdadero/falso — pueden tener dos valores, true o false. Estos, generalmente se utilizan para probar una condición, después de lo cual se ejecuta el código según corresponda. Así, por ejemplo, un caso simple sería:

     let iAmAlive = true;
     

Mientras que en realidad se usaría más así:

     let test = 6 < 3;
     
Aquí se está usando el operador "menor que" (<) para probar si 6 es menor que 3. Como era de esperar, devuelve false, ¡porque 6 no es menor que 3! 

### Undefined
- Una variable a la que no se le ha asignado un valor tiene el valor undefined.

### null

- El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío". Es uno de los valores primitivos de Javascript.
- El valor null es un literal (no una propiedad del objeto global como podría ser undefined). En APIs, se devuelve null normalmente dónde se espera un objeto pero éste no es relevante. Al comparar con null o undefined hay que tener en cuenta las diferencias entre los operadores de igualdad (==) e identidad (===) (con el primero se realiza una conversión de tipo).

          typeof null        // object (bug en ECMAScript, debería ser null)
          typeof undefined   // undefined
          null === undefined // false
          null  == undefined // true



### BigInt
- El tipo BigInt (en-US) es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. Con BigInts, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para Numbers.

-Un BigInt se crea agregando n al final de un número entero o llamando al constructor.

     const x = 2n ** 53n;
     9007199254740992n
     const y = x + 1n;
     9007199254740993n

- Puedes utilizar los operadores +, *, -, ** y % con BigInts, igual que con Numbers. Un BigInt no es estrictamente igual a un Number, pero lo es en términos generales.

- Un BigInt se comporta como un Number en los casos en que se convierte a Boolean: if, ||, &&, Boolean, !.

- Los BigInt no se pueden utilizar indistintamente con los Number. En su lugar, se lanzará un TypeError.

### Tipo Symbol
- Un símbolo es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto. En algunos lenguajes de programación, los símbolos se denominan "átomos".

para saber mas [symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

----------------
### ___Datos complejos___
## Arreglos
Un arreglo es un objeto único que contiene múltiples valores encerrados entre corchetes y separados por comas. Intenta ingresar las siguientes líneas en tu consola:

     let myNameArray = ['Chris', 'Bob', 'Jim'];
     let myNumberArray = [10, 15, 40];

Una vez que se definen estos arreglos, puedes acceder a cada valor por su ubicación dentro del arreglo. Prueba estas líneas:

     myNameArray[0]; // debería devolver 'Chris'
     myNumberArray[2]; // debe devolver 40

Los corchetes especifican un valor de índice correspondiente a la posición del valor que deseas devolver. Posiblemente hayas notado que los arreglos en JavaScript tienen índice cero: el primer elemento está en el índice 0.



## Objetos
En programación, un objeto es una estructura de código que modela un objeto de la vida real. Puedes tener un objeto simple que represente una caja y contenga información sobre su ancho, largo y alto, o podrías tener un objeto que represente a una persona y contenga datos sobre su nombre, estatura, peso, qué idioma habla, cómo saludarlo, y más.

Intenta ingresar la siguiente línea en tu consola:

     let dog = { name : 'Spot', breed : 'Dalmatian' };

Para recuperar la información almacenada en el objeto, puedes utilizar la siguiente sintaxis:

     dog.name

## funciones
Las funciones son objetos regulares con la capacidad adicional de ser invocables.

En JavaScript, las funciones son bloques de código que se pueden llamar en cualquier momento y que realizan una tarea específica. Las funciones se utilizan para reutilizar el código, hacer que el código sea más legible y modular, y para dividir un programa en fragmentos más pequeños y manejables.

En JavaScript, las funciones pueden ser definidas de varias maneras, incluyendo:

- Funciones con nombre: se definen mediante la palabra clave function seguida del nombre de la función y un conjunto de paréntesis que contienen los parámetros de la función.

          function sumar(a, b) {
          return a + b;
          }

- Funciones anónimas: se definen mediante la palabra clave function seguida de un conjunto de paréntesis que contienen los parámetros de la función, seguido de un bloque de código que contiene la lógica de la función.

          const sumar = function(a, b) {
          return a + b;
          }
- Funciones de flecha (arrow functions): son una forma más concisa de definir funciones anónimas y se definen mediante el uso de una flecha (=>).

          const sumar = (a, b) => {
          return a + b;
          }
Todas estas formas de definir funciones en JavaScript tienen la misma funcionalidad básica, que es ejecutar un bloque de código cuando se llama la función. Las funciones también pueden aceptar parámetros como entrada, y pueden devolver valores como salida.

Las funciones también pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores de otras funciones. Las funciones en JavaScript son una parte fundamental de la programación y son una herramienta poderosa para construir aplicaciones y sitios web interactivos.
------------------

Tipado dinámico
JavaScript es un "lenguaje tipado dinámicamente", lo cual significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá una variable (números, cadenas, arreglos, etc.).

Por ejemplo, si declaras una variable y le das un valor entre comillas, el navegador trata a la variable como una cadena (string):

     let myString = 'Hello';

Incluso si el valor contiene números, sigue siendo una cadena, así que ten cuidado:
     let myNumber = '500'; // Vaya, esto sigue siendo una cadena
     typeof myNumber;
     myNumber = 500; // mucho mejor — ahora este es un número
t    ypeof myNumber;


## Constantes en JavaScript
Muchos lenguajes de programación tienen el concepto de una constante — un valor que, una vez declarado no se puede cambiar. Hay muchas razones por las que querrías hacer esto, desde la seguridad (si un script de un tercero cambia dichos valores, podría causar problemas) hasta la depuración y la comprensión del código (es más difícil cambiar accidentalmente valores que no se deben cambiar y estropear cosas claras).

En los primeros días de JavaScript, las constantes no existían. En JavaScript moderno, tenemos la palabra clave const, que nos permite almacenar valores que nunca se pueden cambiar:

     const daysInWeek = 7;
     const hoursInDay = 24;

const funciona exactamente de la misma manera que let, excepto que a const no le puedes dar un nuevo valor. En el siguiente ejemplo, la segunda línea arrojará un error:

     const daysInWeek = 7;
     daysInWeek = 8;