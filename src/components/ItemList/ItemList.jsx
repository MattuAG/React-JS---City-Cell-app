import Item from "../Item/Item"

function ItemList({productos}) {
    console.log('itemlist');
    return (
        <>
        { productos.map(prod => <Item prod={prod} />  ) }
        </>
    )
}

export default ItemList
