import { Lightbulb, SmartDisplay, TipsAndUpdates } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";
import DefaultPage from "../@types/DefaultPage";

type BottomNavBarProps = {
  paginaAtual: number;
  setPaginaAtual: (n: number) => void;
};

export const DEFAULT_NAVBAR_HEIGHT = 56;

export default function BottomNavBar({
  paginaAtual,
  setPaginaAtual,
}: BottomNavBarProps) {
  return (
    <BottomNavigation
      sx={{ width: "100%" }}
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
