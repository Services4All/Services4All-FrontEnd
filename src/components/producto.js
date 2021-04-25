import React from "react";
import "./producto.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import SimpleDialog from './SimpleDialog'

//En enviar comentarios se debe hacer la petición al Back-End para añadir el comentario

function Producto () { 
	const [value, setValue] = React.useState(2);

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="sm">
		<Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
          >
		<Typography variant="h2" component="h2" gutterBottom>
        Dejanos tu opinión acerca de los servicios
      </Typography>
	  </Grid>
	  <Divider />
	  <br />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <SimpleDialog />
          </Grid>
		  <Divider />
		  <br></br>
          <Grid container direction="row" justify="center" alignItems="stretch">
            <TextField
              id="outlined-textarea"
              label="Comentario"
              placeholder="Ingrese su comentario"
              multiline
              variant="outlined"
            />
          </Grid>
		  <br></br>
		  <Divider />
          <br></br>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
		  <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
          </Grid>
		  <Divider />
		  <br></br>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
		  	<Button>
			  Enviar comentarios
			</Button>
			<br />
            <Button
              variant="contained"
              color="primary"
              href="https://web.whatsapp.com/"
            >
              Link a WhatsApp para hablar con el Vendedor
            </Button>
          </Grid>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
}

export default Producto;
