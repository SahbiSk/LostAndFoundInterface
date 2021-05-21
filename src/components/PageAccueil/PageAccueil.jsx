import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Post from "../Post/Post";
import posts from "./data";
import useStyles from "./styles";
import ImageIcon from "@material-ui/icons/Image";

const PageAccueil = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  return (
    <Container>
      <Container maxWidth="sm" className={classes.uploadSection}>
        <Typography variant="h5" gutterBottom>
          Add new post :
        </Typography>
        <TextField
          value={description}
          type={"text"}
          multiline={true}
          rows={4}
          placeholder={"Enter your description here ..."}
          onchange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="contained"
          component="label"
          className={classes.uploadBtn}
        >
          Add to Your Post
          <input type="file" hidden />
          <ImageIcon />
        </Button>
      </Container>
      <Grid container spacing={5} className={classes.container}>
        {posts.map((post, key) => (
          <Post {...post} key={key} />
        ))}
      </Grid>
    </Container>
  );
};

export default PageAccueil;
