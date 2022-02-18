import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
