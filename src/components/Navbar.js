import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" color="inherit" component="div">
          RoutingApp
        </Typography>
        <MenuItem onClick={() => navigate("/profile")}>
          <Typography textAlign="center">profile</Typography>
        </MenuItem>{" "}
        <MenuItem onClick={() => navigate("/home")}>
          <Typography textAlign="center">home</Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}
