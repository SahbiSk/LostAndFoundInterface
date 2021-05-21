import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import data from "./data";
import useStyles from "./styles";
import ImageIcon from "@material-ui/icons/Image";

const PageAccueil = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState(data);
  const [description, setDescription] = useState("");
  const categories = [
    "Animals",
    "Books",
    "Cars",
    "Clothes ",
    "Computers",
    "Documents",
    "Electronics",
    "Human",
    "Materials",
    "Phones",
    "Sports/games",
    "Tools",
    "Toys and Games",
    " Vehicles",
    "  Other...",
  ];
  const [category, setcategory] = useState(categories[0]);
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    setPosts(
      filterCategory !== ""
        ? data.filter((post) => post.category === filterCategory)
        : data
    );
  }, [filterCategory]);

  return (
    <Container>
      <Container maxWidth="sm" className={classes.uploadSection}>
        <Typography variant="h5" gutterBottom>
          Add new post :
        </Typography>
        <Typography color="textSecondary">Select Category : </Typography>
        <Select value={category} onChange={(e) => setcategory(e.target.value)}>
          {categories.map((cat, i) => (
            <MenuItem key={i}>{cat} </MenuItem>
          ))}
        </Select>
        <br />
        <br />
        <Typography color="textSecondary" gutterBottom>
          Enter your description here ...
        </Typography>
        <TextField
          value={description}
          type={"text"}
          multiline={true}
          rows={4}
          variant="outlined"
          label="description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
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

      <Container className={classes.filter}>
        <Typography color="textPrimary" variant="h5">
          Select Category :
        </Typography>
        <Select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <MenuItem key={i} value={cat}>
              {cat}{" "}
            </MenuItem>
          ))}
        </Select>
        <br />
        <br />
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
