import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';


function ListItems(){
		/* istanbul ignore next */
	function ChangeToMain(){
		setTimeout(function() {
				window.location.replace('/');
			}, 1000);
	}
		/* istanbul ignore next */
	function ChangeToInformacion(){
		setTimeout(function() {
				window.location.replace('/principal/informacion');
			}, 0);
	}
	return (
		<div>
		<ListItem onClick={ChangeToMain} button>
		  <ListItemIcon>
			<DashboardIcon />
		  </ListItemIcon>
		  <ListItemText primary="Inicio" />
		</ListItem>
		<ListItem onClick={ChangeToInformacion} button>
		  <ListItemIcon>
			<PeopleIcon />
		  </ListItemIcon>
		  <ListItemText primary="Información" />
		</ListItem>
	  </div>
	);
}

export default ListItems;
