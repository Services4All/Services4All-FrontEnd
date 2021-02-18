import React from 'react';
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Main(){
		const classes = useStyles();
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
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = "https://www.flaticon.es/premium-icon/icons/svg/1461/1461734.svg"
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Carpintería
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="2" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = "https://www.flaticon.es/svg/vstatic/svg/1207/1207126.svg?token=exp=1613671244~hmac=b00a001aaeebec99de3a4002ed2a840b"
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Plomería
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="3" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = "https://www.flaticon.es/svg/vstatic/svg/4244/4244830.svg?token=exp=1613671312~hmac=60e951cf508f6199196e5d545c47236b"
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Mecánica
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="4" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = "https://www.flaticon.es/svg/vstatic/svg/3553/3553700.svg?token=exp=1613671385~hmac=b84337f8134ccefe68e22cceffb68c07"
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Consultoría médica
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="5" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = "https://www.flaticon.es/premium-icon/icons/svg/4011/4011252.svg"
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Cerrajería
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="6" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = "https://www.flaticon.es/svg/vstatic/svg/1818/1818741.svg?token=exp=1613671519~hmac=c0c5222e8d03a47554ef794ffe8193b6"
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Zapatería
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>

							</Grid>
						</Container>
			</React.Fragment>
		);
	}

export default Main;


