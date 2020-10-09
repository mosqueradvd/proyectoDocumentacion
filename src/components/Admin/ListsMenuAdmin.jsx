import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import ListIcon from "@material-ui/icons/List";
import PeopleSharpIcon from "@material-ui/icons/PeopleSharp";
import HowToRegSharpIcon from "@material-ui/icons/HowToRegSharp";

const ListsMenuAdmin = () => {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>Inicio</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText>Crear usuarios</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText>Listar usuarios</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleSharpIcon />
        </ListItemIcon>
        <ListItemText>Modificar usuarios</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HowToRegSharpIcon />
        </ListItemIcon>
        <ListItemText>Habilitar/Deshabilitar usuarios</ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};

export default ListsMenuAdmin;
