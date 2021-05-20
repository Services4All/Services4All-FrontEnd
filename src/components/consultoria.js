import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Footer from "./elements/Footer";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  sampleContent: {
    flexGrow: 1,
  },
  view: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  sampleGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  sampleMedia: {
    paddingTop: "56.25%", // 16:9
  }, 
  
}));

function Setup(){
	let history = useHistory();
	const cards = [1, 2, 3, 4, 5, 6];
	const classes = useStyles();
	const [nombresarrayCard] = useState([
		"Servicio de Consultoria Medica Daytona Barrio Mirandela",
		"Servicio de Consultoria Medica Colina",
		"Servicio de Consultoria Medica Gómez Barrio Villaluz",
		"Servicio de Consultoria Medica Barrio Quirigua",
		"Servicio de Consultoria Medica Osorio Barrio Alamos",
		"Servicio de Consultoria Medica Barrio Ciudadela Colsubsidio",		
	]);
	const [arrayCard] = useState([
		"https://previews.123rf.com/images/michaeljung/michaeljung1305/michaeljung130500034/19410746-consultor%C3%ADa-m%C3%A9dica-m%C3%A9dico-paciente-mayor-en-oficina.jpg",
		"https://diagnosticoencasa.com/wp-content/uploads/2017/06/consulta-medica-online.jpg",
		"https://us.123rf.com/450wm/visivasnc/visivasnc1707/visivasnc170700004/81411251-los-m%C3%A9dicos-utilizan-la-tableta-digital-concepto-de-consultor%C3%ADa-m%C3%A9dica-.jpg?ver=6",
		"https://st3.depositphotos.com/2714617/i/600/depositphotos_138999714-stock-photo-doctor-and-nurse-use-the.jpg",
		"https://thumbs.dreamstime.com/b/videoconferencia-m%C3%A9dica-doctor-en-videochat-con-compa%C3%B1eros-de-trabajo-l%C3%ADnea-diagn%C3%B3stico-consultor%C3%ADa-codificado-medicina-194210146.jpg",
		"https://st4.depositphotos.com/4233795/i/600/depositphotos_237298940-stock-photo-doctor-consulting-check-information-little.jpg",
	]);	
	function handleClick() {
		/* istanbul ignore next */
		history.push("/producto", {servicio: "data"});
	}
	return(
		<div>
          <h1> Encuentra todo lo que necesites referente a Consultoria Medica:</h1>
		  <Container className={useStyles().sampleGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.view}>
                <CardMedia
                  className={classes.sampleMedia}	
                  image={arrayCard[card - 1]}
                  title="Titulo C"
                />
                <CardContent className={classes.sampleContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {nombresarrayCard[card - 1]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleClick}>
                    Opina sobre este servicio
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
	  <Footer />
        </div>
		
	);
}
export default Setup;
