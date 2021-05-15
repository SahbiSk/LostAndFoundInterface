import React from "react";
import useStyles from "./ImageSection";
import Box from '@material-ui/core/Box';


const ImageSection = () => {
  const classes = useStyles();
  return <div className={classes.hero}>
      <Box>Find what you have missed easily.</Box>
  </div>;
};

export default ImageSection;