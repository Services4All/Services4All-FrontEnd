import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItems from "./listItems";
import seller from "./images/seller.png";
import buyer from "./images/buyer.png";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import { useHistory } from "react-router-dom";

import "./index.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#2E3B55",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  textplace: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Informacion() {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function changeToDashboard() {
    history.push("/principal");
  }
  
  function changeToCar() {
	  history.push("/comprador");
  }
  
  function changeToOpinion() {
	  history.push("/producto");
  }
  
  function changeToVendedor() {
	  history.push("/Vendedor");
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Acerca de nuestros servicios
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItems />
        <ListItem onClick={changeToDashboard} button>
          <ListItemIcon>
            <LineStyleIcon />
          </ListItemIcon>
          <ListItemText primary="Volver al Dashboard" />
        </ListItem>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <br />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h2"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Si eres comprador
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <img src={seller} alt="Logo" />
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Puedes contratar servicios
                </Typography>
                <br />
                <Fab onClick={changeToCar} variant="extended" button>
                  <NavigationIcon className={classes.extendedIcon} />
                  Navega
                </Fab>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  ¿Mala experiencia? Reclama
                </Typography>
                <br></br>
                <Fab onClick={changeToOpinion} variant="extended" button>
                  <NavigationIcon className={classes.extendedIcon} />
                  Navega
                </Fab>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h2"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Si eres vendedor
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <img src={buyer} alt="Logo" />
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={12}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Ofrece tus servicios
                </Typography>
                <br></br>
                <Fab onClick={changeToVendedor} variant="extended" button>
                  <NavigationIcon className={classes.extendedIcon} />
                  Navega
                </Fab>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Informacion;
