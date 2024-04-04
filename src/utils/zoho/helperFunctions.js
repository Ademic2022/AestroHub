// Function to check if the access token has expired
export const isTokenExpired = (tokenData) => {
  // Extract data and expires_in from tokenData
  const { data, creation_time } = tokenData;
  const { expires_in } = data;

  // Check if expires_in is a valid number
  if (!expires_in || isNaN(Number(expires_in))) {
    console.error("Invalid or missing expires_in value:", expires_in);
    return true; // Token is considered expired if expires_in is missing or not a number
  }

  // Get the current time in seconds
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);

  // Convert creation_time to a number (assuming it's already a valid number)
  const creationTimeInSeconds = Number(creation_time);

  // Calculate the expiry time in seconds
  const expiryTimeInSeconds = creationTimeInSeconds + Number(expires_in);

  // Check if the expiry time is in the past
  if (currentTimeInSeconds >= expiryTimeInSeconds) {
    return true; // Token expired
  } else {
    return false; // Token still valid
  }
};

// Function to retrieve token object from localStorage
export const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const tokenString = localStorage.getItem("accessToken");
    return JSON.parse(tokenString);
  }
  return null;
};

// Function to save token object with creation time to localStorage
export const saveTokenToLocalStorage = (tokenObject) => {
  if (typeof window !== "undefined") {
    const tokenWithCreationTime = {
      ...tokenObject,
      creation_time: Math.floor(Date.now() / 1000),
    };
    localStorage.setItem("accessToken", JSON.stringify(tokenWithCreationTime));
  }
};

export const refreshAccessToken = async () => {
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
    console.log("Access token has been refreshed.");
  } catch (error) {
    console.error("Error refreshing access token:", error);
  }
};
