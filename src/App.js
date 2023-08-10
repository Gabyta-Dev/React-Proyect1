import './App.css';
import { ItemsListContainer } from './components/ItemsListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className='mjs'>
        < ItemsListContainer greeting="Bienvenido/a Bienvenides" />
        </div>
      </>
  );
}

export default App;
