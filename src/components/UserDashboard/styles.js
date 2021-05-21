import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  profileSection: {
    background: "white",
    width: "80%",
    maxHeight: "50vh",
    marginBottom: "5vh",
    borderRadius: "20px",
    padding: "20px",
  },
  profilePic: {
    width: "150px",
    borderRadius: "50%",
    marginBottom: "3vh",
  },
  profilePicSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));
