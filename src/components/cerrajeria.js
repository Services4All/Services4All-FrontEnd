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
		"Servicio de Cerrajería 24 horas",
		"Servicio de Cerrajería Para cualquier tipo de llaves",
		"Servicio de Cerrajería La 19",
		"Servicio de Cerrajería Cercasa",
		"Servicio de Cerrajería Pueblo Seco",
		"Servicio de Cerrajería El Maestro Cerrajero",		
	]);
	const [arrayCard] = useState([
		"https://www.estrelladigital.es/media/estrelladigital/images/2017/11/08/2017110812132615336.jpg",
		"https://4.bp.blogspot.com/-qL3GNzHk8ok/Wa8riraI5BI/AAAAAAAAAGA/UK8-pR91diEdIBv8xRga0Ng7h__QpdSdwCLcBGAs/s1600/cerrajero.jpg",
		"https://ubicafacil.com/static/media/imagen_portada/Cerrajeria_la_19_-_Cerrajeria_a_domicilio_duitama_Boyaca_3j8bfta.jpg",
		"https://cerrajeriacercasa.com/wp-content/uploads/2018/03/WhatsApp-Image-2018-02-28-at-16.18.42-4.jpeg",
		"https://images-na.ssl-images-amazon.com/images/I/A1bk2iTAqtL.png",
		"https://static.wixstatic.com/media/b71fe8_ba6eec2bb94e4c73827039392a041555~mv2.jpg/v1/fill/w_640,h_260,al_c,q_80,usm_0.66_1.00_0.01/b71fe8_ba6eec2bb94e4c73827039392a041555~mv2.webp",
	]);	
	function handleClick() {
		/* istanbul ignore next */
		history.push("/producto", {servicio: "data"});
	}
	return(
		<div>
          <h1> Encuentra todo lo que necesites referente a Cerrajeria:</h1>
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