import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import React from "react";
import PageTitle from "./PageTitle";
import UpTransition from "./UpTransition";
import CloseIcon from "@mui/icons-material/Close";

export default ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element[];
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button size="small" onClick={handleClickOpen}>
        Saber mais
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={UpTransition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            maxWidth: "80%",
            pt: 2,
            px: { md: "10%", sm: "5%" },
          }}
        >
          <PageTitle>{title}</PageTitle>
          {children}
        </Box>
      </Dialog>
    </Box>
  );
};
