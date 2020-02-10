import React from 'react';
import { BrowserRouter as Router, NavLink, } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';


export default function NavigationBar(){
  const theme = createMuiTheme({palette:{
    common:{
        black:"#000",
        white:"#fff"},
    background:{
        paper:"rgba(210, 152, 106, 1)",
        default:"rgba(206, 208, 158, 1)"},
    primary:{
        light:"rgba(112, 137, 120, 1)",
        main:"rgba(47, 59, 51, 1)",
        dark:"rgba(21, 53, 32, 1)",
        contrastText:"#fff"},
    secondary:{
        light:"rgba(235, 198, 157, 1)",
        main:"rgba(223, 165, 98, 1)",
        dark:"rgba(194, 145, 89, 1)",
        contrastText:"rgba(0, 0, 0, 1)"},
    error:{
        light:"#e57373",
        main:"#f44336",
        dark:"#d32f2f",
        contrastText:"#fff"},
    text:{
        primary:"rgba(0, 0, 0, 0.87)",
        secondary:"rgba(0, 0, 0, 0.54)",
        disabled:"rgba(0, 0, 0, 0.38)",
        hint:"rgba(0, 0, 0, 0.38)"}}});
    return(
<AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Tieme NDO
          </Typography>
          <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
        </Toolbar>
      </AppBar>
    )
}
