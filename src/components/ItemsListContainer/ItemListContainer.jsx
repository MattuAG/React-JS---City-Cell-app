import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import ItemList from '../ItemList/ItemList';



function ItemListContainer() { 
  const [productos, setProductos] = useState ([])    
  const [loading, setloading] = useState(true)

  const { idCategoria } = useParams()    
  
  useEffect(() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'items')
      const queryF = !idCategoria ?
        queryCollection
        :
        query(queryCollection,
          where('categoria', '==', idCategoria)
          )

    getDocs(queryF)
    .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
    .catch((err) => console.log(err))
    .finally(() => setloading(false))
  }, [idCategoria])
 

  return (
    <div>            
        { loading ? 
            <h2>Cargando ...</h2> 
        : 
            <ItemList
                productos={productos} 
            />
        }                       
    </div>
)}


export default ItemListContainer;
