import { useState } from "react";
import { createContext, useContext } from "react" ;

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvieder({children}) {
    
const [cartList, setCartList] = useState([]);

function agregarAlCarrito(Item){
    console.log(Item)
    const index = cartList.findIndex(prod => prod.Item.id ===   Item.Item.id)

    if (index === -1){
        setCartList( [ ...cartList, Item])
    } else {
        const cant = cartList[index].cantidad
        cartList[index].cantidad = Item.cantidad + cant
        const newCartList= [...cartList]
        setCartList(newCartList)
    }
}

const sumaTotal =() => {
    return cartList.reduce((acum, prod)=> acum =  acum + (prod.item.price *prod.cantidad) ,0)
}

const cantidad = () => {
    return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
}

const borrarItem = (id) => { 
    setCartList( cartList.filter( prod => prod.item.id !== id ) )
}

function vaciarCarrito() {
    setCartList([])
    
}
console.log(cartList)


return <cartContext.Provider value={{
    cartList,
    agregarAlCarrito,
    vaciarCarrito,
    sumaTotal,
    cantidad,
    borrarItem,
}} >
      {children}
</cartContext.Provider>;
}


export default CartContextProvieder;
