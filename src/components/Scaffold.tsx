import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { BottomNavigation, Grid } from "@mui/material";
import { drawerWidth } from "../constants";
import { useAtom } from "jotai";
import currentLessonAtom from "../atoms/currentLesson";

// Botar em @types
// type DrawerItem = {
//   lesson: string;
//   pages: string[];
// };
type ScaffoldProps = {
  appBarTitle: string;
  drawer: JSX.Element;
  // drawerItems: string[];
  // drawerTitle: string;
  // Necessário?
  windows?: () => Window;
  children: JSX.Element;
};

// Pra fazer: implementar usando MUI Treasury
export default function Scaffold({
  appBarTitle,
  windows,
  drawer,
  children,
}: ScaffoldProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLesson] = useAtom(currentLessonAtom);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        variant="outlined"
        // MUI reclama caso variant-outline seja usada com uma elevation diferente de 0
        elevation={0}
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
          {/* space-between faz com que o botão da aba do sumário e a logo "Atlas Morfo" fiquem um em cada ponta do AppBar */}
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
            {/* Este div é necessário, pois, em telas maiores o IconButton acima não é renderizado e isso deixa o Grid com apenas 1 componente-filho. Como ele precisa de dois (para poder colocar um em cada ponta), este div entra no lugar do botão da aba do sumário quando ele não está presente (ou seja, serve como um "Separator")*/}
            <div />
            {/* <Container sx={{ backgroundColor: "#1976d2", border }}>{appBarTitle}</Container> */}
            <Typography
              variant="h4"
              // noWrap
              // component="div"
              color="primary"
              // Sem isto o texto fica muito próximo da borda de cima da AppBar
              sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
            >
              {appBarTitle}
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
          p: 0,
          pt: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* Toolbar vazia só para dar folga para que a Toolbar verdadeira não cubra o conteúdo */}
        <div style={{ height: "56px" }} />
        {/*
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        </Typography>
        */}
        {children}
        <BottomNavigation />
      </Box>
    </Box>
  );
}
