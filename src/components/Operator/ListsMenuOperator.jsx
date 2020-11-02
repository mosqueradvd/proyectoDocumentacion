import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import CardMembershipIcon from "@material-ui/icons/CardMembership";
import LockSharpIcon from "@material-ui/icons/LockSharp";

const ListsMenuOperator = () => {
  return (
    <List component="nav">
      <Divider />
      <ListItem button component={Link} to="/operator/certificates">
        <ListItemIcon>
          <CardMembershipIcon />
        </ListItemIcon>
        <ListItemText>Generar certificado</ListItemText>
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

export default ListsMenuOperator;
