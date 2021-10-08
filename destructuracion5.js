const pelicula=
{
    nombre: "Viernes 13",
    genero: 'Terror',
    clasificacion: 'C'
}

function imprimir ({nombre, genero, clasificacion='A'})
{
    const miNombre = nombre
    console.log(miNombre, genero, clasificacion)
}
//se extrae, renombrando el campo a otro nombre
const imprimir2=function({nombre: miNombre, genero, clasificacion})
{
    
    console.log(miNombre, genero, clasificacion)
}
const imprimir3 = ({nombre, genero, clasificacion})=>
{
    
    console.log(nombre, genero, clasificacion)
}
imprimir(pelicula)
imprimir2(pelicula)
imprimir3(pelicula)