import GoogleLogin from "react-google-login";
import React, { useContext } from "react";
import { cartContext } from "../../contexCart/Context";
const Login = () => {
  const { Setlogin } = useContext(cartContext);
  const responseGoogle = (respuesta) => {
    console.log(respuesta.profileObj);
    Setlogin(respuesta.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
