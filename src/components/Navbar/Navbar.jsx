import { Container, IconButton, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { SearchOutlined } from "@material-ui/icons";

const Navbar = ({ history }) => {
  const classes = useStyles();
  return (
    <Container className={classes.appbar} maxWidth="">
      <Typography
        variant="h4"
        className={classes.title}
        onClick={() => history.push("/")}
      >
        Searchi
      </Typography>
      <div className={classes.searchBoxContainer}>
        <input
          className={classes.searchBox}
          placeholder="   Enter search here ..."
        />
        <SearchOutlined className={classes.searchIcon} />
      </div>
      <IconButton
        className={classes.iconBtn}
        onClick={() => history.push("/profile")}
      >
        <AccountCircleIcon />
      </IconButton>
    </Container>
  );
};

export default Navbar;
