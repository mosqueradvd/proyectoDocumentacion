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
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";

function createData(id, names, organization, rol, ver) {
  return { id, names, organization, rol, ver };
}

//datos quemados search
const organizations = [
  { title: "Montaña de fuego" },
  { title: "Modep" },
  { title: "Polo" },
  { title: "Tierra de todos" },
  { title: "udenar" },
];

const rows = [
  createData(1, "Lennin Ibarra", "udenar", "Administrador"),
  createData(2, "Valentina Martinez", "Montaña de Fuego", "Administrador"),
  createData(3, "Deisy Rosero", "Tierra de todos", "Administrador"),
  createData(4, "Marta Melo", "Modep", "Administrador"),
  createData(5, "Diego Ojeda", "udenar", "Operador"),
  createData(6, "Leidy Burbano", "Polo", "Administrador"),
  createData(7, "Ciro Meneses", "udenar", "Administrador"),
  createData(8, "Hilda Gonzalez", "udenar", "Administrador"),
  createData(9, "Marta Melo", "Modep", "Administrador"),
  createData(10, "Diego Ojeda", "udenar", "Operador"),
  createData(11, "Leidy Burbano", "Polo", "Administrador"),
  createData(12, "Ciro Meneses", "udenar", "Administrador"),
  createData(13, "Hilda Gonzalez", "udenar", "Administrador"),
  createData(14, "Lennin Ibarra", "udenar", "Administrador"),
  createData(15, "Valentina Martinez", "Montaña de Fuego", "Administrador"),
  createData(16, "Deisy Rosero", "Tierra de todos", "Administrador"),
  createData(17, "Marta Melo", "Modep", "Administrador"),
  createData(18, "Diego Ojeda", "udenar", "Operador"),
  createData(19, "Leidy Burbano", "Polo", "Administrador"),
  createData(20, "Ciro Meneses", "udenar", "Administrador"),
  createData(21, "Hilda Gonzalez", "udenar", "Administrador"),
  createData(22, "Marta Melo", "Modep", "Administrador"),
  createData(23, "Diego Ojeda", "udenar", "Operador"),
  createData(24, "Leidy Burbano", "Polo", "Administrador"),
  createData(25, "Ciro Meneses", "udenar", "Administrador"),
  createData(26, "Hilda Gonzalez", "udenar", "Administrador"),
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
  { id: "names", numeric: false, label: "Nombres y apellidos" },
  { id: "organization", numeric: false, label: "Organización" },
  { id: "rol", numeric: false, label: "Rol" },
  { id: "ver", numeric: false, label: "Ver" },
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

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

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

export default function ComponentListUsers() {
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
          Listar usuarios
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
              options={organizations.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Buscar organización"
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
          options={organizations.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar organización"
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
                      <TableCell align="left">{row.names}</TableCell>
                      <TableCell align="left">{row.organization}</TableCell>
                      <TableCell align="left">{row.rol}</TableCell>
                      <TableCell align="left">
                        <SearchIcon />
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
