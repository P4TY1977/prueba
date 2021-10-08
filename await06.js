const promise = new Promise((resolve)=>
{
    console.log('empecé')
    setTimeout(resolve, 2000)
})

const ejecutar = async () =>
{
    await promise
    console.log('ya terminó')
}

ejecutar()