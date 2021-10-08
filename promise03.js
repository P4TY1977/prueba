const inicializarBaseDeDatos=() => new Promise(resolve =>
    {
        console.log('inicializando BD')
        setTimeout(resolve, 2000)
    })
const inicializarServidor = () => new Promise(resolve=>
{
    console.log('inicializando servidor')
    setTimeout(resolve, 3000)
})
inicializarBaseDeDatos()
.then(()=> inicializarServidor())
.then(()=> console.log('todos los sist han inicializado'))