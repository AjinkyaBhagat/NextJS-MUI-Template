// components/cards/OurStatsCard.js
"use client";

import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Public, LocalShipping, Handshake, Star } from "@mui/icons-material";

const OurStatsCard = () => {
  const [stats, setStats] = useState({
    countries: 0,
    volume: 0,
    years: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        countries: Math.min(prev.countries + 1, 50),
        volume: Math.min(prev.volume + 5, 100),
        years: Math.min(prev.years + 1, 25),
        satisfaction: Math.min(prev.satisfaction + 1, 98),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const statsData = [
    { icon: <Public fontSize="large" color="primary" />, value: `${stats.countries}+`, label: "Countries Served" },
    { icon: <LocalShipping fontSize="large" color="primary" />, value: `$${stats.volume}M+`, label: "Annual Trade Volume" },
    { icon: <Handshake fontSize="large" color="primary" />, value: `${stats.years}+`, label: "Years Experience" },
    { icon: <Star fontSize="large" color="primary" />, value: `${stats.satisfaction}%`, label: "Client Satisfaction" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        py: 4,
      }}
    >
      {statsData.map((stat, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            p: 3,
            textAlign: "center",
            flex: "1 1 250px", // Ensures responsiveness
            maxWidth: "250px",
            minWidth: "200px",
          }}
        >
          {stat.icon}
          <Typography variant="h4">{stat.value}</Typography>
          <Typography>{stat.label}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default OurStatsCard;
