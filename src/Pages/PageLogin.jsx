import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
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
      marginTop: theme.spacing(15),
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
    marginTop: theme.spacing(2),
  },
}));

const onSubmit = (data, e) => {
  e.target.reset();
};

const PageLogin = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  // const ruta = location.pathname;
  // console.log(ruta);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3}>
        <div className={classes.container}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Banco de proyectos
            <Divider />
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="usuario"
              id="usuario"
              variant="outlined"
              margin="normal"
              inputRef={register({ required: true })}
              fullWidth
              autoComplete="email"
              autoFocus
              label="Correo electronico"
            />
            {errors.usuario && (
              <Typography variant="caption" color="error">
                <InfoIcon color="error" fontSize="small" />
                Campo obligatorio
              </Typography>
            )}
            <TextField
              name="password"
              id="password"
              variant="outlined"
              margin="normal"
              inputRef={register({ required: true })}
              fullWidth
              label="password"
              type="password"
              autoComplete="current-password"
            />
            {errors.password && (
              <Typography variant="caption" color="error">
                <InfoIcon color="error" fontSize="small" />
                Campo obligatorio
              </Typography>
            )}
            <FormControlLabel
              control={
                <Controller
                  as={Checkbox}
                  control={control}
                  name="remember"
                  color="primary"
                />
              }
              label="Recordar contraseña"
            ></FormControlLabel>
            <Button
              component={Link}
              to="/admin/dashboard"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.btnSubmit}
              type="submit"
            >
              Ingresar
            </Button>

            <Link to="/rememberpassword"> ¿olvido su contrasaña?</Link>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default PageLogin;
