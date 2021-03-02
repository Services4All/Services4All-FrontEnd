//Dependencies
import React, { useState, handleOpen } from "react";
//import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
//import Modal from "@material-ui/core/Modal";
//import './servicios.css';
import Footer from "./elements/Footer";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "white",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Setup(){
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const classes = useStyles();
	const [cardName] = useState([
		"Servicio de Carpintería Barrio Alamos",
		"Servicio de Plomería Barrio Ciudadela Colsubsidio",
		"Servicio de Mecánica Barrio Mirandela",
		"Servicio de Consultoría médica Colina",
		"Servicio de Cerrajería Barrio Suba Rincon",
		"Servicio de Plomería Barrio Villaluz",
		"Servicio de Carpintería Barrio Villaluz",
		"Servicio de Carpintería Barrio Santa Isabel",
		"Servicio de Mecánica Barrio Florida",
		"Servicio de Zapatería Barrio 20 de Julio",
		"Servicio de Consultoría médica Barrio Quirigua",
		"Servicio de Cerrajería Barrio Villas de Gratamira",
	]);
	return(
		<div>
          <h1> Consulta aquí nuestra oferta de servicios:</h1>
		  <Container className={useStyles().cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {cardName[card - 1]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleOpen}>
                    View
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
