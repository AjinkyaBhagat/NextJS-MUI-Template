const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "10px 20px",
      },
      outlined: {
        borderColor: "#f58a1f", // Apply orange border for all outlined buttons
        //color: "#f58a1f", // Set text color to match border
        "&:hover": {
          borderColor: "#f68b1f", // Darker orange on hover
          backgroundColor: "rgba(245, 138, 31, 0.1)", // Light orange background on hover
        },
      },
      contained: {
        "&:hover": {
          backgroundColor: "#f68b1f", // Darker background on hover
        },
      },
    },
  },
};

export default components;
