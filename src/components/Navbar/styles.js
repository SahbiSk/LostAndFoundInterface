import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appbar: {
    height: "12vh",
    width: "100vw",
    marginBottom: "5vh",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "1px 4px 8px rgba(0,0,0,0.2)",
  },
  title: {
    color: "var(--color-blue-light)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
  },
  iconBtn: {
    color: "var(--color-blue-light)",
    transform: "scale(2)",
    cursor: "pointer",
    paddingRight: "4vw",
  },
  searchIcon: {
    background: "var(--color-blue-light)",
    transform: "scale(1.5) translate(-17%)",
    marginLeft: "20px",
    color: "white",
    borderRadius: "0 50px 50px 0",
    width: "40px",
    cursor: "pointer",
  },
  logo: {
    width: "150px",
  },
  searchBoxContainer: {
    display: "flex",
    alignItems: "center",
  },
  searchBox: {
    borderRadius: "50px 0  0 50px",
    height: "32px",
    width: "200px",
    outline: "none",
  },
}));
