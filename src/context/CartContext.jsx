import { useState, useContext } from "react";
import { createContext } from "react";

export const cartContext = createContext([])
export function useCartContext(){return useContext(cartContext)}

function CartContextPovider({children}){

    const [cartList, setcartList] = useState([]);

    function agregarAlCarrito(item){
        console.log(item)
        
        const index = cartList.findIndex(prod => prod.id === item.id)

        if (index === -1) {

            setcartList( [ ...cartList, item ] )
        } else {

            const cant = cartList[index].cantidad
            cartList[index].cantidad = item.cantidad + cant 
            const newCartList = [ ...cartList ]
            setcartList(newCartList)
        }

    }
    const sumaTotal = () => {
        return cartList.reduce((acum, prod) =>  acum= acum + (prod.price * prod.cantidad)  ,0)
    }
    
    const cantidad = () => {
        return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
    }

    const borrarItem = (id) => { 
       setcartList( cartList.filter( prod => prod.id !== id ) )
    }



     function vaciarCarrito(){
         setcartList([])
     }

    return <cartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        sumaTotal,
        cantidad,
        borrarItem,

    }}>
    {children}
    </cartContext.Provider>;
}

export default CartContextPovider;
