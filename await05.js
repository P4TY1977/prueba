const promise = new Promise((resolve)=>
{
    console.log('empecé')
    setTimeout(resolve, 2000)
})
//no funciona porque no estamos en una función asincrona

    await promise
    console.log('ya terminó')


ejecutar()