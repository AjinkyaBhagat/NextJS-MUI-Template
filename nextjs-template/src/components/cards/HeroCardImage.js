"use client";

import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import heroCardImageConfig from "@/config/heroCardImageConfig"; // Import config

const HeroCardImage = () => {
  const theme = useTheme(); // Access MUI Theme

  return (
    <Box
      sx={{
        height: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${heroCardImageConfig.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: theme.palette.common.white, // Use theme color
        textAlign: "center",
        px: 3,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            {heroCardImageConfig.title}
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: "600px", mx: "auto" }} gutterBottom>
            {heroCardImageConfig.subtitle}
          </Typography>
          <Box mt={4} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {heroCardImageConfig.buttons.map((button, index) => (
              <Button key={index} variant={button.variant} color={button.color} size="large" href={button.link}>
                {button.text}
              </Button>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>

    
  );
};

export default HeroCardImage;
