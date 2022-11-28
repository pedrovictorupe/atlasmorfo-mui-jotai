import {
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

export type SumarioDrawerProps = {
  drawerTitle: string;
  drawerItems: string[];
};
export default ({ drawerTitle, drawerItems }: SumarioDrawerProps) => (
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
        <ListItem key={`${item}`} disablePadding>
          <ListItemButton>
            <ListItemText
              sx={{ ml: 1 }}
              disableTypography
              primary={<Typography variant="overline">{item}</Typography>}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
);
