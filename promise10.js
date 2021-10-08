const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
      console.log( 'inicializando base de datos' )
     
      setTimeout( () => {
        console.log ('terminando la inicialización de base de datos')
        resolve()
      }, 2000 )
    })
    
    const inicializarServidor = () => new Promise(( resolve, reject) =>
    {
      console.log( 'inicializando servidor' )     
      setTimeout( () => {
        console.log ('terminando la inicialización del servidor')
        resolve()
      }, 3000 )
    })
    Promise.all([inicializarBaseDeDatos(), inicializarServidor()])
   
    .then( inicializarServidor )
    .then( () => console.log( 'todos los sistemas han inicializados' ) )
    .catch( error => { console.error("HUBO UN ERROR", error.message) } )
    .then(()=>console.log('finalizando'))
    