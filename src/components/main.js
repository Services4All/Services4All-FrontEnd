import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Footer from './elements/Footer';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1,2,3,4,5,6];
function Main(){
		const classes = useStyles();
		const [cardName, setName] = useState(["Carpintería","Plomería","Mecánica","Consultoría médica","Cerrajería","Zapatería"]);
		const [cardImage, setImage] = useState(["https://www.flaticon.es/premium-icon/icons/svg/1461/1461734.svg","data:image/png;base64,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","https://images.vexels.com/media/users/3/147722/isolated/preview/618e5b270ddb606dae6fa57689bfe3cd-logotipo-de-servicio-mec-aacute-nico-de-autom-oacute-viles-by-vexels.png","https://i.pinimg.com/474x/2c/94/dc/2c94dca3d298d6bffad5402deae4a166.jpg","https://www.flaticon.es/premium-icon/icons/svg/4011/4011252.svg","https://images.vexels.com/media/users/3/143028/isolated/preview/fca3043920fa2ff5d59aa0cedb758b75-zapatos-de-ropa-by-vexels.png"]);
		return (
			<React.Fragment>
				<CssBaseline />
					<div className={useStyles().heroContent}>
						<Container>
							<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							  Categorías de servicios          
							</Typography>						
						</Container>
					</div>
						<Container className={useStyles().cardGrid} maxWidth="md">
							<Grid container spacing={4}>
								{cards.map((card) => (
									<Grid item key={card} xs={12} sm={6} md={4}>
										<Card className={classes.card}>
											<CardMedia
												className={classes.cardMedia}
												image = {cardImage[card-1]}
												title ="Image title"
											/>
											<CardContent className={classes.cardContent}>
												<Typography gutterBottom variant="h5" component="h2">
													{cardName[card-1]}
												</Typography>
											</CardContent>
											<CardActions>
												<Button size="small" color="primary">
													View
												</Button>
											</CardActions>
										</Card>
									</Grid>
								))}
								<Grid
							  container
							  direction="column"
							  justify="space-evenly"
							  alignItems="stretch">
								<Footer />
							</Grid>
							</Grid>
							
						</Container>
			</React.Fragment>
		);
	}

export default Main;


