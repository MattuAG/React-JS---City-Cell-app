const productos =[
    { id: '1', categoria: 'celulares',  name: "Celular 1",   price:  30000, foto:'' },
    { id: '2', categoria: 'celulares',  name: "Celular 2",   price:  30000, foto:'' },
    { id: '3', categoria: 'celulares',  name: "Celular 3",   price:  30000, foto:'' },
    { id: '4', categoria: 'accesorios', name: "Accesorio 1", price:  30000, foto:'' },
    { id: '5', categoria: 'accesorios', name: "Accesorio 2", price:  30000, foto:'' },
    { id: '6', categoria: 'accesorios', name: "Accesorio 3", price:  30000, foto:'' }
];


export const getFetch = new Promise( (res,rej)=> {
    //acciones
    let condition = true
    if (condition) {
      setTimeout(()=>{res(productos)}, 5000)
    }else{
      rej('404 not found')
    }
  } )
  