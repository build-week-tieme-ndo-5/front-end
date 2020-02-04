<<<<<<< HEAD
import React, { useState } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useHistory} from 'react-router-dom';
=======
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
<<<<<<< HEAD
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState("");

  const onLogin = event => {
    event.preventDefault();
    setIsLoading(true);

    console.log(credentials)

    axiosWithAuth()
      .post(`https://tieme-ndo-5.herokuapp.com/staff/login`, credentials)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token)
        history.push("/");
      })
      .catch(error => console.log("Error > ", error));
  };

  const handleChange = event => {
    event.preventDefault();
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

=======
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
<<<<<<< HEAD
        <form className={classes.form} noValidate onSubmit={onLogin}>
=======
        <form className={classes.form} noValidate>
>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
<<<<<<< HEAD
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChange}
            value={credentials.username}
=======
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
<<<<<<< HEAD
            onChange={handleChange}
            value={credentials.password}
=======
>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
<<<<<<< HEAD
          {isLoading && <p>Patientia....</p>}
=======
>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
<<<<<<< HEAD
};
export default SignIn;
=======
}
>>>>>>> e15f79b2a63074f220c340bd57a14ccb1cc4b66a
