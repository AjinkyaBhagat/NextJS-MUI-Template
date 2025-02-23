import React from "react";
import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProductsCardProductPage from "@/components/cards/ProductsCardProductPage";

const Products = () => {
  const features = [
    { title: "100% Natural", description: "Made from carefully selected fresh onions with no artificial additives", icon: <AccessTimeIcon color="primary" fontSize="large" /> },
    { title: "Long Shelf Life", description: "Properly sealed and stored to maintain freshness for extended periods", icon: <AccessTimeIcon color="primary" fontSize="large" /> },
    { title: "Premium Quality", description: "Rigorous quality control ensures consistent excellence in every batch", icon: <VerifiedIcon color="primary" fontSize="large" /> },
  ];

  const products = [
    { name: "Classic Onion Powder", price: 9.99, description: "All-purpose onion powder perfect for everyday cooking", image: "/onion-product.jpg" },
    { name: "Organic Onion Powder", price: 14.99, description: "Certified organic onion powder for health-conscious cooking", image: "/onion-product.jpg" },
    { name: "Premium Grade", price: 19.99, description: "Extra-fine powder ideal for professional culinary use", image: "/onion-product.jpg" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section with Image */}
      <Box color={"common.white"} sx={{ py: 1, px: 3, bgcolor: "#f5e3cd" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Content (30%) */}
          <Grid item xs={12} md={5} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h4" fontWeight={600} color="primary">
              Premium Grade Onion Powder
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 500 }}>
              Experience the rich, aromatic essence of perfectly dehydrated onions. Our premium onion powder adds depth and authentic flavor to any dish.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: { xs: "center", md: "start" } }}>
              <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                Shop Now
              </Button>
              <Button variant="outlined" size="large">
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Image (50%) */}
          <Grid item xs={12} md={7} display="flex" justifyContent="center">
            <CardMedia
              component="img"
              image="/onionPowderBanner.png" // Ensure this image is inside `public/`
              alt="Premium Onion Powder"
              sx={{
                width: "100%",
                //maxWidth: 600,
                height: "auto",
                borderRadius: 2,
                boxShadow: 0,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: "grey.100", textAlign: "center" }}>
        <Typography variant="h4" fontWeight={600}>
          Why Choose Our Onion Powder?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Carefully processed to preserve the natural flavor and aroma of fresh onions.
        </Typography>
        {/* Center ProductsCardProductPage */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <ProductsCardProductPage />
        </Box>
        <Grid container spacing={4} sx={{ mt: 4, px: 3 }} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Box>{feature.icon}</Box>
                <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
