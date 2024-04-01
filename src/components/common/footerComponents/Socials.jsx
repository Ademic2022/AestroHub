import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { contacts } from "@/data/footer";
import { motion } from "framer-motion";

const Socials = () => {
  const socialIcons = (item) => {
    switch (item) {
      case "Email":
        return <MdOutlineMail />;
      case "Discord":
        return <FaDiscord />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "Twitter":
        return <FaXTwitter />;
      case "Telegram":
        return <FaTelegramPlane />;
      default:
        return null;
    }
  };

  const fadeInAnimationVariant = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Chip
        sx={{
          bgcolor: "#fff",
          fontSize: "18px",
          fontFamily: "Outfit",
          color: "#3772FF",
          padding: "5px 10px",
          mb: "20px",
        }}
        label="Contacts"
      />
      {contacts.map((contact, index) => (
        <motion.div
          key={contact.id}
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          custom={index}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Button
              component={Link}
              href={
                contact.social === "Email"
                  ? `mailto:${contact.link}`
                  : contact.link
              }
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "capitalize",
                m: 0,
                p: 0,
                color: "#fff",
                height: { xs: "40px", md: "auto" },
              }}
            >
              <Box sx={{ fontSize: 25, mr: 1, pt: 1 }}>
                {socialIcons(contact.social)}
              </Box>
              <Typography
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "25px",
                }}
              >
                {contact.social}
              </Typography>
            </Button>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default Socials;
