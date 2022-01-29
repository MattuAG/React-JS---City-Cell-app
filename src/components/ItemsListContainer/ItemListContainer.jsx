import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';





function ItemListContainer () {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);

  const{idCategoria}= useParams()


useEffect(() => {
  if (idCategoria) {
    getFetch
    .then(res=> setProductos(res.filter(prod => prod.categoria===idCategoria)))
    //.then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
    
  } else{
  getFetch
    .then(res=> setProductos(res))
    //.then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
  }
},[idCategoria])

function onAdd (cant){
  console.log(cant)
  
}

console.log(idCategoria)
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

