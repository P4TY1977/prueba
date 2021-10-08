const promise = new Promise((resolve)=>
{
    console.log('empecé')
    setTimeout(resolve, 2000)
})
promise.then(()=> console.log('ya terminó'))