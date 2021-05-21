import React from "react";
import useStyles from "./styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Container, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <br />
      <Typography gutterBottom variant="h4">
        Reach us at :
      </Typography>
      <Container className={classes.iconContainer}>
        <TwitterIcon className={classes.icon} />
        <FacebookIcon className={classes.icon} />
        <InstagramIcon className={classes.icon} />
      </Container>
      <br />
      <br />
      <br />
      <Typography variant="body1">&#169; Sahbi Barkallah</Typography>
    </div>
  );
};

export default Footer;
