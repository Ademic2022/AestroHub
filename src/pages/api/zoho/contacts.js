const contacts = async (req, res) => {
    try {
      const { accessToken, data } = req.body;
  
      // Remove the access token from the data object
      const cleanedData = {
        data: [...data],
        trigger: ["approval", "workflow", "blueprint"],
      };
  
      if (!accessToken) {
        throw new Error("Access token is missing.");
      }
  
      const response = await fetch("https://www.zohoapis.com/crm/v2/Contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
        body: JSON.stringify(cleanedData),
      });
  
      const responseData = await response.json();
      res.status(200).json({ responseData });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ error: "Failed to refresh access token" });
    }
  };
  
  export default contacts;
  