import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from './navBar/NavBar';
import './login.css';
import Footer from './elements/Footer'



const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(3),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
})); 

export default function SignUp() {
  const classes = useStyles();

  return (
      <div >
          <NavBar />
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <center>
              <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
              </Avatar>
              </center>
              <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                      LogIn
                  </Typography>
              </div>
          </Container>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Footer/>
      </div>
  );
}