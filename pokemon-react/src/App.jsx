import styles from "./components/App.module.css";
import { LandingPage } from "./pages/LandingPage";
import { PokemonDetails } from "./pages/PokemonDetails";
import logo from "./assets/img/Pokemon_logo.png";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export function App() {
  return (
    <Router>
       <header className={styles.headerContainer}>
        <Link to={"/"}><img className={styles.imgLogo} src={logo} alt="" /></Link>
        </header>
      <Routes>
          <Route path="/detalle/:pokemonId" element={<PokemonDetails  />} />
          <Route path="/" element={<LandingPage />} /> 
      </Routes>

</Router>
  );
}

