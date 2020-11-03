import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import ListIcon from "@material-ui/icons/List";
import PeopleSharpIcon from "@material-ui/icons/PeopleSharp";
import HowToRegSharpIcon from "@material-ui/icons/HowToRegSharp";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import LockSharpIcon from "@material-ui/icons/LockSharp";

const ListsMenuAdm = () => {
  return (
    <List component="nav">
      <ListItem button component={Link} to="/client/dashboard">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>Inicio</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/user/new">
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText>Crear usuarios</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/user/list">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText>Listar usuarios</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/user/modify">
        <ListItemIcon>
          <PeopleSharpIcon />
        </ListItemIcon>
        <ListItemText>Modificar usuarios</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/user/enabledidable">
        <ListItemIcon>
          <HowToRegSharpIcon />
        </ListItemIcon>
        <ListItemText>Habilitar/Deshabilitar usuarios</ListItemText>
      </ListItem>
      <Divider />
      <Typography variant="h6" color="primary">
        Proyectos
      </Typography>
      <ListItem button component={Link} to="/client/project/new">
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText>Crear proyecto</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/project/list">
        <ListItemIcon>
          <FormatListNumberedIcon />
        </ListItemIcon>
        <ListItemText>Listar proyecto</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/project/modify">
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText>Modificar proyecto</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/project/enabledisable">
        <ListItemIcon>
          <LibraryAddCheckIcon />
        </ListItemIcon>
        <ListItemText>Habilitar/deshabilitar</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/project/certificate">
        <ListItemIcon>
          <CardMembershipIcon />
        </ListItemIcon>
        <ListItemText>Generar certificado</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/client/uploadletterhead">
        <ListItemIcon>
          <WallpaperIcon />
        </ListItemIcon>
        <ListItemText>Subir hoja membrete</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <LockSharpIcon />
        </ListItemIcon>
        <ListItemText>Cerrar sesión</ListItemText>
      </ListItem>
    </List>
  );
};

export default ListsMenuAdm;