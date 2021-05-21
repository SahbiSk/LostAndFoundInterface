import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import usestyles from "./styles";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import FlagIcon from "@material-ui/icons/Flag";
import { withRouter } from "react-router";

const Post = ({
  address,
  email,
  number,
  author,
  paragraph,
  location: { pathname },
  history,
}) => {
  const classes = usestyles();
  const buttons =
    pathname === "/"
      ? [<FlagIcon />]
      : pathname === "/admin"
      ? [<DeleteIcon color="secondary" />]
      : [
          <UpdateIcon style={{ color: "green" }} />,
          <DeleteIcon color="secondary" />,
        ];

  return (
    <Grid item className={classes.postContainer} xs={10} md={5} lg={7}>
      <Card>
        <CardContent className={classes.cardContent1}>
          <div
            className={classes.profilePicAndNameContainer}
            onClick={() => history.push("/profile")}
          >
            <img
              src="https://source.unsplash.com/random"
              className={classes.profile}
              alt="img"
            />
            <Typography variant="h5">{author}</Typography>
          </div>
          <ButtonGroup className={classes.btnGrp}>
            {buttons.map((btn, key) => (
              <Button key={key}>{btn} </Button>
            ))}
          </ButtonGroup>
        </CardContent>
        <CardContent>
          <Typography>Number : {number} </Typography>
          <Typography>Email : {email} </Typography>
          <Typography>Address : {address} </Typography>
        </CardContent>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
        />
        <CardContent className={classes.cardContent2}>
          <Typography variant="body2" color="textSecondary">
            {paragraph}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default withRouter(Post);
