import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MEnubar from './Component/Menubar/MEnubar';
import Problem1 from './Component/Problem1/Problem1';
import Problem2 from './Component/Problem2/Problem2';

function App() {
  return (
    <div className="App">
      <Router>
      <MEnubar></MEnubar>
      <Switch>
        <Route exact path="/">
          <Problem1></Problem1>
        </Route>
        <Route exact path="/problem2">
          <Problem2></Problem2>
        </Route>
      </Switch>
        </Router>
    </div>
  );
}

export default App;
