import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "../styles/login.css";

function Login() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse); // This will log the token information
      localStorage.setItem(
        "token",
        JSON.stringify("token", tokenResponse.access_token)
      );
      // To get user information, you can make an API request to the Google API
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((userInfo) => {
          console.log("User Information:", typeof userInfo);
          console.log("User Information:", userInfo);
          localStorage.setItem("userdata", JSON.stringify(userInfo));
          window.location.reload();
          // Now, you have access to user information in the userInfo object
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    },
  });

  return (
    <div
      style={{
        backgroundColor: "#282828",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "24px",
        color: "#baff2a",
        fontFamily: "'Odibee Sans'",
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "#181818",
          border: "1px solid #181818",
          boxSizing: "border-box",
          width: "622px",
          height: "628px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2px 0px",
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: "20px",
            color: "#baff2a",
            fontFamily: "'Odibee Sans'",
          }}
          //   onClick={() => logout()}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "100%",
              display: "flex",
              alignItems: "center",
              width: "200px",
              height: "35px",
              flexShrink: "0",
            }}
          >
            <span style={{ lineBreak: "anywhere", width: "100%" }}>
              <span>{`LUCKY `}</span>
              <span style={{ color: "#fff" }}>{`OR `}</span>
              <span>GENIUS</span>
            </span>
          </div>
        </div>
        <div
          style={{
            width: "450px",
            height: "241px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "19px",
            textAlign: "left",
            fontSize: "16px",
            color: "#fff",
            fontFamily: "Manrope",
          }}
        >
          <Button
            style={{
              borderRadius: "23px",
              border: "1px solid #fff",
              boxSizing: "border-box",
              width: "450px",
              height: "46px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 20px",
              gap: "18px",
            }}
            onClick={login}
          >
            <img
              style={{
                position: "relative",
                width: "23.18px",
                height: "23.18px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/search 1.svg"
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "150%",
                fontWeight: "500",
              }}
            >
              Login with Google
            </div>
          </Button>
          <Button
            style={{
              borderRadius: "23px",
              border: "1px solid #fff",
              boxSizing: "border-box",
              width: "450px",
              height: "46px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 20px",
              gap: "18px",
            }}
            //   onClick={() => loginWithRedirect()}
          >
            <img
              style={{
                position: "relative",
                width: "27.18px",
                height: "27.18px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/apple.svg"
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "150%",
                fontWeight: "500",
              }}
            >
              Login with Apple
            </div>
          </Button>
          <Button
            style={{
              borderRadius: "23px",
              border: "1px solid #fff",
              boxSizing: "border-box",
              width: "450px",
              height: "46px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 20px",
              gap: "18px",
            }}
          >
            <img
              style={{ position: "relative", width: "22px", height: "20px" }}
              alt=""
              src="/twitter.svg"
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "150%",
                fontWeight: "500",
              }}
            >
              Login with Twitter
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
