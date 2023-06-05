import { Box, Card, CardContent, Typography, CardActions } from "@mui/material";
import React from "react";

export default ({
  title,
  box,
  children,
}: {
  title: string;
  box: JSX.Element;
  children: string;
}) => {
  return (
    <Box sx={{ minWidth: 275, my: 2 }}>
      <Card variant="outlined">
        {" "}
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="text.secondary">{children}</Typography>
        </CardContent>
        <CardActions>{box}</CardActions>
      </Card>
    </Box>
  );
};
