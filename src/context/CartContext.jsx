import { useState } from "react";
import { createContext, useContext } from "react" ;

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvieder({children}) {
    
const [cartList, setCartList] = useState([]);

function agregarAlCarrito(Item){
    setCartList([...cartList, Item])
}

function vaciarCarrito(){
    setCartList([])

}


return <cartContext.Provider value={{
    cartList,
    agregarAlCarrito,
    vaciarCarrito,
}} >
      {children}
</cartContext.Provider>;
}


export default CartContextProvieder;
