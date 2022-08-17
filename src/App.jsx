import { MoviesGrid } from "./components/MoviesGrid";
import styles from './App.module.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages"

export function App() {
    return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
        <main>
        <Switch> {/* Con el switch las rutas tienen que ser exactas, si no se cargan todas las rutas */}
          <Route exact path="/movies/:movieId">
            <MovieDetails />
            </Route>
          <Route exact path="/">
            <LandingPages />
            </Route>
        </Switch>
        </main>
    </Router>
    )
}
