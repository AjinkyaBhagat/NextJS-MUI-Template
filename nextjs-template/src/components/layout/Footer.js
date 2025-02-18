import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import footerConfig from "@/config/footer";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#2359a4", padding: "16px 0", mt: "auto" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="space-between">
          <Stack spacing={1} width={{ xs: "100%", sm: "40%" }}>
            <Typography variant="body2" color="white">About Us</Typography>
            <Typography variant="body2" color="white">{footerConfig.about}</Typography>
          </Stack>
          <Stack spacing={1} width={{ xs: "100%", sm: "40%" }}>
            <Typography variant="body2" color="white">Contact</Typography>
            <Typography variant="body2" color="white">Email: {footerConfig.contact.email}</Typography>
            <Typography variant="body2" color="white">Phone: {footerConfig.contact.phone}</Typography>
          </Stack>
        </Stack>
      </Container>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2" color="white">{footerConfig.copyrightText}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
