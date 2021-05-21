import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    width: "100vw",
    background: "var(--color-slate-dark)",
    height: "30vh",
    marginTop: "5vh",
    color: "white",
    textAlign: "center",
  },
  iconContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    color: "var(--color-blue-light)",
    fontSize: "40px",
    cursor: "pointer",
  },
}));
