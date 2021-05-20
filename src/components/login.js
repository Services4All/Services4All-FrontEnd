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
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
	/* istanbul ignore next */
  const classes = useStyles();
  /* istanbul ignore next */
  const [email, setEmail] = React.useState(null);
  /* istanbul ignore next */
  const [password, setPassword] = React.useState(null);
  
  /* istanbul ignore next */
  function makeLogin(){
	  //Aquí se va a validar con el Back-End si el usuario ya se encuentra registrado.
		  localStorage.setItem('email', email);
		  localStorage.setItem('password', password);
		  localStorage.setItem('registrado', true);
		  setTimeout(function() {
				window.location.replace('/');
			}, 1000);
			
		  
	  }
  }
  
  /* istanbul ignore next */
  function handleChangeEmail(event){
	  setEmail(event.target.value);
  }
  
  /* istanbul ignore next */
  function handleChangePassword(event){
	  setPassword(event.target.value);
  }

/* istanbul ignore next */
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
			  onChange = {handleChangeEmail}
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
			  onChange = {handleChangePassword}
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
			  onClick={makeLogin}
            >
              LogIn
            </Button>    
          </Container>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Footer/>
      </div>
  );
}