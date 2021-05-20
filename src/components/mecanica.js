import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Footer from "./elements/Footer";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  sampleContent: {
    flexGrow: 1,
  },
  sampleMedia: {
    paddingTop: "56.25%", // 16:9
  },
  sampleGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }, 
  view: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  
  
}));

function Setup(){
	let history = useHistory();
	const cards = [1, 2, 3, 4, 5, 6];
	const classes = useStyles();
	const [namesArray] = useState([
		"Servicio de Mecánica Osorio Barrio Alamos",
		"Servicio de Mecánica Barrio Ciudadela Colsubsidio",
		"Servicio de Mecánica Daytona Barrio Mirandela",
		"Servicio de Mecánica Colina",
		"Servicio de Mecánica Gómez Barrio Villaluz",
		"Servicio de Mecánica Barrio Quirigua",
	]);
	const [arreglo] = useState([
		"https://s3.amazonaws.com/imagenes.conexioncapital.co/wp-content/uploads/2021/05/11125226/Talleres.jpg",
		"https://cdatecnosabana.com/wp-content/uploads/revision-tecnomecanica-bogota-colombia-tecnosabana.jpg",
		"https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/05/11/5f16051d88e3e.jpeg",
		"https://files.alerta.rcnradio.com/alerta_bogota/public/styles/article_desktop/public/2020-07/whatsapp_image_2020-07-16_at_2.18.44_pm_1_0.jpeg?itok=Tw8tTTg6",
		"https://www.eltiempo.com/files/image_640_428/uploads/2020/03/27/5e7e7bd0d11eb.jpeg",
		"https://www.saeautomotriz.com/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-20-at-6.23.20-PM-2.jpeg",
	]);	
	function handleClick() {
		/* istanbul ignore next */
		history.push("/producto", {servicio: "data"});
	}
	return(
		<div>
          <h1> Encuentra todo lo que necesites referente a Mecánica:</h1>
		  <Container className={useStyles().sampleGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.view}>
                <CardMedia
                  className={classes.sampleMedia}	
                  image={arreglo[card - 1]}
                  title="Titulo"
                />
                <CardContent className={classes.sampleContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {namesArray[card - 1]}
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
