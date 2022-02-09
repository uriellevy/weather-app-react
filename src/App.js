import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeView from "./components/HomeView/HomeView";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
