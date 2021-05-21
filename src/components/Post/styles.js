import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  postContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  profile: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  cardContent1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profilePicAndNameContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));
