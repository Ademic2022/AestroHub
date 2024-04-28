import React from "react";
import {
  Box,
  CardMedia,
  Typography,
  Grid,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { alpha } from "@mui/material";
import { useForm } from "react-hook-form";
import Section7 from "@/components/homeComponents/Section7";
import {
  emailValidator,
  nameValidator,
  numberValidator,
  textFieldValidator,
} from "@/utils/formValidator";
import Link from "next/link";
import CustomToast from "@/components/common/CustomToast";
import SEO from "@/components/SEO";
import { contactUsSeo } from "@/data/seo";
import {
  getTokenFromLocalStorage,
  isTokenExpired,
  refreshAccessToken,
} from "@/utils/zoho/helperFunctions";

const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  React.useEffect(() => {
    const checkTokenValidity = async () => {
      const tokenObject = getTokenFromLocalStorage();
      if (!tokenObject || isTokenExpired(tokenObject)) {
        console.log("Access token has expired or is not present. Refreshing Token");
        await refreshAccessToken();
      }
    };

    checkTokenValidity();
  }, []);

  const onSubmit = async (values) => {
    setLoading(true);
    const { email, name, companyName, company, budget } = values;
    if (isTokenExpired(getTokenFromLocalStorage())) {
      console.log("Invalid or expired access token. Refreshing token...");
      await refreshAccessToken();
    }

    const tokenObject = getTokenFromLocalStorage();
    const tokenStr = tokenObject.data.access_token;
    const requestData = {
      data: [
        {
          Last_Name: name,
          Email: email,
          Company_Name: companyName,
          Budget: budget,
          About_Company: company,
        },
      ],
    };

    try {
      const response = await fetch("/api/zoho/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...requestData,
          accessToken: tokenStr,
        }),
      });

      const data = await response.json();
      const { message, code } = data?.responseData?.data[0] || {};

      if (code === "SUCCESS") {
        setMessage("Contact Form Successfully Submitted!");
        setOpen(true);
        reset();
      } else {
        setMessage(message);
        setOpen(true);
        reset();
      }
    } catch (error) {
      setMessage("Failed to submit form.");
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  return (
    <React.Fragment>
      <SEO data={contactUsSeo} />
      <Box mt={5}>
        <Box
          textAlign="center"
          width={{ xs: "100%", md: "65%" }}
          height="281px"
          sx={{ margin: "0 auto", textAlign: "center" }}
        >
          <Typography
            mb={3}
            variant="h2"
            sx={{ fontSize: { xs: "46px", md: "80px" } }}
          >
            Contact Us
          </Typography>

          <Typography
            gutterBottom
            mb={4}
            variant="body1"
            sx={{
              px: { md: "90px" },
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            Kindly provide us a few details below and we will be in touch
            shortly.. or schedule a call with us on{" "}
            <Box
              component={Link}
              href="https://calendly.com/aestrohub"
              target="_blank"
              color="#B4811C"
              sx={{ textDecoration: "none" }}
            >
              Calendly
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "0 auto",
            bgcolor: alpha("#fff", 0.1),
            borderRadius: "16px",
            border: "1px solid #5c5c5c",
            width: { xs: "100%", md: "85%" },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              "& .MuiInputBase-root": { color: "#fff" },
              "& .MuiFormLabel-root": { color: "#fff" },
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid #fff",
              },
              p: { xs: 2, md: 10 },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              mb={5}
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Contact Form
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  {...register("name", nameValidator)}
                  error={!!errors.name}
                  helperText={!!errors.name ? errors.name.message : ""}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  {...register("email", emailValidator)}
                  error={!!errors.email}
                  helperText={!!errors.email ? errors.email.message : ""}
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Company"
                  {...register("companyName", {...nameValidator, required:false })}
                  error={!!errors.companyName}
                  helperText={
                    !!errors.companyName ? errors.companyName.message : ""
                  }
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Budget ($)"
                  {...register("budget", numberValidator)}
                  error={!!errors.budget}
                  helperText={!!errors.budget ? errors.budget.message : ""}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="filled-textarea"
                  label="Tell us About Your Company"
                  {...register("company", textFieldValidator)}
                  error={!!errors.company}
                  helperText={!!errors.company ? errors.company.message : ""}
                  placeholder="Placeholder"
                  multiline
                  required
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  type="submit"
                  sx={{ border: "1px solid #5c5c5c", mb: 2 }}
                  disabled={loading}
                  startIcon={
                    !loading ? (
                      <CardMedia
                        component="img"
                        image="/icons/rocket.webp"
                        sx={{ width: 24, height: 24 }}
                        alt="icon"
                      />
                    ) : null
                  }
                >
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : (
                    "Send us a Message"
                  )}
                </Button>
                <CustomToast open={open} message={message} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={15}>
          <Section7 />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ContactUs;
