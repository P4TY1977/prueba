const imprimir =()=>
{
    console.log('hola mundo')
}
setTimeout(imprimir, 2000)
setTimeout(()=> console.log('adios mundo'), 2000)