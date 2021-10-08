const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
      console.log( 'inicializando base de datos' )
     
      setTimeout( resolve, 2000 )
    })
    
    const inicializarServidor = () => new Promise(( resolve, reject) =>
    {
      console.log( 'inicializando servidor' )
      setTimeout(()=>reject(Error('falle')), 1000)
      setTimeout( resolve, 3000 )
    })
    
    inicializarBaseDeDatos()
    .then( inicializarServidor )
    .then( () => console.log( 'todos los sistemas han inicializados' ) )
    .catch( error => { console.error("HUBO UN ERROR", error.message) } )
    .then(()=>console.log('finalizando'))
    