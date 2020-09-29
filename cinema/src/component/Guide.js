import React from 'react';
import AppBar from '@material-ui/core/Appbar';
import ToolBar from '@material-ui/core/Toolbar';
import '../App.css';
import '../index.css'
import './Guide.css'
import Grid from '@material-ui/core/Grid'
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#004d40',
      contrastText: '#000',
    },
  },
});


export const Guide = ({onClick,page}) => {
  switch (page) {
    case "main":
      return (
        <AppBar position = "static" style = {{background: theme.palette.secondary.dark, heigh:60}}>
          <ToolBar style = {{margin : 0, padding : 0}}>
            <Grid container direction = "row" alignitems = "flex-end" spacing = {1}>
              <Grid item>
              <button name = "MainButton" type = "button" className = "currButton" 
              style = {{background:theme.palette.primary.dark, marginLeft: 5}} onClick = {onClick}>Welcome</button>
              <button name = "UpButton" type = "button" className = "otherButton" onClick = {onClick}>Upload</button>
              </Grid>
              <Grid item xs />
              <Grid item>
              <button name = "LoginButton" type = "button" className = "logButton" 
              style = {{float: "right", marginRight: 10}} onClick = {onClick} >Log in</button>
              </Grid>
              </Grid>
          </ToolBar>
        </AppBar>

      );
      case "upload":
        return (
          <AppBar position = "static" style = {{background: theme.palette.secondary.dark, heigh:60}}>
            <ToolBar style = {{margin : 0, padding : 0}}>
              <Grid container direction = "row" alignitems = "flex-end" spacing = {1}>
                <Grid item>
                <button name = "MainButton" type = "button" className = "otherButton" 
                style = {{marginLeft: 5}} onClick = {onClick}>Welcome</button>
                <button name = "UpButton" type = "button" className = "currButton" 
                style = {{background:theme.palette.primary.dark}}onClick = {onClick}>Upload</button>
                </Grid>
                <Grid item xs />
              <Grid item>
              <button name = "LoginButton" type = "button" className = "logButton" 
              style = {{float: "right", marginRight: 10}} onClick = {onClick} >Log in</button>
              </Grid>
                </Grid>
            </ToolBar>
          </AppBar>
  
        );
        case "side":
          return (
            <AppBar position = "static" style = {{background: theme.palette.secondary.dark, heigh:60}}>
              <ToolBar style = {{margin : 0, padding : 0}}>
                <Grid container direction = "row" alignitems = "flex-end" spacing = {1}>
                  <Grid item>
                  <button name = "MainButton" type = "button" className = "currButton" 
                  style = {{background:theme.palette.primary.main}} onClick = {onClick}>Welcome</button>
                  <button name = "UpButton" type = "button" className = "currButton" 
                  style = {{background:theme.palette.primary.main}} onClick = {onClick}>Upload</button>
                  </Grid>
                  <Grid item xs />
              <Grid item>
              <button name = "LoginButton" type = "button" className = "logButton" 
              style = {{float: "right", marginRight: 10}} onClick = {onClick} >Log in</button>
              </Grid>
                  </Grid>
              </ToolBar>
            </AppBar>
    
          );

          case "login":
            return (
              <AppBar position = "static" style = {{background: theme.palette.secondary.dark, heigh:60}}>
                <ToolBar style = {{margin : 0, padding : 0}}>
                  <Grid container direction = "row" alignitems = "flex-end" spacing = {1}>
                    <Grid item>
                    <button name = "MainButton" type = "button" className = "currButton" 
                    style = {{background:theme.palette.primary.main}} onClick = {onClick}>Welcome</button>
                    <button name = "UpButton" type = "button" className = "currButton" 
                    style = {{background:theme.palette.primary.main}} onClick = {onClick}>Upload</button>
                    </Grid>
                    <Grid item xs />
                <Grid item>
                <button name = "LoginButton" type = "button" className = "logButton" style = 
                {{float: "right", marginRight: 10, background:theme.palette.secondary.main}} onClick = {onClick} >Log in</button>
                </Grid>
                    </Grid>
                </ToolBar>
              </AppBar>
      
            );
      default: return (<div></div>)
  }
}

export default Guide;
