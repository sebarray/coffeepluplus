//import logo from "./logo.svg";
//import "./App.css";
import NavBar from "./Component/NavBar";
function App() {
  return (
    <div className="App">
      <header className=" d-flex justify-content-center flex-column">
        <nav className="row">
          <NavBar></NavBar>
        </nav>
        <br></br>
        <h1 className="text-center text-white">coffe++</h1>
      </header>
    </div>
  );
}

export default App;
