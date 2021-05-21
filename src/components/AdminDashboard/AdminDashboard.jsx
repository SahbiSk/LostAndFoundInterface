import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import posts from "../PageAccueil/data";
import DeleteIcon from "@material-ui/icons/Delete";
import Post from "../Post/Post";

const AdminDashboard = () => {
  const classes = useStyles();
  console.log(posts);
  const users = posts.map(({ address, author, email, number }) => ({
    address,
    number,
    email,
    author,
  }));
  console.log(users);
  const [showUsers, setShowUsers] = useState(false);
  return (
    <Container className={classes.main}>
      <ButtonGroup>
        <Button onClick={() => setShowUsers(true)}>USERS</Button>
        <Button onClick={() => setShowUsers(false)}>POSTS</Button>
      </ButtonGroup>
      {!showUsers ? (
        <Grid container spacing={5} className={classes.container}>
          {posts.map((post, key) => (
            <Post {...post} key={key} />
          ))}
        </Grid>
      ) : (
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                {Object.keys(users[0]).map((el, i) => (
                  <TableCell key={i}>{el} </TableCell>
                ))}
                <TableCell>REMOVE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, i) => (
                <TableRow>
                  {Object.values(user).map((el, i) => (
                    <TableCell key={i}>{el} </TableCell>
                  ))}
                  <Button>
                    <DeleteIcon style={{ color: "red" }} />
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default AdminDashboard;
