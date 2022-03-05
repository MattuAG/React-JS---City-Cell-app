import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
          <div>
            </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }
          
          <div className="description">
          <p><b>Description: </b>Sistema operativo: Android 11 con MIUI 12.5 para POCO
                                  Almacenamiento: 64GB 4GB / 128GB 6GB

                                  Procesador: MediaTek Dimensity 810
                                  GPU ARM Mali-G57 MC2


                                  Pantalla:IPS/LCD de 6,6 pulgadas
                                  Resolución FullHD+ (2.400 x 1.080 píxeles)
                                  450 nits
                                  Tasa de refresco: 90 Hz
                                  Tasa de refresco táctil: 240 Hz
                                  DynamicSwitch (50/60/90 Hz)
                                  Gorilla Glass 3

                                  Cámaras:
                                  Cámara trasera:50 MP f/1.8
                                  Gran angular: 8 MP f/2.2, FOV 118
                                  Macro: 2 MP f/24
                                  Profundidad: 2 MP f/2.4
                                  Cámara delantera: 13 MP f/2.4

                                  Bateria: 5.000 mAh
                                  Carga rápida 33W

                                  Otros:Sensor de huellas lateral
                                  Altavoces duales
                                  Jack de 3,5 mm
                                  IP53</p>
          </div>
          
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
