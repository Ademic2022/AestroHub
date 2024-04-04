const refresh_token = process.env.ZOHO_REFRESH_TOKEN;
const client_id = process.env.ZOHO_CLIENT_ID;
const client_secret = process.env.ZOHO_CLIENT_SECRET;

const refreshAccessToken = async (req, res) => {
  if (req.method === "POST") {
    try {
      const uri = `https://accounts.zoho.com/oauth/v2/token`;
      const body = `refresh_token=${encodeURIComponent(
        refresh_token
      )}&client_id=${encodeURIComponent(
        client_id
      )}&client_secret=${encodeURIComponent(
        client_secret
      )}&grant_type=refresh_token`;
      // API call to refresh token endpoint using the refresh token
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error("Failed to refresh access token");
      }

      const data = await response.json();
      res.status(200).json({ data });
    } catch (error) {
      console.error("Error refreshing access token:", error);
      res.status(500).json({ error: "Failed to refresh access token" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default refreshAccessToken;
