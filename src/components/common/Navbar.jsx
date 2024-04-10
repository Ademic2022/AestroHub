import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { alpha } from "@mui/system";
import Link from "next/link";
import {
  AppBar,
  Container,
  Drawer,
  Divider,
  Box,
  CardMedia,
  Button,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import NavTracker from "@/utils/NavTracker";
import { navItems } from "@/data/navlinks";
import { itemVariants, listVariants } from "@/data/motionProps/navbar";

const drawerWidth = 280;

const ResponsiveNavBar = (props) => {
  const { window } = props;
  const [activeButton, setActiveButton] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    const cleanedLocation =
      pathname === "/" ? "home" : pathname.replace("/", "");

    // Check if the pathname includes "/blog"
    const isBlogPage = pathname.includes("/blog");

    // If it's a blog page, set the activeButton to "blog"
    setActiveButton(isBlogPage ? "blog" : cleanedLocation);
  }, [router.pathname]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", px:2 }}>
      <Box sx={{ flexGrow: 1 }} component={Link} href="/">
        <CardMedia
          component="img"
          image="/images/logoDark.png"
          alt="Logo"
          sx={{ width: "100%", height: "60px", my: 0, objectFit: "cover" }}
        />
      </Box>
      <Divider />

      <List
        component={motion.ul}
        initial="closed"
        animate={mobileOpen ? "open" : "closed"}
        variants={listVariants}
      >
        {navItems.map((item, index) => (
          <ListItem
            key={item}
            disablePadding
            component={motion.li}
            variants={itemVariants}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                border: "1px solid #5c5c5c",
                borderRadius: 3,
                m: 0.5,
              }}
              component={Link}
              href={
                item.trim().toLowerCase() === "home"
                  ? "/"
                  : `/${item.trim().toLowerCase().replace(/\s+/g, "-")}`
              }
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="xl" sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          pt: { xs: "0", md: "10px" },
          px: { xs: "auto", md: 5 },
          backgroundColor: "transparent",
          backdropFilter: "blur(7px)",
          "&.MuiToolbar-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Toolbar sx={{ p: 0 }}>
          <Box sx={{ flexGrow: 1 }} component={Link} href="/">
            <CardMedia
              component="img"
              image="/images/logo.webp"
              alt="Logo"
              sx={{
                width: "150px",
                height: "60px",
                my: 0,
                objectFit: "cover",
                pb: 1,
              }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <Box
              sx={{
                display: "flex",
                bgcolor: "#fff",
                color: "#000",
                p: 1.5,
                border: "1px solid #5c5c5c",
                borderRadius: "50%",
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </Box>
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              bgcolor: alpha("#000", 0.05),
              border: "0.1px solid #5c5c5c",
              borderRadius: "12px",
              gap: 3,
              height: "48px",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" }, px: 1 }}>
              {navItems.map((item) => {
                const cleanedItem = item
                  .trim()
                  .toLowerCase()
                  .replace(/\s+/g, "-");

                const destination =
                  cleanedItem === "home" ? "/" : `/${cleanedItem}`;
                return (
                  <Box
                    key={cleanedItem}
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Button
                      component={Link}
                      href={destination}
                      sx={{
                        color: "#fff",
                        bgcolor:
                          activeButton === cleanedItem
                            ? alpha("#6f6f6f", 0.4)
                            : "",
                        px: 3,
                        textTransform: "capitalize",
                      }}
                    >
                      <NavTracker
                        activeButton={activeButton}
                        cleanedItem={cleanedItem}
                      />
                      {item}
                    </Button>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Container>
  );
};

export default ResponsiveNavBar;
