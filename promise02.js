const promise = new Promise((resolve)=>
{
    console.log('empecé')
    setTimeout(resolve, 2000)
})
promise.then(()=>
{
    return new Promise ((resolve)=>
    {console.log('continuo')
    setTimeout (resolve, 3000)
})
})
.then(()=> console.log('ya terminó'))