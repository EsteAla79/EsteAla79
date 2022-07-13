class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = mascotas;
    }

    getFullName() {
        return this.nombre + ' ' + this.apellido; 
    }

  addMascotas() {
        let i, len;
        const nombresMascotas = [];
        for (i = 0, len = this.mascotas.length; i < len; i++) {
            nombresMascotas.push(this.mascotas[i]) 
        }   
    }

    countMascotas() {
     
        let counter= 0
        let i = 0
    
        for (i = 0; i < this.mascotas.length; i++) {
            counter ++
        }
        return 'La cantidad de mascotas es:' + i
    }
    
  addBook() {
        
        let i, len;
        const libros = [];
        for (i = 0, len = this.libros.length; i < len; i++) {
            libros.push(this.libros[i]) 
        }   
    }
    

    getBooksNames() {
        let i = 0
        let nombresLibros = []

        for (i = 0; i < this.libros.length; i++) {
        nombresLibros.push(this.libros[i]['nombre'])     
    }
         return 'Nombre libros:', nombresLibros;
  };
}

const usuario1 = new Usuario(`Pablo`, `Gimenez`, [{nombre:`La torre oscura` , autor:`Stephen King`} , {nombre:`Siete Noches` , autor:`J. Luis Borges`} , {nombre:`El Silmarillion` , autor:`J.R.R. Tolkien`}], ['perro', 'gato', 'pez'] );

usuario1.addMascotas();
usuario1.addBook();

console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.getBooksNames());