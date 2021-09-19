import React from "react";
import Typist from "react-typist";
import ContainerInfo from "../Component/ContainerInfo/ContainerInfo";
import Dest from "./destacados/dest";
const Home = () => {
  return (
    <div>
      <header className="jutify-content-center  pheader mb-5 ">
        <h1 className="text-white  text-center mt1">coffe++</h1>
        <Typist>
          <Typist.Delay ms={500} />
          <h3 className="text-center text-white fs1 mt1">
            <span className="spcolor fs-4">sebas@coffee++:~$ </span>ya
            disfrutaste tu cafe ?
          </h3>
        </Typist>
      </header>
      <h3 className=" text-center m-5 fs-2">un poco de nosotros</h3>
      <ContainerInfo />
      <Dest />
    </div>
  );
};

export default Home;
