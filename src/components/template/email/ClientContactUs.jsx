import React from "react";
import { Container, Typography, Paper, Link } from "@mui/material";

const ClientResponseTemplate = ({ data }) => {
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#007bff", marginBottom: "20px" }}
        >
          Thank You for Contacting Us, {data.name}!
        </Typography>
        <Typography variant="body1">Hello {data.name},</Typography>
        <Typography variant="body1">
          Thank you for reaching out to us. We have received your message and
          will get back to you shortly after processing your request.
        </Typography>
        <Typography variant="body1">
          If you have any urgent inquiries or require immediate assistance,
          please dont hesitate to contact us directly at{" "}
          <Link href="mailto: aestroservices@gmail.com">Aestrohub</Link>
        </Typography>
        <Typography variant="body1">Thank you for your patience.</Typography>
        <Typography variant="body1">Best Regards,</Typography>
        <Typography variant="body1">AestroHub</Typography>
      </Paper>
    </Container>
  );
};

export default ClientResponseTemplate;
