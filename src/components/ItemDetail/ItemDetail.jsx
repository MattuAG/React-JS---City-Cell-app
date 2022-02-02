import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

  function onAdd(cant) {
      console.log(cant)
  }

return <div>
      <div className="row">
      <div className="col">
          <div className="container">
              <h3>{product.name}</h3>
              <img src={product.foto} alt='Foto'/>
          </div>
      </div>
      <div className="col">
          <ItemCount onAdd={onAdd} initial={1} stock={6} />
      </div>
      </div>

</div>;
};


export default ItemDetail;
