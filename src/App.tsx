import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/App.css";
import "./styles/Evolutions.css";
import "./styles/Pokemon.css";
import "./styles/PokemonInfo.css";
import "./styles/ProgressBar.css";
import "./styles/SearchBar.css";
import "./styles/WaveAnimation.css";

import PokemonInfo from "./components/pokemon/info/PokemonInfo";
import Home from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/pokemon/:id" element={<PokemonInfo />} />
    </Routes>
  );
}
