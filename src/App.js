//import logo from "./logo.svg";
//import "./App.css";
import ItemListContainer from "./Component/itemListContainer/itemListContainer";
import NavBar from "./Component/navBar/NavBar";
function App() {
  return (
    <div className="App">
      <header className=" d-flex justify-content-center flex-column">
        <NavBar />
        <h1 className="text-center text-white">coffe++</h1>
        <ItemListContainer greeting="bienvenidos a coffee ++" />
      </header>
    </div>
  );
}

export default App;
