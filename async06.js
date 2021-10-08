const inicializarBaseDeDatos=() => new Promise(resolve =>
    {
        console.log('inicializando BD')
        setTimeout(resolve, 2000)
    })
const inicializarServidor = () => new Promise(resolve=>
{
    console.log('inicializando servidor')
    throw Error ('horror')
    setTimeout(resolve, 3000)
})
//código equivalente a promise03.js
const ejecutar = async () =>
{
    try{
await inicializarBaseDeDatos()
await inicializarServidor()
 console.log('todos los sist han inicializado')
    }
    catch(error)
    {console.error("Hubo un errorzote ",error)}
}
ejecutar()