const inicializarBaseDeDatos=() => new Promise(resolve =>
    {
        console.log('inicializando BD')
        throw Error ('horror')
        setTimeout(resolve, 2000)
    })
const inicializarServidor = () => new Promise(resolve=>
{
    console.log('inicializando servidor')
    setTimeout(resolve, 3000)
})
try
{
   
inicializarBaseDeDatos()
.then(()=> inicializarServidor)
.then(()=> console.log('todos los sist han inicializado'))
}
catch(error)
{console.error('hubo un error', error.message)}