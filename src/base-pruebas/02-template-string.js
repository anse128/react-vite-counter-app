export function getSaludo(nombre) { // no se puede hacer una prueba de algo que no está siendo exportado
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );