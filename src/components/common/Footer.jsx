import React from "react";
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Services from "./footerComponents/Services";
import Products from "./footerComponents/Products";
import Socials from "./footerComponents/Socials";
import { emailValidator } from "@/utils/formValidator";
import CustomToast from "./CustomToast";
import { motion } from "framer-motion";
import {
  getTokenFromLocalStorage,
  isTokenExpired,
  refreshAccessToken,
} from "@/utils/zoho/helperFunctions";

const Footer = () => {
  const [message, setMessage] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  React.useEffect(() => {
    const checkTokenValidity = async () => {
      const tokenObject = getTokenFromLocalStorage();
      if (!tokenObject && isTokenExpired(tokenObject)) {
        console.log("Access token has expired or is not present.");
        await refreshAccessToken();
      }
    };

    checkTokenValidity();
  }, []);

  const onSubmit = async (value) => {
    setLoading(true);
    const email = value.email;
    if (isTokenExpired(getTokenFromLocalStorage())) {
      console.log("Invalid or expired access token. Refreshing token...");
      await refreshAccessToken();
    }

    const tokenObject = getTokenFromLocalStorage();
    const tokenStr = tokenObject.data.access_token;
    const requestData = {
      data: [
        {
          Name: "Newsletter",
          Email: email,
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
      const data = await response.json();
      const { message, code } = data?.responseData?.data[0] || {};

      if (code === "SUCCESS") {
        setMessage("Successfully subscribed to newsletter!");
        setOpen(true);
        reset();
      } else {
        setMessage(message);
        setOpen(true);
        reset();
      }
    } catch (error) {
      setMessage("Failed to subscribe to newsletter.");
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
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <Box
          sx={{
            position: "relative",
            backgroundSize: "cover",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
            }}
          >
            <Services />
            <Products />
            <Socials />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={4}
            mt={15}
            p={2}
            // width={{ xs: "max-width", md: "1280px" }}
            sx={{
              height: { xs: "auto", md: "256px" },
              border: "1px solid #5c5c5c",
              borderRadius: "24px",
              overflowX: "auto",
              margin: "45px auto",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
              zIndex={1}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: 22, md: 36 },
                      color: "grey.lightActive",
                    }}
                  >
                    Read about the latest articles around web3 ecosystem
                  </Typography>
                </Grid>
                <Grid
                  item
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  xs={12}
                  md={6}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                >
                  <TextField
                    sx={{
                      width: { xs: "100%", md: "70%" },
                      "& .MuiInputBase-input": {
                        color: "#ffffff",
                        letterSpacing: "2px",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#5c5c5c",
                        },
                      "& .MuiInputLabel-root": {
                        color: "#ffffff",
                      },
                    }}
                    {...register("email", emailValidator)}
                    error={!!errors.email}
                    helperText={!!errors.email ? errors.email.message : ""}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ borderRadius: "16px", border: "1px solid #5c5c5c" }}
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Subscribe"}
                  </Button>
                  <CustomToast open={open} message={message} />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CardMedia
            sx={{
              display: { md: "block", xs: "none" },
              position: "absolute",
              top: { xs: 500, md: 0 },
              right: { xs: "20px", md: "90px" },
              height: { xs: "840px", md: "1040px" },
              objectFit: "cover",
              width: { xs: "300px", md: "580px" },
              pointerEvents: "none",
            }}
            image="/images/rocket.webp"
            title="Footer Image"
          />
          <CardMedia
            sx={{
              position: "absolute",
              bottom: { xs: 100, md: 100 },
              height: { xs: "300px", md: "500px" },
              width: { xs: "300px", md: "500px" },
              borderRadius: "16px",
              // mt: 25,
            }}
            image="/images/logo.webp"
            title="Footer Logo"
          />

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            style={{ overflow: "hidden" }}
          >
            <CardMedia
              sx={{
                height: "318px",
                borderRadius: "16px",
                mt: { md: 25, xs: 5 },
              }}
              image="/images/Smoke.webp"
              title="Footer Image"
            />
          </motion.div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
