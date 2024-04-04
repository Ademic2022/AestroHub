import React from "react";
import {
  saveTokenToLocalStorage,
  getTokenFromLocalStorage,
  isTokenExpired,
} from "@/utils/zoho/helperFunctions";


const Zoho = () => {
    const [message, setMessage] = React.useState(null);
  
    React.useEffect(() => {
      const checkTokenValidity = async () => {
        const tokenObject = getTokenFromLocalStorage();
        if (tokenObject && !isTokenExpired(tokenObject)) {
          console.log("Access token is valid.");
        } else {
          console.log("Access token has expired or is not present.");
          await refreshAccessToken();
        }
      };
  
      checkTokenValidity();
    }, []);
  
    const refreshAccessToken = async () => {
      try {
        const response = await fetch("/api/zoho/refreshAccessToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to refresh access token");
        }
  
        const data = await response.json();
        saveTokenToLocalStorage(data);
        setToken(data);
        console.log("Access token has been refreshed.");
      } catch (error) {
        console.error("Error refreshing access token:", error);
      }
    };
  
    const handleSubmit = async () => {
      const tokenObject = getTokenFromLocalStorage();
      if (!tokenObject || isTokenExpired(tokenObject)) {
        console.log("Invalid or expired access token. Refreshing token...");
        await refreshAccessToken();
      }
  
      const tokenStr = tokenObject.data.access_token;
      const requestData = {
        data: [
          {
            Name: "Newsletter",
            Email: "example5@gmail.com",
          },
        ],
      };
  
      try {
        const response = await fetch("/api/zoho/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...requestData,
            accessToken: tokenStr,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to subscribe to newsletter.");
        }
  
        const responseData = await response.json();
        const message = responseData?.responseData?.data[0]?.message;
        setMessage(message || "Subscription successful!");
      } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        setMessage("Failed to subscribe to newsletter.");
      }
    };
  
    return (
      <>
        <button onClick={handleSubmit}>Subscribe</button>
        <button onClick={refreshAccessToken}>Refresh Token</button>
        <p>{message ? message : "No subscription!"}</p>
      </>
    );
  };

  export default Zoho