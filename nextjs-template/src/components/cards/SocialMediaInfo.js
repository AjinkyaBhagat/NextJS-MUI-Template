import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { socialMediaInfo } from "../../config/socialMediaInfo"; // Import from config

// Map icon names to MUI components
const iconMap = {
  LinkedInIcon: <LinkedInIcon />,
  TwitterIcon: <TwitterIcon />,
  WorkIcon: <WorkIcon />,
  LocationOnIcon: <LocationOnIcon />,
  InstagramIcon: <InstagramIcon />,
  FacebookIcon: <FacebookIcon />,
};

const SocialCard = () => {
  const theme = useTheme(); // Use Theme

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        p: 2,
        backgroundColor: theme.palette.background.default, // Theme Background
      }}
    >
      {socialMediaInfo.map((card, index) => (
        <Box
          key={index}
          component="a"
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: "none",
            width: "100%",
            maxWidth: 350,
            minHeight: 100,
            borderRadius: 2,
            boxShadow: 3,
            background: card.isMap
              ? theme.palette.primary.main // Use theme color for map
              : card.backgroundGradient
              ? card.backgroundGradient // Use gradient if defined
              : card.backgroundColor || theme.palette.primary.main, // Otherwise, use solid color
            color: theme.palette.primary.contrastText,
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: card.isMap
                ? theme.palette.primary.dark // Use theme color for map hover
                : card.backgroundGradient
                ? card.backgroundGradient // Keep gradient unchanged
                : card.backgroundColor
                ? card.backgroundColor // Keep solid color unchanged
                : theme.palette.primary.dark,
              boxShadow: 6,
            },
          }}
          title={card.title} // SEO enhancement
          aria-label={card.title} // Accessibility
        >
          {/* If isMap is true, render Google Maps */}
          {card.isMap ? (
            <Box sx={{ width: "100%", height: "100%", borderRadius: "8px", overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={card.mapURL}
                title="Google Map Location"
              ></iframe>
            </Box>
          ) : (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {iconMap[card.icon]} {/* Dynamically Load Icons */}
                <Typography component="h2" variant="h6" fontWeight="bold">
                  {card.title}
                </Typography>
              </Box>
              <Typography component="p" variant="body2" mt={1}>
                {card.description}
              </Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default SocialCard;
