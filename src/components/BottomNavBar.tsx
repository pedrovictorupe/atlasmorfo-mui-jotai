import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { DRAWER_WIDTH } from "../constants";

type BottomNavBarProps = {
  currentTab: number;
  setPaginaAtual: (n: number) => void;
  items: { label: string; icon: JSX.Element; isLocked: boolean }[];
};

export const DEFAULT_NAVBAR_HEIGHT = 56;

export default function BottomNavBar({
  currentTab: paginaAtual,
  setPaginaAtual: setCurrentTab,
  items,
}: BottomNavBarProps) {
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        width: { xs: `100%`, sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        bottom: 0,
      }}
      showLabels
      value={paginaAtual}
      onChange={(_event, paginaSeguinte) => {
        if (items[paginaSeguinte].isLocked == true) return;

        setCurrentTab(paginaSeguinte);
      }}
    >
      {(() => {
        let tabs: JSX.Element[] = [];

        items.forEach((item, index) => {
          tabs.push(
            <BottomNavigationAction
              label={item.label}
              icon={item.icon}
              key={index}
            />
          );
        });

        return tabs;
      })()}
    </BottomNavigation>
  );
}
