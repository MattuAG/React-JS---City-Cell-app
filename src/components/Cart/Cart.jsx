import { useCartContext } from "../../context/CartContext";


const Cart = () => {

  const {cartList, vaciarCarrito, sumaTotal, borrarItem} = useCartContext()

  return <div>
    {cartList.length !== 0 ?<>
                {cartList.map(produ => <div>
                    <li>{produ.name} precio: {produ.price} cantidad: {produ.cantidad}</li>
                    <button onClick={() => borrarItem(produ.id)}>x</button>
                </div> ) }
            {`la suma es ${sumaTotal()}`}
            </>
            :
            <label>no hay prductos</label>
                }


    <button onClick={vaciarCarrito}> Vaciar Carrito</button>
  </div>;
};

export default Cart;
