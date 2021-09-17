//import "./App.css";
import NavBar from "./Component/navBar/NavBar";

import Cart from "./Component/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Provider
import { CartProvider } from "./contexCart/Context";
//views
import Product from "./product/Product";
import Local from "./local/Local";
import Nosotros from "./nosotros/Nosotros";
import Home from "./home/Home";
import Detailcontainer from "./Detailcontainer/Detailcontainer";
import Category from "./category/Category";
import Pago from "./Pago/pago";
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/local" component={Local} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/product" component={Product} />
            <Route path="/detail/:id" component={Detailcontainer} />
            <Route path="/category/:id" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/pago" component={Pago} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
