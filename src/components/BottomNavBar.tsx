import { Lightbulb, SmartDisplay, TipsAndUpdates } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";
import ProgressoEnum from "../@types/ProgressoEnum";
import { drawerWidth } from "../constants";

type BottomNavBarProps = {
  currentTab: number;
  setPaginaAtual: (n: number) => void;
};

export const DEFAULT_NAVBAR_HEIGHT = 56;

export default function BottomNavBar({
  currentTab: paginaAtual,
  setPaginaAtual,
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
      <BottomNavigationAction label="Pré-teste" icon={<Lightbulb />} />
      <BottomNavigationAction label="Aula" icon={<SmartDisplay />} />
      <BottomNavigationAction label="Pós-teste" icon={<TipsAndUpdates />} />
    </BottomNavigation>
  );
}
