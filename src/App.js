//import "./App.css";
import ItemListContainer from "./Component/itemListContainer/itemListContainer";
import NavBar from "./Component/navBar/NavBar";
import Typist from "react-typist";
import ContainerInfo from "./Component/ContainerInfo/ContainerInfo";

function App() {
  return (
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
      <ItemListContainer greeting="bienvenidos a coffee ++" />
      <ContainerInfo />
    </div>
  );
}

export default App;
