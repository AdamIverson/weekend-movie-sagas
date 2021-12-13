import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import AddMovie from "../AddMovie/AddMovie";

// Router City, USA
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        {/* Details page */}
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
