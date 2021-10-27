import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutSingleMovie from "./pages/AboutSingleMovie";
import AllMovies from "./pages/AllMovies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/movies">
          <AllMovies />
        </Route>
        <Route exact path="/movies-detail/:movieId">
          <AboutSingleMovie />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
