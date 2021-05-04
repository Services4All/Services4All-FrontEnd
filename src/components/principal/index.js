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
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItems from "./listItems";
import Chart from "./Chart";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';
import EnhancedTable from './EnhancedTable'

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
}));

function Principal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [checkedNombre, setCheckedNombre] = React.useState(false);

  const handleDrawerOpen = () => {
	  	/* istanbul ignore next */
    setOpen(true);
  };
  const handleDrawerClose = () => {
	  	/* istanbul ignore next */
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const toggleCheckedNombre = () => {
	  	/* istanbul ignore next */
    setCheckedNombre((prev) => !prev);
  };

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
            Bienvenido {localStorage.getItem("email")}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
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
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
		<FormControlLabel
                      control={
                        <Switch
                          size="small"
                          checked={checkedNombre}
                          onChange={toggleCheckedNombre}
                        />
                      }
                      label="Editar datos personales"
                    />
		  <br/>
		  <br/>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* Aquí se debe colocar la información del usuario desde el backend. Además, de permitirle modificar sus datos */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
				  {checkedNombre===false &&
                    <input type="text" id="lname" name="lname" placeholder="Aquí va nombre" disabled></input>
				  }
				  {checkedNombre===false &&
                    <input type="text" id="lname" name="lname" placeholder="Aquí va apellido" disabled></input>
				  }
				  {checkedNombre===false &&
                    <input type="text" id="lname" name="lname" placeholder="Aquí va correo" disabled></input>
				  }
				  {checkedNombre===true &&
                    <input type="text" id="lname" name="lname" placeholder="Ingrese un nuevo nombre"></input>
				  }
				  {checkedNombre===true &&
                    <input type="text" id="lname" name="lname" placeholder="Ingrese un nuevo apellido"></input>
				  }
				  {checkedNombre===true &&
                    <input type="text" id="lname" name="lname" placeholder="Ingrese un nuevo correo"></input>
				  }
				  {checkedNombre===true &&
				  <Button variant="contained" color="primary">
				   Aplicar cambios
</Button>
				  }
 
              </Paper>
            </Grid>
            {/* Recent Orders */}
            {/* Aquí se deben colocar los últimos servicios solicitados, si es comprador, y los últimos servicios publicados si es vendedor. Se necesita el back */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
				<EnhancedTable />
			  </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Principal;
