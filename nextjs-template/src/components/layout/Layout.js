// components/Layout.js
import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer"; // Import Footer

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />
      {/* Main content */}
      <Box sx={{ flexGrow: 1, padding: 2, mt: 6 }}>
        {/* Render the children passed to Layout */}
        {children}
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
