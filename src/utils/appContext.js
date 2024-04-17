import React, { createContext, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { userLogin } from "../services/login.service";

// Correctly initializing the context
const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = React.useState(null);

  const userCheckOrCreation = async (userInfo) => {
    try {
      const res = await userLogin(userInfo);
      setUserData(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      localStorage.setItem("token", JSON.stringify(tokenResponse.access_token));

      // Fetch user information from Google
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((userInfo) => {
          console.log("User Information:", userInfo);
          localStorage.setItem("userdata", JSON.stringify(userInfo));

          const params = {
            email: userInfo.email,
            name: userInfo.name,
          };

          userCheckOrCreation(params);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    },
  });

  const contextValue = { login, userData };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, useAppContext, AppContextProvider };
