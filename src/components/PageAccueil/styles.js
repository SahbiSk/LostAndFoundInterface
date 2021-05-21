import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  uploadSection: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    marginBottom: "5vh",
    borderRadius: "10px",
    paddingBottom: "10px",
    boxShadow: "1px 5px 5px rgba(0,0,0,0.2)",
  },
  uploadBtn: {
    background: "var(--color-pink-dark)",
    color: "white",
  },
}));
