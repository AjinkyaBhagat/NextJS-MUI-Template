"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Button, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import config from "@/config/ProductsCardProductPageCofig";

const ProductsCardProductPage = () => {
  const [productVariants, setProductVariants] = useState([]);
  const [activeVariant, setActiveVariant] = useState(null);
  const [showTable, setShowTable] = useState(false); // Toggle for table visibility

  useEffect(() => {
    setProductVariants(config.products);
    setActiveVariant(config.products[0]); // Set default product
  }, []);

  if (!activeVariant) return null;

  const productDetails = {
    red: {
      color: "Deep Red",
      taste: "Bold, Aromatic, Slightly Sweet & Pungent",
      uses: "Seasoning, Marinades, Soups, Curries, Spice Blends",
      nutrition: "Rich in Antioxidants, Vitamin C, Fiber",
      packaging: "Available in 100g, 500g, 1kg, and Bulk Packaging",
      storage: "Store in a cool, dry place away from moisture",
    },
    orange: {
      color: "Off-White",
      taste: "Mild, Sweet, and Savory",
      uses: "Sauces, Dressings, Meat Seasonings, Spice Blends",
      nutrition: "Low in Calories, High in Fiber & Vitamin B6",
      packaging: "Available in 100g, 500g, 1kg, and Bulk Packaging",
      storage: "Keep in a dry, airtight container for freshness",
    },
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Card Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          backgroundColor: activeVariant.primaryColor,
          borderRadius: "16px",
          overflow: "hidden",
          p: { xs: 2, md: 4 },
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Image Box */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: activeVariant.secondaryColor,
            p: { xs: 3, md: 5 },
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={activeVariant.imgSrc}
            alt={activeVariant.title}
            sx={{
              width: { xs: "80%", md: "350px" },
              transition: "0.9s ease-in-out",
            }}
          />
        </Box>

        {/* Details Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: { xs: 3, md: 5 },
            textAlign: { xs: "center", md: "left" },
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h4" sx={{ color: activeVariant.secondaryColor, fontWeight: "bold" }}>
            {activeVariant.title}
          </Typography>
          <Typography sx={{ my: 2, color: "black" }}>{activeVariant.description}</Typography>

          {/* Product Selection Dropdown */}
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel sx={{ backgroundColor: "white", px: 1 }} shrink>
              Select Onion Powder Type
            </InputLabel>
            <Select
              value={activeVariant.className}
              onChange={(event) => {
                const selectedProduct = productVariants.find((variant) => variant.className === event.target.value);
                setActiveVariant(selectedProduct);
                setShowTable(false); // Reset table visibility on product change
              }}
              sx={{
                borderRadius: "12px",
                backgroundColor: "#f5f5f5",
                "& .MuiSelect-select": {
                  padding: "12px",
                  fontSize: "16px",
                },
                "&:hover": {
                  backgroundColor: "#ebebeb",
                },
              }}
            >
              {productVariants.map((variant) => (
                <MenuItem key={variant.className} value={variant.className} sx={{ fontSize: "16px", padding: "10px" }}>
                  {variant.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Buttons (Side by Side) */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mt: 2 }}>
            {/* Show Specifications Button */}
  <Button
  onClick={() => setShowTable(!showTable)}
  variant="contained"
  color="primary"
  sx={{
    fontSize: "16px",
    padding: "10px 16px",
    borderRadius: "40px",
    fontWeight: "bold",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: { xs: "100%", md: "220px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap", // Prevent text wrapping
  }}
  endIcon={showTable ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
>
  {showTable ? "Hide Specs" : "Show Specs"} {/* Shortened text */}
</Button>

            {/* Get Quote Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: activeVariant.secondaryColor,
                color: "#fff",
                fontSize: "16px",
                padding: "12px 20px",
                borderRadius: "40px",
                fontWeight: "bold",
                boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.15)",
                "&:hover": { backgroundColor: "#333" },
                width: "100%",
                maxWidth: { xs: "100%", md: "220px" },
              }}
            >
              Get Quote
            </Button>
          </Box>

          {/* Alert Message Below Buttons */}
          {showTable && (
            <Alert severity="info" sx={{ mt: 2 }}>
              Below is the detailed product specification table.
            </Alert>
          )}
        </Box>
      </Box>

      {/* Product Specifications Table (Shown Below Card) */}
      {showTable && (
        <TableContainer component={Paper} sx={{ mt: 3, borderRadius: "12px", overflowX: "auto" }}>
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Attribute</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(productDetails[activeVariant.className]).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell sx={{ fontWeight: "bold", color: "#333" }}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
                  <TableCell sx={{ color: "#555" }}>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ProductsCardProductPage;
