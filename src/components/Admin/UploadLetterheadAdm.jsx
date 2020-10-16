import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Box,
  Card,
  Button,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  box: {
    marginBottom: theme.spacing(5),
  },
}));

const UploadLetterheadAdm = () => {
  const classes = styles();
  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Card className={classes.card}>
        <Box className={classes.box}>
          <Typography variant="h4" color="primary">
            Subir hoja membrete
          </Typography>
        </Box>
        <Box className={classes.box}>
          <Typography variant="h6" color="textPrimary">
            Subir hoja membrete para la elaboración de los certificados del
            proyecto
          </Typography>
        </Box>

        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Subir archivo
          </Button>
        </label>
      </Card>
    </Container>
  );
};

export default UploadLetterheadAdm;
