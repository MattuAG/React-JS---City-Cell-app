import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/mock';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';


function onAdd (cant){
  console.log(cant)
  
}


function ItemListContainer () {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);


useEffect(() => {
  getFetch
    .then(res=> setProductos(res))
    //.then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
  
},[])


  //console.log(productos)

  return (
    <div>
            { loading ? 
                    <h2> Cargando productos... </h2> 
                : 
                    <ItemList productos={productos} />
            }  


    <button /*onClick={()=> setBool (!bool)}*/>Click</button> <br />
    <ItemCount initial={1} stock={15} onAdd={onAdd}/>
  </div>
  )
}


export default ItemListContainer;

