const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
      console.log( 'inicializando base de datos' )
      throw Error( 'horror' )
      setTimeout( resolve, 2000 )
    })
    
    const inicializarServidor = () => new Promise( resolve =>
    {
      console.log( 'inicializando servidor' )
      setTimeout( resolve, 3000 )
    })
    
    inicializarBaseDeDatos()
    .then( inicializarServidor )
    .then( () => console.log( 'todos los sistemas han inicializados' ) )
    .catch( error => { console.error("HUBO UN ERROR", error.message) } )
    