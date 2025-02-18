"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/theme";
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          {/* Layout Container */}
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              minHeight: "100vh" // Full viewport height
            }}
          >
            {/* Sticky Header */}
            <Header />

            {/* Main Content (Pushes Footer to Bottom) */}
            <Box 
              component="main" 
              sx={{ flexGrow: 1, padding: 2, marginTop: "64px" }} // Adjust marginTop to match Header height
            >
              {children}
            </Box>

            {/* Sticky Footer */}
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
