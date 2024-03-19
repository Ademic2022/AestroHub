import mailchimp from "@mailchimp/mailchimp_marketing";

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

mailchimp.setConfig({
  apiKey: apiKey,
  server: server,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      await mailchimp.lists.addListMember(audienceId, {
        email_address: email,
        status: "subscribed",
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to subscribe to newsletter." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
