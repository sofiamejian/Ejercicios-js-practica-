const nombre = prompt("Ingresa tu nombre completo:");
let edad = prompt("Ingresa tu edad:");
const ocupacion = prompt("¿Cuál es tu ocupación?");

let confirmarEdad = prompt("Confirma tu edad ingresándola de nuevo:");

edad = Number(edad);
confirmarEdad = Number(confirmarEdad);

if (isNaN(edad) || edad < 0) {
    alert("La edad ingresada no es válida.");
    throw new Error("Edad inválida, programa detenido.");
} else if (edad < 18) {
    alert("Debes ser mayor de edad para continuar.");
    throw new Error("Usuario menor de edad.");
}

function crearPerfil(nombre,edad,ocupacion){
     if (nombre === "") {
        return "No ingresaste un nombre válido.";
    }
    const mensaje = `Hola, ${nombre}. Tienes ${edad} años y eres un/a ${ocupacion}.`;
    return mensaje;

}

const perfilTexto = crearPerfil(nombre, edad, ocupacion);
console.log(perfilTexto);4

document.getElementById("perfil-container").innerHTML = `<p>${perfilTexto}</p>`;

let hobbies= [];

for(let i= 0; i <= 3; i++){
    let temp = prompt(`Ingresa tu hobby #${i}:`);
    hobbies.push(temp);
}

console.log("Tus hobbies son:");
hobbies.forEach((hobby, index) => {
    console.log(`${index + 1}. ${hobby}`);
});



let hobbiesHTML = "<ul>";
for (let hobby of hobbies) {
    hobbiesHTML += `<li>${hobby}</li>`;
}
hobbiesHTML += "</ul>";

document.getElementById("perfil-container").innerHTML += hobbiesHTML;
