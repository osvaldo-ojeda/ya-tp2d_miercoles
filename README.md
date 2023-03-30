# Array
El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.
## Descripción
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.

## Operaciones habituales
___Crear un Array__

     let frutas = ["Manzana", "Banana"]

     console.log(frutas.length)
     // 2

__Acceder a un elemento de Array mediante su índice__

     let primero = frutas[0]
     // Manzana

     let ultimo = frutas[frutas.length - 1]
     // Banana

__Recorrer un Array__

     frutas.forEach(function(elemento, indice, array) {
     console.log(elemento, indice);
     })
     // Manzana 0
     // Banana 1
     
__Añadir un elemento al final de un Array__

     let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
     // ["Manzana", "Banana", "Naranja"]

__Eliminar el último elemento de un Array__

     let ultimo = frutas.pop() // Elimina "Naranja" del final
     // ["Manzana", "Banana"]

__Añadir un elemento al principio de un Array__

     let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
     // ["Fresa" ,"Manzana", "Banana"]

__Eliminar el primer elemento de un Array__

     let primero = frutas.shift() // Elimina "Fresa" del inicio
     // ["Manzana", "Banana"]

__Encontrar el índice de un elemento del Array__

     frutas.push('Fresa')
     // ["Manzana", "Banana", "Fresa"]

     let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
     // 1

__Eliminar un único elemento mediante su posición__

- Ejemplo:
Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

          let elementoEliminado = frutas.splice(pos, 1)
          // ["Manzana", "Fresa"]
         
__Eliminar varios elementos a partir de una posición__

<p style="color:red">Nota:
Con .splice() no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.</p>

     let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
     console.log(vegetales)
     // ["Repollo", "Nabo", "Rábano", "Zanahoria"]

     let pos = 1, 
     let numElementos = 2

     let elementosEliminados = vegetales.splice(pos, numElementos)
     // ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

     console.log(vegetales)
     // ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

__Copiar un Array__

     let copiaArray = vegetales.slice();
     // ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

## Acceso a elementos de un array
Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.

Si se utiliza un número de índice no válido, se obtendrá undefined.

     let arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']
     console.log(arr[0])              // escribe en consola 'este es el primer elemento'
     console.log(arr[1])              // escribe en consola 'este es el segundo elemento'
     console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'

Los elementos de un array pueden considerarse propiedades del objeto tanto como toString (sin embargo, para ser precisos, toString() es un método). Sin embargo, se obtendrá un error de sintaxis si se intenta acceder a un elemento de un array de la forma siguiente, ya que el nombre de la propiedad no sería válido:

     console.log(arr.0) // error de sintaxis

No hay nada especial ni en los arrays de JavaScript ni en sus propiedades que ocasione esto. En JavaScript, las propiedades cuyo nombre comienza con un dígito no pueden referenciarse con la notación punto y debe accederse a ellas mediante la notación corchete.

Por ejemplo, dado un objeto con una propiedad de nombre '3d', sólo podría accederse a dicha propiedad con la notación corchete.

     let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
     console.log(decadas.0)  // error de sintaxis
     console.log(decadas[0]) // funciona correctamente


Obsérvese que, en el último ejemplo, ha sido necesario poner '3d' entre comillas. Es posible usar también comillas con los índices del los arrays de JavaScript (p. ej., decadas['2'] en vez de decadas[2]), aunque no es necesario.

El motor de JavaScript transforma en un string el 2 de decadas[2] a través de una conversión implícita mediante toString. Por tanto, '2' y '02' harían referencia a dos posiciones diferentes en el objeto decadas, y el siguiente ejemplo podría dar true como resultado:

     console.log(decadas['2'] != decadas['02'])

## Relación entre length y las propiedades numéricas
La propiedad length de un array de JavaScript está conectada con algunas otras de sus propiedades numéricas.

Varios de los métodos propios de un array (p. ej., join(), slice(), indexOf(), etc.) tienen en cuenta el valor de la propiedad length de un array cuando se les llama.

Otros métodos (p. ej., push(), splice(), etc.) modifican la propiedad length de un array.

     const frutas = []
     frutas.push('banana', 'manzana', 'pera')

     console.log(frutas.length) // 3

Cuando se le da a una propiedad de un array JavaScript un valor que corresponda a un índice válido para el array pero que se encuentre fuera de sus límites, el motor actualizará el valor de la propiedad length como corresponda:

     frutas[5] = 'fresa'
     console.log(frutas[5])           // 'fresa'
     console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
     console.log(frutas.length)       // 6

Si se aumenta el valor de length:

     frutas.length = 10
     console.log(frutas)              // ['banana', 'manzana', 'pera', <2 empty items>, 'fresa', <4 empty items>]
     console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
     console.log(frutas.length)       // 10
     console.log(frutas[8])           // undefined

Si se disminuye el valor de la propiedad length pueden eliminarse elementos:

     frutas.length = 2
     console.log(Object.keys(frutas)) // ['0', '1']
     console.log(frutas.length)       // 2


---------------

## Array.prototype.map()
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

     const numbers = [1, 5, 10, 15];
     const doubles = numbers.map(function(x) {
     return x * 2;
     });
     // doubles is now [2, 10, 20, 30]
     // numbers is still [1, 5, 10, 15]

     constnumbers = [1, 4, 9];
     const roots = numbers.map(function(num) {
     return Math.sqrt(num);
     });
     // roots is now [1, 2, 3]
     // numbers is still [1, 4, 9]

### Sintaxis
     conts nuevo_array = arr.map(function callback(currentValue, index, array) {
     // Elemento devuelto de nuevo_array
     },[thisArg])

### Parámetros
- callback
     - Función que producirá un elemento del nuevo array, recibe tres argumentos:
          - currentValue: El elemento actual del array que se está procesando.
          - index: El índice del elemento actual dentro del array.   
          - array: El array sobre el que se llama map.
          - thisArg: Opcional. Valor a usar como this al ejecutar callback.

## Valor devuelto
Un nuevo array en la que cada elemento es el resultado de ejecutar callback.

## Descripción
- map: llama a la función callback provista una vez por elemento de un array, en orden, y construye un nuevo array con los resultados. callback se invoca sólo para los índices del array que tienen valores asignados; no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.

- callback: es llamada con tres argumentos: el valor del elemento, el índice del elemento, y el objeto array que se está recorriendo.

- Si se indica un parámetro thisArg a un map, se usará como valor de this en la función callback. En otro caso, se pasará undefined como su valor this. El valor de this observable por el callback se determina de acuerdo a las reglas habituales para determinar el valor this visto por una función.

- map: no modifica el array original en el que es llamado (aunque callback, si es llamada, puede modificarlo).

- El rango de elementos procesado por map es establecido antes de la primera invocación del callback. Los elementos que sean agregados al array después de que la llamada a map comience no serán visitados por el callback. Si los elementos existentes del array son modificados o eliminados, su valor pasado al callback será el valor en el momento que el map lo visita; los elementos que son eliminados no son visitados.

## Ejemplos
## Procesar un array de números aplicándoles la raíz cuadrada
El siguiente código itera sobre un array de números, aplicándoles la raíz cuadrada a cada uno de sus elementos, produciendo un nuevo array a partir del inicial.

     const numeros= [1, 4, 9];
     const raices = numeros.map(Math.sqrt);
     // raices tiene [1, 2, 3]
     // numeros aún mantiene [1, 4, 9]

## Usando map para dar un nuevo formato a los objetos de un array
El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.

     const kvArray = [{clave:1, valor:10},
                    {clave:2, valor:20},
                    {clave:3, valor: 30}];

     const reformattedArray = kvArray.map(function(obj){
     let rObj = {};
     rObj[obj.clave] = obj.valor;
     return rObj;
     });

     // reformattedArray es ahora [{1:10}, {2:20}, {3:30}],

     // kvArray sigue siendo:
     // [{clave:1, valor:10},
     //  {clave:2, valor:20},
     //  {clave:3, valor: 30}]

## Mapear un array de números usando una función con un argumento
El siguiente código muestra cómo trabaja map cuando se utiliza una función que requiere de un argumento. El argumento será asignado automáticamente a cada elemento del arreglo conforme map itera el arreglo original.

     const numeros = [1, 4, 9];
     const dobles  = numeros.map(function(num) {
     return num * 2;
     });

     // dobles es ahora [2, 8, 18]
     // numeros sigue siendo [1, 4, 9]

## Mapear un array de números usando una función con un argumento
El siguiente código muestra cómo trabaja map cuando se utiliza una función que requiere de un argumento. El argumento será asignado automáticamente a cada elemento del arreglo conforme map itera el arreglo original.

     const numeros = [1, 4, 9];
     const dobles  = numeros.map(function(num) {
     return num * 2;
     });

     // dobles es ahora [2, 8, 18]
     // numeros sigue siendo [1, 4, 9]

------
## ejemplo con el argumento this
Supongamos que tenemos un objeto person con una propiedad name y un método getFullName() que devuelve el nombre completo de la persona:

     const person = {
     name: 'John',
     getFullName() {
     return `My name is ${this.name}`;
     }
     };
Ahora, supongamos que tenemos un array people que contiene varios objetos person. Queremos utilizar el método map() para obtener un nuevo array que contenga los nombres completos de todas las personas en el array original. Podemos hacerlo de la siguiente manera:

     const people = [
     { name: 'John' },
     { name: 'Jane' },
     { name: 'Bob' }
     ];

     const fullNames = people.map(function(person) {
     return this.getFullName();
     }, person);

     console.log(fullNames); // ["My name is John", "My name is Jane", "My name is Bob"]
     
En este ejemplo, pasamos el objeto person como el valor de thisArg al método map(). Luego, en la función de devolución de llamada que pasamos a map(), podemos utilizar this para hacer referencia al objeto person y llamar a su método getFullName(). Como resultado, el nuevo array fullNames contiene los nombres completos de todas las personas en el array original.