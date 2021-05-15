import React from "react";
import useStyles from "./NavBar";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = () => {
  const classes = useStyles();
  return <div className="NavBar">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
            <Typography variant="h5" className={classes.title}>
                Lost and Found
            </Typography>
            <Button className={classes.Button} color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
  </div>;
};

export default NavBar;