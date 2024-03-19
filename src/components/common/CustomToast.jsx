import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, alpha } from "@mui/material";

const CustomToast = ({open, message}) => {
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
              width: "430px",
              height: "50px",
              mr: 18,
              bgcolor: alpha("#fff", 0.6),
              color: "#000",
            }}
          >
            <Typography sx={{ fontSize: "22px", color: "#fff" }}>
              {message}
            </Typography>
          </Box>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default CustomToast;
