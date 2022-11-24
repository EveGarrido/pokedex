import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom';
import InputName from './components/InputName';
import Pokedex from './components/Pokedex';
import PokedexById from './components/PokedexById';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
 

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />}/>
            <Route path='/pokedex/:id' element={<PokedexById />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
