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
import Category from "./category/Category";

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
          <Route path="/local" component={Local} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detailcontainer} />
          <Route path="/category/:id" component={Category} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
