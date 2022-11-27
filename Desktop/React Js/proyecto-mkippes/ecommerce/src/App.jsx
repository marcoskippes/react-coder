import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Body from './components/Body';

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!!!"}/>
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
