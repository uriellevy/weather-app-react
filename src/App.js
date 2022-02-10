import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeView from "./components/HomeView/HomeView";
import Favorites from "./components/Favorites/Favorites.jsx";
import { WeatherProvider } from "./components/context/WeatherContext.jsx";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </Router>
    </WeatherProvider>
  );
}

export default App;
