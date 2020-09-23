import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  CssBaseline,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
  Avatar,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(30),
    },
  },
  avatar: {
    margin: theme.spacing(2),
  },
  btnSubmit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: "100%",
  },
}));

const onSubmit = (data, e) => {
  e.target.reset();
};

const RememberPassword = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3}>
        <div className={classes.container}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" component="h1">
            Banco de proyectos
            <Divider />
          </Typography>
          
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="email"
              id="email"
              label="Correo electrónico"
              variant="outlined"
              margin="normal"
              fullWidth
              autoComplete="email"
              autoFocus
              inputRef={register({ required: true })}
            />
            {errors.email && (
              <Typography variant="caption" color="error">
                <InfoIcon />
                Campo obligatorio
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className={classes.btnSubmit}
            >
              Recordar
            </Button>
            <Link>Cancelar</Link>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default RememberPassword;
