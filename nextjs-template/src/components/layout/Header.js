"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import headerConfig from "@/config/header";

const drawerWidth = 240;

const Logo = () => (
  <Link href="/" passHref>
    <Image src={headerConfig.logo} alt="Global Niryat Logo" width={120} height={50} priority />
  </Link>
);

const DesktopMenu = () => {
  const theme = useTheme(); // Access theme

  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
      {headerConfig.navLinks.map((item, index) => (
        <Button
          key={item.path || index}
          component={Link}
          href={item.path}
          sx={{
            color: theme.palette.primary.main,
            "&:hover": { backgroundColor: theme.palette.primary.light },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

const MobileMenu = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{ "& .MuiDrawer-paper": { width: drawerWidth, backgroundColor: theme.palette.background.default } }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Logo />
        <List>
          {headerConfig.navLinks.map((item, index) => (
            <ListItem key={item.path || index} disablePadding>
              <ListItemButton component={Link} href={item.path}>
                <ListItemText primary={item.label} sx={{ color: theme.palette.text.primary }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ backgroundColor: theme.palette.background.paper }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />
          <IconButton onClick={handleDrawerToggle} sx={{ display: { xs: "flex", sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <DesktopMenu />
        </Toolbar>
      </AppBar>
      <MobileMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
}
