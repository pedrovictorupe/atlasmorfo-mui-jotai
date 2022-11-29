import {
  Lightbulb,
  PsychologyAlt,
  SmartDisplay,
  TipsAndUpdates,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

type BottomNavBarProps = {
  currentTab: number;
  setPaginaAtual: (n: number) => void;
  labelsToIcons: Object;
};

export const DEFAULT_NAVBAR_HEIGHT = 56;

export default function BottomNavBar({
  currentTab: paginaAtual,
  setPaginaAtual,
  labelsToIcons,
}: BottomNavBarProps) {
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        width: { xs: "100vw", sm: "auto" },
        bottom: 0,
        left: { sm: `50%` },
      }}
      showLabels
      value={paginaAtual}
      onChange={(event, paginaSeguinte) => {
        setPaginaAtual(paginaSeguinte);
      }}
    >
      {(() => {
        let tabs: JSX.Element[] = [];

        for (const label in labelsToIcons) {
          tabs.push(
            // @ts-ignore
            <BottomNavigationAction label={label} icon={labelsToIcons[label]} />
          );
        }

        return tabs;
      })()}
      {/* <BottomNavigationAction label="Intro" icon={<PsychologyAlt />} />
      <BottomNavigationAction label="Pré-teste" icon={<Lightbulb />} />
      <BottomNavigationAction label="Vídeo" icon={<SmartDisplay />} />
      <BottomNavigationAction label="Pós-teste" icon={<TipsAndUpdates />} /> */}
    </BottomNavigation>
  );
}
