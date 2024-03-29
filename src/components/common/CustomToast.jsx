import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, alpha } from "@mui/material";

const CustomToast = ({ open, message, bgcolor }) => {
  return (
    <React.Fragment>
      {open && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              // width: { xs: "320px", md: "430px" },
              mb: { xs: 3, md: 0 },
              p: 2,
              mr: { xs: 0, md: 18 },
              bgcolor: alpha(bgcolor ? bgcolor : "#fff", 0.5),
              color: "#000",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "20px", md: "22px" }, color: "#fff" }}
            >
              {message}
            </Typography>
          </Box>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default CustomToast;
