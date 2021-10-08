const nombre='Bambi'
const genero='Drama'
const clasificacion='A'
const fecha ='2000'

const director=
{
    nombreDirector: 'Juan Perez',
    paisDirector: 'EUA',
    fecha: '1950'
}

const pelicula=
{
    nombre,
    genero,
    clasificacion,
    ...director
}
pelicula2={...pelicula}
console.log(pelicula)
console.log (JSON.stringify(pelicula))
console.log(pelicula==pelicula2)