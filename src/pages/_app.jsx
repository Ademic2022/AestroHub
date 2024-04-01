import React from "react";
import GalaxyBackground from "@/utils/GalaxyBackground";
import "../styles/globals.css";
import ResponsiveNavBar from "@/components/common/Navbar";
import { ThemeToggleProvider } from "@/styles/theme/contexts/ThemeContext";
import ScrollToTop from "@/utils/ScrollToTop";
import Footer from "@/components/common/Footer";
import { Box, Container } from "@mui/material";

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <GalaxyBackground />
      <ResponsiveNavBar />
      <ScrollToTop />
      <Container component="main" maxWidth="xl" sx={{ mb: 2, p: 3 }}>
        <Box
          className="content"
          style={{ color: "#fff", marginTop: "80px", overflow: "hidden" }}
        >
          <ThemeToggleProvider>
            <Component {...pageProps} />
          </ThemeToggleProvider>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;
