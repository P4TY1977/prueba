const promise = new Promise((resolve)=>
{
    console.log('empecé')
    setTimeout(resolve, 2000)
})


async function ejecutar()
{
    await promise
    console.log('ya terminó')
}

ejecutar()