import React from "react";
import { Link } from "react-router-dom";
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
import LockSharpIcon from "@material-ui/icons/LockSharp";

const ListsMenuSuperAdmin = () => {
  return (
    <List component="nav">
      <ListItem button component={Link} to="/dashboardsa">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>Inicio</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/createuserregistrationsa">
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText>Crear organización</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/listusersa">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText>Listar usuarios</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/listmodifyusersa">
        <ListItemIcon>
          <PeopleSharpIcon />
        </ListItemIcon>
        <ListItemText>Modificar usuarios</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/listenabledisableusersa">
        <ListItemIcon>
          <HowToRegSharpIcon />
        </ListItemIcon>
        <ListItemText>Habilitar/Deshabilitar usuarios</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <LockSharpIcon />
        </ListItemIcon>
        <ListItemText>Cerrar sesión</ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};

export default ListsMenuSuperAdmin;
