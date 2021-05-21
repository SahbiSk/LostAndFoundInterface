import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Post from "../Post/Post";
import useStyles from "./styles";
import posts from "./data";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HomeIcon from "@material-ui/icons/Home";

const UserDashboard = () => {
  const classes = useStyles();
  return (
    <Container>
      {/* <Grid container spacing={2}> */}
      <Container className={classes.profileSection}>
        <Container className={classes.profilePicSection}>
          <img
            className={classes.profilePic}
            src="https://static9.depositphotos.com/1371851/1141/i/600/depositphotos_11412590-stock-photo-handsome-young-man.jpg"
            alt="profile"
          />
          <Typography variant="h4" gutterBottom>
            sahbi
          </Typography>
        </Container>
        <Container className={classes.userInfoSection}>
          <Typography className={classes.contactInfo}>
            <HomeIcon /> : Rue Ibn El-Jazzar,Sousse
          </Typography>
          <Typography className={classes.contactInfo}>
            <EmailIcon /> : user@user.com
          </Typography>
          <Typography className={classes.contactInfo}>
            <PhoneAndroidIcon /> : +216 xxxxxxxx
          </Typography>
        </Container>
      </Container>
      {/* <Grid item sm={12} md={6} lg={8}> */}
      <Grid container spacing={0} className={classes.container}>
        {posts.map((post, key) => (
          <Post {...post} key={key} />
        ))}
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
    </Container>
  );
};

export default UserDashboard;
