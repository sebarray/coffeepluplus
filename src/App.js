//import "./App.css";
import NavBar from "./Component/navBar/NavBar";
import Typist from "react-typist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//views
import Product from "./product/Product";
import Local from "./local/Local";
import Nosotros from "./nosotros/Nosotros";
import Home from "./home/Home";
import Detailcontainer from "./Detailcontainer/Detailcontainer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="jutify-content-center  pheader">
          <h1 className="text-white  text-center mt1">coffe++</h1>
          <Typist>
            <Typist.Delay ms={500} />
            <h3 className="text-center text-white fs1 mt1">
              <span className="spcolor fs-4">sebas@coffee++:~$ </span>ya
              disfrutaste tu cafe ?
            </h3>
          </Typist>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/local" exact component={Local} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/product" exact component={Product} />
          <Route path="/detail/:id" exact component={Detailcontainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
