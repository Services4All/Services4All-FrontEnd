// Dependencies
import React, { useState } from "react";
import { Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ChatIcon from '@material-ui/icons/Chat';
import { useHistory } from "react-router-dom";
import InputIcon from '@material-ui/icons/Input';
import DvrIcon from '@material-ui/icons/Dvr';
import swal from 'sweetalert'


// Internals
import "./index.css";

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
    align: "left",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    backgroundColor: "red",
    alignSelf: "center",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  photo: {
	height: "100px",
	width: "100px",
  },
}));



function Navbar() {
    var [isRegister, setIsRegister] = React.useState(localStorage.getItem('registrado'));
	let history = useHistory();
	  /* istanbul ignore next */
  function handleClickRedirect () {
    history.push("/producto");
  };
  /* istanbul ignore next */
  function logout (){
	  //Hacer llamado al API para el deslogueo
	  setIsRegister(false);
	  localStorage.clear();
	  localStorage.removeItem("email");
	  localStorage.removeItem("password");
	  swal("Gracias por tu visita", "", "success")
	  
  }
  
  /* istanbul ignore next */
  function ChangeToPrincipal() {
	  if(state.left && isRegister){
		  history.push("/principal");
	  }else {
		  swal("Oops!","Debes iniciar sesión para acceder a tus datos", "warning");
	  }	  
  }
  
  /* istanbul ignore next */
  function makeRegistro (){
	  /* istanbul ignore next */
	  history.push("/Register");
  }
  
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  /* istanbul ignore next */
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  /* istanbul ignore next */
  const list = (anchor) => (
    <div
      className={clsx(useStyles.list, {
        [useStyles.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemAvatar onClick={ChangeToPrincipal} button>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Nombre de usuario"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={useStyles.inline}
                  color="textPrimary"
                >
				{localStorage.getItem('email')}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <List alignItems="bottom">
        <div>
		  <ListItem alignItems="center" button>
		  
			<img className={useStyles.photo} src="https://i.imgur.com/QJPmuZw.png" alt="S4A"/>
          </ListItem>
          <ListItem alignItems="center" button onClick={handleClickRedirect}>
            <ListItemIcon>
				<ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Deja tu opinion" />
          </ListItem>
		  {!isRegister &&
          <ListItem alignItems="center" button onClick={makeRegistro}>
            <ListItemIcon>
              <DvrIcon />
            </ListItemIcon>
            <ListItemText primary="Registrate" />
          </ListItem>
		  }
		  {isRegister &&
          <ListItem alignItems="center" button onClick={logout}>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
		  }
        </div>
      </List>
    </div>
  );
  
  /* istanbul ignore next */
  return (
    <React.Fragment>
      <CssBaseline />
      <nav className="navbar">
        <div className="nav-links">
          <ul>
            <li>
              <div align="left">
                <Button onClick={toggleDrawer("left", true)}>
                  <MenuIcon />
                </Button>
                <SwipeableDrawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                  onOpen={toggleDrawer("left", true)}
                >
                  {list("left")}
                </SwipeableDrawer>
              </div>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                className="nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
			{!isRegister &&
              <NavLink
                activeClassName="selected"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
			}
            </li>
            <li>
			{!isRegister &&
              <NavLink
                activeClassName="selected"
                className="nav-link"
                to="/Register"
              >
                Sign up
              </NavLink>
			}
            </li>
          </ul>
        </div>
		{isRegister &&
        <div className="shopping-cart">
          <NavLink to="/comprador">
            <Icon medium>shopping_cart</Icon>
          </NavLink>
        </div>
		}
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
