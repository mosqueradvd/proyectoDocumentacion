import React from "react";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableSortLabel,
  Paper,
  Box,
  Typography,
  TableRow,
  TextField,
  Container,
  Grid,
  Hidden,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import Autocomplete from "@material-ui/lab/Autocomplete";

function createData(id, projectName, projectType, formulatedBy, edit) {
  return { id, projectName, projectType, formulatedBy, edit };
}

const projects = [
  { title: "Proyecto panelero" },
  { title: "Tecnología" },
  { title: "Juegos autóctonos" },
  { title: "Cultivo de café especial" },
  { title: "Derechos de la mujer" },
];

const rows = [
  createData(1, "Proyecto panelero", "Productivo", "Geovanny Ibarra"),
  createData(2, "Cultivo de café especial", "Productivo", "Ciro Meneses"),
  createData(3, "Construcción cartera", "Infraestructura", "Geovanny Ibarra"),
  createData(4, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(5, "Derechos de la mujer", "Derecho propio", "Geovanny Ibarra"),
  createData(6, "Tecnonolgía", "Otro", "Ciro Meneses"),
  createData(7, "Cultivo de café especial", "Productivo", "Ciro Meneses"),
  createData(8, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(9, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(10, "Tecnonolgía", "Otro", "Ciro Meneses"),
  createData(11, "Cultivo de café especial", "Productivo", "Ciro Meneses"),
  createData(12, "Tecnonolgía", "Otro", "Ciro Meneses"),
  createData(13, "Construcción cartera", "Infraestructura", "Geovanny Ibarra"),
  createData(14, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(15, "Tecnonolgía", "Otro", "Ciro Meneses"),
  createData(16, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(17, "Proyecto panelero", "Productivo", "Geovanny Ibarra"),
  createData(18, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(19, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(20, "Tecnonolgía", "Otro", "Ciro Meneses"),
  createData(21, "Derechos de la mujer", "Derecho propio", "Geovanny Ibarra"),
  createData(22, "Juegos autóctonos", "Cultura", "Ciro Meneses"),
  createData(23, "Proyecto panelero", "Productivo", "Geovanny Ibarra"),
  createData(24, "Cultivo de café especial", "Productivo", "Ciro Meneses"),
  createData(25, "Tecnonolgía", "Otro", "Ciro Meneses"),
  createData(26, "Derechos de la mujer", "Derecho propio", "Geovanny Ibarra"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "id", numeric: true, label: "Número" },
  { id: "projectName", numeric: false, label: "Nombre del Poyecto" },
  { id: "projectType", numeric: false, label: "Tipo de Proyecto" },
  { id: "formulatedBy", numeric: false, label: "Formulado por" },
  { id: "edit", numeric: false, label: "Editar" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  //
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    backgroundColor: "#cfe8fc",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  box: {
    marginBottom: theme.spacing(1),
  },
  search: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    maxWidth: 400,
  },
}));

export default function ModifyProjectA() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Container className={classes.container}>
      <Box display="flex" justifyContent="center" className={classes.box}>
        <Typography variant="h4" color="primary">
          Modificar proyecto
        </Typography>
      </Box>

      <Hidden only="xs">
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs></Grid>
          <Grid item xs>
            <Autocomplete
              className={classes.search}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={projects.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filtrar"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden only={["sm", "md", "lg", "xl"]}>
        <Autocomplete
          className={classes.search}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={projects.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filtrar"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </Hidden>

      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.projectName}</TableCell>
                      <TableCell align="left">{row.projectType}</TableCell>
                      <TableCell align="left">{row.formulatedBy}</TableCell>
                      <TableCell align="left">
                        <CreateIcon />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
