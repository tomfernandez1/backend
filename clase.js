
const libros = [{nombre: 'El señor de las moscas', autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}];

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames(){
        let array = [];
        for(let i=0; i< this.libros.length; i++) {
            array.push(this.libros[i].nombre);
        }
        return array;
    }
}

let ej1 = new Usuario(`Tom`,`Fernandez`, [
    {nombre: "El Padrino", autor: "Mario Puzo"},
    {nombre: "Las Flores del Mal", autor: "Charles Baudelaire"}],
    ["Cobi","Coki"]);

console.log(ej1.getFullName());

ej1.addMascota("Patas");

console.log(ej1.countMascotas());

ej1.addBook("Nuestra Parte de Noche","Mariana Enriquez");

console.log(ej1.getBookNames());
