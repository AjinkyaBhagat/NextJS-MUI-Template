import React from "react";
import { Box, Typography, Container, Stack, useTheme } from "@mui/material";
import footerConfig from "@/config/footer";

const Footer = () => {
  const theme = useTheme(); // Access theme for colors and spacing

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main, // Uses primary color from theme
        padding: theme.spacing(2, 0), // Spacing from theme
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          {/* About Section */}
          <Stack spacing={1} width={{ xs: "100%", sm: "40%" }}>
            <Typography variant="body2" color={theme.palette.common.white}>
              About Us
            </Typography>
            <Typography variant="body2" color={theme.palette.common.white}>
              {footerConfig.about}
            </Typography>
          </Stack>

          {/* Contact Section */}
          <Stack spacing={1} width={{ xs: "100%", sm: "40%" }}>
            <Typography variant="body2" color={theme.palette.common.white}>
              Contact
            </Typography>
            <Typography variant="body2" color={theme.palette.common.white}>
              Email: {footerConfig.contact.email}
            </Typography>
            <Typography variant="body2" color={theme.palette.common.white}>
              Phone: {footerConfig.contact.phone}
            </Typography>
          </Stack>
        </Stack>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ textAlign: "center", mt: theme.spacing(2) }}>
        <Typography variant="body2" color={theme.palette.common.white}>
          {footerConfig.copyrightText}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
