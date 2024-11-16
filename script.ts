console.log("Prueba por consola") 


/* -------- Datos Primitivos ------- */

let estudiasteJavascript: boolean = true

if(estudiasteJavascript){
    console.log("Podes seguir viendo este curso de TypeScript")
} else{
    console.log("Primero tenes que ver el curso de JavaScript")
}


let interMiami: number = 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

let palabras: string = 'Me emocione al ver a Messi'

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
    let motivo: string = ``
    if(juegaMessi) {
        equipo1+=messi
        motivo = `porque juega Messi`
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`)
    if (equipo1 == equipo2) console.log("Empatan")
    if (equipo1 < equipo2) console.log("Gana FC Dallas")
}

jugar(interMiami,fcDallas, juegaMessi)

/*------- Arrays ------*/

let arregloNumeros: number[] = [1,2,3,4,5,6]

let arregloTexto: string[] = ['html', 'css', 'js']

arregloTexto[0].indexOf('html')
arregloNumeros.forEach(numero => console.log(numero))


/*------- Objetos -------*/

let programador = {
    nombre: 'Geronimo',
    edad: 24, 
    tomaMate: true
}

programador = {
    nombre: 'Ricardo',
    edad: 63,
    tomaMate: false
}

console.log(programador)

/*------ Type personalizado -------*/ 

type Persona = {
    nombre : string,
    edad : number,
    tomaMate?: boolean
}

let persona: Persona = {
    nombre: 'Matias',
    edad: 24,
    tomaMate: true
}

let persona2 : Persona = {
    nombre: 'Luca',
    edad: 17,
}

console.log("Persona tipada")

console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);    
console.log("Toma Mate? ", persona.tomaMate); 

console.log(persona)


/*-------- Interface ------*/

interface Humano{
    nombre : string,
    edad : number,
    tomaMate?: boolean
}

let humano: Humano ={
    nombre:"Geronimo",
    edad: 24,
    tomaMate: true
}

let humano2 : Humano = {
    nombre: "Luca",
    edad: 17,
}

function mostrarEdad(humano : Humano){
    console.log(`${humano.nombre} tiene ${humano.edad} años`)
}

mostrarEdad(humano)
mostrarEdad(humano2)


/*-------- Clases -------*/

class Pelicula {
    nombre: string = 'La llamada';
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre:string, protagonistas:string[], actores: string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}

const pelicula = new Pelicula('Shrek', ['Shrek', 'Burro'], ['Mike Myers', 'Eddie Murphy'])
const pelicula2 = new Pelicula('Batman', ['Batman', 'Guason'], ['Christian Bale', 'Heath Ledger'])

console.log(pelicula)
console.log(pelicula2)
pelicula.proyectarEnCine()


/*------ Encapsulamiento y genericos ------*/ 

class Sorteo<T>{
    private ticket?: T;

    constructor(private nombre: string){}
    
    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}` 
    }
}

let sorteo = new Sorteo<number>('Geronimo')
sorteo.setTicket(14)
console.log(sorteo.sortear())
