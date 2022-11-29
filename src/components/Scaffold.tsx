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
import { DRAWER_WIDTH, TYPOGRAPHY_TEXT_CENTRALIZE } from "../constants";
import { useAtom } from "jotai";
import currentLessonAtom from "../atoms/currentLessonAtom";
import keys from "lodash/keys";
import contents from "../contents.json";
import { routes } from "../router";
import { map } from "lodash";
import ScaffoldDrawer from "./ScaffoldDrawer";
import { getTextStrokeStyleFor } from "../utils";

export default (props: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useAtom(currentLessonAtom);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        variant="outlined"
        // MUI reclama caso variant-outline seja usada com uma elevation diferente de 0
        elevation={0}
        position="fixed"
        sx={APP_BAR_STYLES}
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
            <div />
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{
                ...TYPOGRAPHY_TEXT_CENTRALIZE,
                ...getTextStrokeStyleFor("#fff", "#1565c0"),
              }}
            >
              ATLAS MORFO
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="lições"
      >
        <Drawer
          container={document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={DRAWER_STYLES_MOBILE}
        >
          {sumarioDrawer(setCurrentLesson)}
        </Drawer>
        <Drawer variant="permanent" sx={DRAWER_STYLES_DESKTOP} open>
          {sumarioDrawer(setCurrentLesson)}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          pt: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        {/* Toolbar vazia só para dar folga para que a Toolbar verdadeira não cubra o conteúdo */}
        <div style={{ height: "56px" }} />
        {getReactComponent(currentLesson)}
        <BottomNavigation />
      </Box>
    </Box>
  );
};

const sumarioDrawer = (setCurrentLesson: any) => (
  <ScaffoldDrawer
    drawerTitle={"SUMÁRIO"}
    drawerItems={(() => {
      const texts = map(contents, (lesson: { title: string }) => lesson.title);
      let slugifiedTitles = keys(contents);

      let drawerItems: { text: string; slugified: string }[] = new Array(
        texts.length
      ).fill({});

      for (let i = 0; i < texts.length; i++) {
        drawerItems[i] = {
          text: texts[i],
          slugified: slugifiedTitles[i],
        };
      }

      return drawerItems;
    })()}
    onItemClicked={(itemSlugified: string) => setCurrentLesson(itemSlugified)}
  />
);

function getReactComponent(currentLesson: string): React.ReactNode {
  return (() => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path.slice(1) == currentLesson) return routes[i].element;
    }
  })();
}

const APP_BAR_STYLES = {
  width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
  ml: { sm: `${DRAWER_WIDTH}px` },
  borderLeftWidth: 0,
  backgroundColor: "#ffffffcc",
  backdropFilter: "blur(8px)",
};

const DRAWER_STYLES_MOBILE = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
};

const DRAWER_STYLES_DESKTOP = {
  display: { xs: "none", sm: "block" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
};
