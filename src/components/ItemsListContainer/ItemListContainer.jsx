import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


function onAdd (cant){
  console.log(cant)
}

const ItemListContainer = (props) => {
    
  return <div>
    <button>Click</button> <br />
    <ItemCount initial={1} stock={15} onAdd={onAdd}/>
  </div>;
};

export default ItemListContainer;
