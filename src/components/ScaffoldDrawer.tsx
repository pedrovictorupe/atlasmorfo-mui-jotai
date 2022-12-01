import { Settings } from "@mui/icons-material";
import {
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
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
}: ScaffoldDrawerProps) => (
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
            <ListItemText
              sx={{ ml: 1 }}
              disableTypography
              primary={<Typography variant="overline">{item.text}</Typography>}
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
    </List>
  </>
);
