import React from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  checkWrapper: {
    display: "flex",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));

export default function Checkboxes() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <FormGroup>
        <div className={classes.checkWrapper}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label="Sí"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="No"
          />
        </div>
      </FormGroup>
    </div>
  );
}
