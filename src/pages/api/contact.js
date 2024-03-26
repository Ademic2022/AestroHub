import { transporter } from "@/utils/apiCalls/config/nodeMailer";
import { mailOptions } from "@/utils/apiCalls/config/nodeMailer";
import ContactTemplate from "@/components/template/email/ContactUs";
import ClientResponseTemplate from "@/components/template/email/ClientContactUs";
import ReactDOMServer from "react-dom/server";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const htmlContent = ReactDOMServer.renderToString(
      <ContactTemplate data={data} />
    );

    const htmlContent1 = ReactDOMServer.renderToString(
      <ClientResponseTemplate data={data} />
    );

    await sendCustomMail(htmlContent1, htmlContent, data.email, "aestroservices@gmail.com");

    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;

const sendCustomMail = async (
  clientHtmlContent,
  adminHtmlContent,
  clientEmail,
  adminEmail
) => {
  try {
    // Send email to the client
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Contact",
      text: "This is a test email",
      html: clientHtmlContent,
      to: clientEmail,
    });

    // Send email to the admin
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Contact",
      text: "This is a test email",
      html: adminHtmlContent,
      to: adminEmail,
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
