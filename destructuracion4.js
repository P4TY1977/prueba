const pelicula=
{
    nombre: "Viernes 13",
    genero: 'Terror',
    clasificacion: 'C'
}

function imprimir ({nombre, genero, clasificacion='A'})
{
    
    console.log(nombre, genero, clasificacion)
}

const imprimir2=function({nombre, genero, clasificacion})
{
    
    console.log(nombre, genero, clasificacion)
}
const imprimir3 = ({nombre, genero, clasificacion})=>
{
    
    console.log(nombre, genero, clasificacion)
}
imprimir(pelicula)
imprimir2(pelicula)
imprimir3(pelicula)