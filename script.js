"use strict";
console.log("Prueba por consola");
/* -------- Datos Primitivos ------- */
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("Podes seguir viendo este curso de TypeScript");
}
else {
    console.log("Primero tenes que ver el curso de JavaScript");
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocione al ver a Messi';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = ``;
    if (juegaMessi) {
        equipo1 += messi;
        motivo = `porque juega Messi`;
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
/*------- Arrays ------*/
let arregloNumeros = [1, 2, 3, 4, 5, 6];
let arregloTexto = ['html', 'css', 'js'];
arregloTexto[0].indexOf('html');
arregloNumeros.forEach(numero => console.log(numero));
/*------- Objetos -------*/
let programador = {
    nombre: 'Geronimo',
    edad: 24,
    tomaMate: true
};
programador = {
    nombre: 'Ricardo',
    edad: 63,
    tomaMate: false
};
console.log(programador);
let persona = {
    nombre: 'Matias',
    edad: 24,
    tomaMate: true
};
let persona2 = {
    nombre: 'Luca',
    edad: 17,
};
console.log("Persona tipada");
console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);
console.log("Toma Mate? ", persona.tomaMate);
console.log(persona);
let humano = {
    nombre: "Geronimo",
    edad: 24,
    tomaMate: true
};
let humano2 = {
    nombre: "Luca",
    edad: 17,
};
function mostrarEdad(humano) {
    console.log(`${humano.nombre} tiene ${humano.edad} años`);
}
mostrarEdad(humano);
mostrarEdad(humano2);
/*-------- Clases -------*/
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = 'La llamada';
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('Shrek', ['Shrek', 'Burro'], ['Mike Myers', 'Eddie Murphy']);
const pelicula2 = new Pelicula('Batman', ['Batman', 'Guason'], ['Christian Bale', 'Heath Ledger']);
console.log(pelicula);
console.log(pelicula2);
pelicula.proyectarEnCine();
/*------ Encapsulamiento y genericos ------*/
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Geronimo');
sorteo.setTicket(14);
console.log(sorteo.sortear());
