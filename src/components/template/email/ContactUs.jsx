import React from "react";
import { Container, Typography, Link, Paper } from "@mui/material";

const ContactTemplate = ({ data }) => {
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
          New Contact Form Submission
        </Typography>
        <Typography variant="body1">Hello Admin,</Typography>
        <Typography variant="body1">
          You have received a new contact form submission from the website.
          Please find the details below:
        </Typography>
        <ul>
          <li>
            <strong>Full Name:</strong> {data.name}
          </li>
          <li>
            <strong>Email:</strong>
            <Link href={`mailto:${data.email}`}>{data.email}</Link>
          </li>
          <li>
            <strong>Company's Name:</strong> {data.companyName}
          </li>
          <li>
            <strong>Budget:</strong> {data.budget}
          </li>
          <li>
            <strong>Company Details:</strong> {data.company}
          </li>
        </ul>
        <Typography variant="body1">
          Please take appropriate action to respond to this inquiry.
        </Typography>
        <Typography variant="body1">Thank you.</Typography>
      </Paper>
    </Container>
  );
};

export default ContactTemplate;
