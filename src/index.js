import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Auth0Provider
  //   domain="dev-2pyvlh18eh8s0pe1.jp.auth0.com"
  //   clientId="n1vm3a2Uu4Jy88r4QzKlDILvuFU9KiGi"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  <GoogleOAuthProvider clientId="98331523904-63lpvoln20ihhptuqsud4vebpi4l8o5u.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
