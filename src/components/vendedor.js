//Dependencies
import React from "react";
import Footer from "./elements/Footer";
import NavBar from "./navBar/NavBar";
import { NavLink } from "react-router-dom";
import "./vendedor.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

export default function Vendedor() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  
  const handleClickOpen1 = () => {
	/* istanbul ignore next */
    setOpen1(true);
  };
  
  const handleClose1 = () => {
	/* istanbul ignore next */
    setOpen1(false);
  };
  /* istanbul ignore next */
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  /* istanbul ignore next */
  const handleClose2 = () => {
    setOpen2(false);
  };
  /* istanbul ignore next */
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  /* istanbul ignore next */
  const handleClose3 = () => {
    setOpen3(false);
  };
/* istanbul ignore next */
  const columns = [
    { id: "name", label: "Nombre Servicio", minWidth: 170 },
    { id: "categoria", label: "Categoria", minWidth: 100 },
    {
      id: "ciudad",
      label: "Ciudad",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "barrio",
      label: "Barrio",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    }
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
/* istanbul ignore next */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
/* istanbul ignore next */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(name, categoria, ciudad, barrio) {
    return { name, categoria, ciudad, barrio };
  }

  const rows = [
    createData("Carpintería Osorio", "Carpinteria", "Bogota", "Alamos"),
    createData("Plomeria Sena", "Plomeria", "Bogota", "Ciudadela Colsubsidio"),
    createData("Mecanica Daytona", "Mecanica", "Bogota", "Mirandela"),
    createData("Consulta Medica", "Consultoria médica", "Bogota", "Colina"),
    createData("Expertos Cerrajeros", "Cerrajeria", "Bogota", "Suba Rincon"),
    createData(
      "Reparaciones y construcciones",
      "Plomeria",
      "Bogota",
      "Villaluz"
    ),
    createData("Carpinteria Gomez", "Carpinteria", "Bogota", "Villaluz"),
    createData("Carpinteria S.I.", "Carpinteria", "Bogota", "Santa Isabel"),
    createData("DiagnostiYA", "Mecanica", "Bogota", "Florida"),
    createData("Zapateria Restrepo", "Zapateria", "Bogota", "Restrepo"),
    createData("Consulta Medica", "Consultoria médica", "Bogota", "Quirigua"),
    createData(
      "Cerrajeria Bogota",
      "Cerrajeria",
      "Bogota",
      "Villas de Gratamira"
    ),
  ];

  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
  });

  return (
    <div className="vendedor">
      <div>
        <NavBar />
      </div>
      <div className="vendedor-title">
        <h1>BIENVENIDO VENDEDOR</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <ButtonGroup
              size="large"
              aria-label="large outlined primary button group"
            >
              <Button onClick={handleClickOpen1}>Publica un servicio</Button>
			  <Button onClick={handleClickOpen2}>Modifica tu servicio</Button>
			  <Button onClick={handleClickOpen3}>Elimina tu servicio</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        {/* Publicar servicio */}
        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Publicar un servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para publicar tu servicio, por favor ingresa los siguientes datos:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre servicio"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Categoria"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ciudad"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Barrio"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose1} color="primary">
              Publicar
            </Button>
          </DialogActions>
        </Dialog>
		{/* Modificar servicio */}
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Modificar un servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para modificar tu servicio, por favor buscalo por nombre:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre servicio"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Categoria"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose2} color="primary">
              Buscar
            </Button>
          </DialogActions>
        </Dialog>
		{/* Eliminar servicio */}
        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Elimina un servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para eliminar tu servicio, por favor buscalo por nombre:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre servicio"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Categoria"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose3} color="primary">
              Buscar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <h2>Mis Servicios:</h2>
      </div>
      <Paper>
        <TableContainer>
          <MaterialTable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
						/* istanbul ignore next */
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MaterialTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Footer />
    </div>
  );
}
