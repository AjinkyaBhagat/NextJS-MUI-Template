"use client";

import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import HeroCardImage from "@/components/cards/HeroCardImage";
import OurStatsCard from "@/components/cards/OurStatsCard";
import ProductCard from "@/components/cards/ProductCard";
import productsConfig from "@/config/productsConfig";
import ContactCard from "@/components/cards/SocialMediaInfo";
import WaveCard from "@/components/cards/WaveCard";

const Home = () => {
  const [products, setProducts] = useState([]); // Initialize empty state

  useEffect(() => {
    setProducts(productsConfig); // Load products only after hydration
    console.log("Server-rendered products:", JSON.stringify(productsConfig));
  }, []);

  return (
    <Box suppressHydrationWarning>
      {/* Hero Section - Displays a large banner or image */}
      <HeroCardImage />

      {/* Stats Section - Displays company or product-related statistics */}
      <Container sx={{ py: 8 }}>
        <OurStatsCard />
      </Container>

      <WaveCard  />

      {/* Products Section - Displays a grid of products */}
      <Container sx={{ py: 8 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Box>

        {/* SocialCard */}
      </Container>
      <ContactCard/>
    </Box>
  );
};

export default Home;
