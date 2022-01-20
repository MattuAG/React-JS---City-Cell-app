import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a City Cell"/>
    </div>
  );
}

export default App;
