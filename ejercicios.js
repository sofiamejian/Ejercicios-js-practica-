var nombre = "Sofía";
console.log("Nombre inicial con var:", nombre);
nombre = "Jhon";
console.log("Nuevo nombre con var:", nombre);

console.log("Con const no se puede reasignar, por eso falla.");

if (false) {
    let edad = 20;
}

console.log("La variable declarada con let dentro de un if solo existe en su bloque.");

let cadena = "Hola";
let numero = 44;
let booleano = true;
let vacio = null;
let indefinido;
console.log(typeof cadena, typeof numero, typeof booleano, typeof vacio, typeof indefinido);

let persona = { nombre: "Helena", edad: 22 };
let hobbies = ["leer", "viajar", "música"];
console.log(typeof persona, typeof hobbies); 

let numero1 = 7;
let numero2 = "4";
console.log(numero1 + numero2); 
console.log(numero1 * numero2);

console.log(String(25)); 
console.log(Number("100")); 
console.log(Boolean("")); 
console.log(Boolean("hola")); 

console.log(10 === "10"); // false → compara valor y tipo
console.log(10 == "10"); 

let numeroTest = 7;
if (numeroTest % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Ocurrió un problema:", error.message);

}

function multiplicar(a, b) {
    return a * b;
}
console.log("Multiplicación:", multiplicar(3, 4));


const multiplicarArrow = (a, b) => a * b;
console.log("Multiplicación con arrow:", multiplicarArrow(5, 6));

const saludar = () => "¡Hola chicos!";
console.log(saludar());


let variableGlobal = "Soy pro";
function miFuncion() {
    let variableLocal = "Soy pro";
    console.log(variableGlobal); 
    console.log(variableLocal); 
}

miFuncion();
console.log(variableGlobal);

let coche = {
    marca: "Chevrolet",
    mostrarMarca: function() {
        console.log("La marca es:", this.marca);
    }
};
coche.mostrarMarca(); 


let frutas = ["Manzana", "Banana"];
console.log(frutas);
frutas.push("Naranja");
console.log("Después de push:", frutas);
frutas.pop();
console.log("Después de pop:", frutas);

let numeros = [1, 2, 3];
let multiplicados = numeros.map(n => n * 2);
let mayoresA1 = numeros.filter(n => n > 1);
console.log("Original:", numeros);
console.log("Multiplicados:", multiplicados);
console.log("Mayores a 1:", mayoresA1);
frutas.forEach(fruta => console.log("Fruta:", fruta));
console.log("Encontrada:", frutas.find(f => f === "Banana"));
console.log("Índice de Manzana:", frutas.findIndex(f => f === "Manzana"));


let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    mostrarInfo: function() {
        console.log(`${this.titulo} - ${this.autor}`);
    }
};
libro.mostrarInfo();


class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
let animal1 = new Animal("León");
console.log(animal1.saludar());


class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}
let miPerro = new Perro("Toty", "Doberman");
console.log(miPerro.saludar(), "- Raza:", miPerro.raza);

