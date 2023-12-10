import { Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import PokemonInfo from './components/PokemonInfo';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<Navigate to="/home" />}/>
      <Route path="/pokemon/:id" element={<PokemonInfo/>}/>
    </Routes>
  );
}

export default App;
