import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

    const {cartList, agregarAlCarrito} = useCartContext()


    const [contador, setContador] = useState(0);

    function onAdd(cant){
        agregarAlCarrito( {...product, cantidad: cant} )
        
      }

      console.log(cartList)

return <div>
      <div className="row">
      <div className="col">
          <div className="container">
              <h3>{product.name}</h3>
              <img src={product.foto} alt='Foto'/>
          </div>
      </div>
      <div className="col">
      
      {
          
          contador === 0 ?
           <ItemCount initial={1} stock={15} onAdd={onAdd}/>
          :
          <>
            <Link to='/cart'>
                <button>Terminar Compra</button>
            </Link>
             <Link to='/'>
                 <button>Seguir Comprando</button>
             </Link>
          </>
      } 
         
      </div>
      </div>

</div>;
};


export default ItemDetail;
