import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from './navBar/NavBar';
import Footer from './elements/Footer';
import Alert from '@material-ui/lab/Alert';


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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
/* istanbul ignore next */
export default function SignUp() {
    const classes = useStyles();
	const [firstName, setFirstName] = React.useState(null);
	const [lastName, setLastName] = React.useState(null);
	const [emailAddress, setEmailAddress] = React.useState(null);
	const [cedula, setCedula] = React.useState(null);
	const [categoriaServicio, setCategoriaServicio] = React.useState(null);
	const [ciudad, setCiudad] = React.useState(null);
	const [registroExitoso, setRegistroExitoso] = React.useState(false);
	const [password, setPassword] = React.useState(null);
	
	function registrarUsuario(){
		//Aquí se debe llamar al API para hacer la creación del nuevo usuario
		if(firstName!=null && lastName!=null && emailAddress!=null && cedula!=null && categoriaServicio!=null && ciudad!=null && registroExitoso!=null && password!=null){
			/* istanbul ignore next */
			setRegistroExitoso(true);
			/* istanbul ignore next */
			setTimeout(function() {
				window.location.replace('/');
			}, 1000);
		}
	}
	
	function handleChangeFirstName(event){
		/* istanbul ignore next */
		setFirstName(event.target.value);
		console.log(firstName);
	}
	
	function handleChangeLastName(event){
		/* istanbul ignore next */
		setLastName(event.target.value);
	}
	
	function handleChangeEmailAddress(event){
		/* istanbul ignore next */
		setEmailAddress(event.target.value);
	}
	
	function handleChangeCedula(event){
		/* istanbul ignore next */
		setCedula(event.target.value);
	}
	
	function handleChangeCategoriaServicio(event){
		/* istanbul ignore next */
		setCategoriaServicio(event.target.value);
	}
	
	function handleChangeCiudad(event){
		/* istanbul ignore next */
		setCiudad(event.target.value);
	}
	
	function handleChangePassword(event){
		/* istanbul ignore next */
		setPassword(event.target.value);
	}

    return (
        <div >
            <NavBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
									onChange={handleChangeFirstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
									onChange={handleChangeLastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
									onChange={handleChangeEmailAddress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="cedula"
                                    label="cedula"
                                    id="cedula"
									onChange={handleChangeCedula}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="tipo"
                                    label="Categoria de servicio"
                                    id="tipo"
									onChange={handleChangeCategoriaServicio}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="ciudad"
                                    label="Ciudad"
                                    id="ciudad"
									onChange={handleChangeCiudad}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
									onChange={handleChangePassword}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
							onClick = {registrarUsuario}
                        >
                            Sign Up
          </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                </div>
				<br></br>
				<Grid
					  container
					  direction="column"
					  justify="center"
					  alignItems="center"
					>
					{registroExitoso && 
						<Alert severity="success">
							Ha sido registrado exitosamente
						</Alert>
					}
				</Grid>
            </Container>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    );
}