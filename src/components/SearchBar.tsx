import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default () => (
  <Paper
    component="form"
    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Pesquisar"
      inputProps={{ "aria-label": "search google maps" }}
    />
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
  </Paper>
);
