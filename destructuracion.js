const pelicula=
{
    nombre: "Viernes 13",
    genero: 'Terror',
    clasificacion: 'C'
}

function imprimir (pelicula)
{
    const {nombre, genero, clasificacion}= pelicula
    console.log(nombre, genero, clasificacion)
}

const imprimir2=function(pelicula)
{
    const {nombre, genero, clasificacion} = pelicula
    console.log(nombre, genero, clasificacion)
}
const imprimir3 = (pelicula)=>
{
    const {nombre, genero, clasificacion} = pelicula
    console.log(nombre, genero, clasificacion)
}
imprimir(pelicula)
imprimir2(pelicula)
imprimir3(pelicula)