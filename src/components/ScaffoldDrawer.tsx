import { Check } from "@mui/icons-material";
import {
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  Divider,
  Button,
  ListItemIcon,
} from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import SearchBar from "./SearchBar";

export type ScaffoldDrawerProps = {
  drawerTitle: string;
  drawerItems: { text: string; slugified: string }[];
  onItemClicked: (itemSlugified: string) => void;
};
export default ({
  drawerTitle,
  drawerItems,
  onItemClicked,
}: ScaffoldDrawerProps) => {
  const [lessonState] = useAtom(lessonStateAtom);

  return (
    <>
      <Toolbar>{<SearchBar />}</Toolbar>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="body1" color="primary.main">
              {drawerTitle}
            </Typography>
          </ListItemText>
        </ListItem>
        {drawerItems.map((item) => (
          <ListItem key={`${item.slugified}`} disablePadding>
            <ListItemButton
              onClick={() => {
                onItemClicked(item.slugified);
              }}
            >
              {lessonState == "POS_TESTE_RESPONDIDO" ? (
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              ) : undefined}
              <ListItemText
                sx={{ ml: 1 }}
                disableTypography
                primary={
                  <Typography variant="overline">{item.text}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Reiniciar progresso
          </Button>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ textAlign: "center" }}>
            <Typography variant="overline">
              Versão 1.0.1-c1 (01/12/22)
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};
