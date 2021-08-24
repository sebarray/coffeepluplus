import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./cofeeA.css";
const Loadco = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./coffeeAnimate.json"),
    });
  }, []);

  return <div ref={container} className="w-50"></div>;
};

export default Loadco;
