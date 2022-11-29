import {
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import EventCallbackArg from "../@types/EventCallbackArg";
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
      {/* <BrowserRouter> */}
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
              primary={
                // <Link to={`${item}`}>
                <Typography variant="overline">{item.text}</Typography>
                // </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
      {/* </BrowserRouter> */}
    </List>
  </>
);
