import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80vw",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tableContainer: {
    background: "white",
  },
}));
