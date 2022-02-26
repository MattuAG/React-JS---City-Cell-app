import { addDoc, collection, documentId, getDocs, getFirestore, where, writeBatch, query} from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {
  const [id, setId] = useState('')
  const [dataForm, setdataForm] = useState({
    email:'',
    phone:'',
    name: '',
  })

  const {cartList, vaciarCarrito, sumaTotal, borrarItem} = useCartContext()

  const realizarCompra = async(e) => {
    e.preventDefault()

    let order = {}
    order.buyer = dataForm
    order.total = sumaTotal();

    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return{
        id,
        nombre,
        precio,
        cantidad,
      }
    })

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    await addDoc(ordersCollection, order)
    .then (resp => setId(resp.id))


    const queryCollection = collection(db, 'items')

    const queryActualizarStock = query(
      queryCollection, 
      where( documentId() , 'in', cartList.map(it => it.item.id) )          
  ) 

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.item.id === res.id).cantidad
    })
  ))
    .catch(err => console.log(err))
    .finally(() => {
      setdataForm({
        email:'',
        phone:'',
        name:'',
      })
      vaciarCarrito()
    })
    batch.commit()
    
  }
  const handleChange = (event) =>{
        setdataForm({
          ...dataForm,
          [event.target.name]: event.target.value
        })
  }
  console.log(dataForm);
  return <div>
    {id !== '' && `El id de la orden es: ${id}`}
    <br />
    {cartList.length !== 0 ?<>
                {cartList.map(produ => <div>
                    <li>{produ.name} precio: {produ.price} cantidad: {produ.cantidad}</li>
                    <button onClick={() => borrarItem(produ.id)}>x</button>
                </div> ) }
            {`la suma es ${sumaTotal()}`}
           <br />
           <br/>
                
                <form 
                    onSubmit={realizarCompra}                           
                >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        onChange={handleChange}
                        value={dataForm.name}
                    />
                    <br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='tel' 
                        onChange={handleChange}
                        value={dataForm.phone}
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                    <br />
                    <input 
                        type='email' 
                        name='validarEmail'
                        placeholder='Repetir Email' 
                        onChange={handleChange}
                        //value={}
                    />
                    <br/>
                    <button>Generar Orden</button>
                </form>
            </> 
            :

            <label>no hay prductos</label>
                }


    <button onClick={vaciarCarrito}> Vaciar Carrito</button>

    <br /> 
    

  </div>;
};

export default Cart;
