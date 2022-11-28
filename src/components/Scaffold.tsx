import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React from "react";
import content from "../content/pretestes.json";
import { Grid } from "@mui/material";

const drawerWidth = 240;

// Botar em @types
type DrawerItem = {
  lesson: string;
  pages: string[];
};
type ScaffoldProps = {
  appBarTitle: string;
  drawerItems: DrawerItem[];
  drawerTitle: string;
  // Necessário?
  windows?: () => Window;
  children: JSX.Element;
};

// Pra fazer: implementar usando MUI Treasury
export default function Scaffold({
  appBarTitle,
  drawerTitle,
  drawerItems,
  windows,
  children,
}: ScaffoldProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <>
      {/* <Toolbar /> */}
      <Box
        sx={{
          // backgroundColor: "primary.dark",
          p: 3,
          pb: 0,
        }}
      >
        <Typography variant="h3" color="primary.main">
          {drawerTitle}
        </Typography>
      </Box>
      <List>
        {drawerItems.map((item) => (
          <ListItem key={`${item.lesson}-${item.pages}`} disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ ml: 1 }}
                disableTypography
                primary={
                  <Typography variant="overline">{item.lesson}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        variant="outlined"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderLeftWidth: 0,
          backgroundColor: "#ffffffcc",
          backdropFilter: "blur(8px)",
        }}
        // color="transparent"
      >
        <Toolbar>
          <Grid container justifyContent="space-between">
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="primary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {appBarTitle.toUpperCase()}
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="lições"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pl: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/*
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        </Typography>
        */}
        {children}
      </Box>
    </Box>
  );
}
