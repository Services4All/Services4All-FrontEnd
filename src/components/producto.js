import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';


class producto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calificacion: 0 };
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h2" gutterBottom>
              Titulo del servicio
            </Typography>
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
            <IconButton aria-label="delete" color="primary">
              <AddIcon />
            </IconButton>
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
              <Typography component="legend">Controlled</Typography>

              <Rating
                name="simple-controlled"
                value={this.state.calificacion}
                onChange={(event, newValue) => {
				  /* istanbul ignore next */
                  this.setState({ calificacion: newValue });
                }}
              ></Rating>
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
}

export default producto;
