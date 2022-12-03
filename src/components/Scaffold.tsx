import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { BottomNavigation, Grid } from "@mui/material";
import { TYPOGRAPHY_TEXT_CENTRALIZE } from "../constants";
import { useAtom } from "jotai";
import currentLessonAtom from "../atoms/currentLessonAtom";
import contents from "../contents.json";
import lessonTitleToComponent from "../lessonTitleToComponent";
import map from "lodash/map";
import ScaffoldDrawer from "./ScaffoldDrawer";
import { getTextStrokeStyle } from "../utils";

export default () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useAtom(currentLessonAtom);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        variant="outlined"
        elevation={0}
        position="fixed"
        sx={APP_BAR_STYLES}
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
                ...getTextStrokeStyle("#fff", "#1565c0"),
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
      const normalTitles = map(
        contents,
        (lesson: { title: string }) => lesson.title
      );

      let slugifiedTitles = Object.keys(contents);

      let drawerItems: { text: string; slugified: string }[] = new Array(
        normalTitles.length
      ).fill({});

      for (let i = 0; i < normalTitles.length; i++) {
        drawerItems[i] = {
          text: normalTitles[i],
          slugified: slugifiedTitles[i],
        };
      }

      return drawerItems;
    })()}
    onItemClicked={(itemSlugified: string) => setCurrentLesson(itemSlugified)}
  />
);

const getReactComponent = (currentLesson: string): React.ReactNode => {
  for (let i = 0; i < lessonTitleToComponent.length; i++) {
    if (lessonTitleToComponent[i].slugifiedLessonTitle == currentLesson)
      return lessonTitleToComponent[i].element;
  }
};

const DRAWER_WIDTH = 240;

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
