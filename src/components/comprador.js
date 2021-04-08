//Dependencies
import React from "react";
import Footer from "./elements/Footer";
import NavBar from "./navBar/NavBar";
import { NavLink } from "react-router-dom";
import "./comprador.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function Comprador() {
  const [openHandle1, setopenHandle1] = React.useState(false);
  const [openHandle2, setopenHandle2] = React.useState(false);
  const [openHandle3, setopenHandle3] = React.useState(false);

  const handleClickopenHandle1 = () => {
    /* istanbul ignore next */
    setopenHandle1(true);
  };

  const handleClose1 = () => {
    /* istanbul ignore next */
    setopenHandle1(false);
  };

  /* istanbul ignore next */
  const handleClickopenHandle2 = () => {
    setopenHandle2(true);
  };
  /* istanbul ignore next */
  const handleClose2 = () => {
    setopenHandle2(false);
  };
  
  /* istanbul ignore next */
  const handleClickopenHandle3 = () => {
    setopenHandle3(true);
  };
  /* istanbul ignore next */
  const handleClose3 = () => {
    setopenHandle3(false);
  };
  
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);


  function createData(name, categoria, ciudad, barrio) {
    return { name, categoria, ciudad, barrio };
  }
/* istanbul ignore next */
  const attributes = [
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
  const rows = [
    createData("Carpintería Osorio", "Carpinteria", "Bogota", "Alamos"),
    createData("Plomeria Sena", "Plomeria", "Bogota", "Ciudadela Colsubsidio"),
    createData("Mecanica Daytona", "Mecanica", "Bogota", "Mirandela"),
    createData("Consulta Medica", "Consultoria médica", "Bogota", "Colina"),
    createData("Expertos Cerrajeros", "Cerrajeria", "Bogota", "Suba Rincon"),
 ];
  return (
    <div className="comprador">
      <div>
        <NavBar />
      </div>
      <div className="comprador-title">
        <h1>BIENVENIDO COMPRADOR</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <ButtonGroup
              size="large"
              aria-label="large outlined primary button group"
            >
              <Button onClick={handleClickopenHandle1}>
                Reclama un servicio
              </Button>
              <Button onClick={handleClickopenHandle2}>
                Comparte tu opinion de un servicio
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
      <div className="itemsdos">
        <p>
          <NavLink
            activeClassName="selected"
            className="nav-link-header"
            to="/"
          >
            Favoritos:
          </NavLink>
        </p>
		{/* Reclamar servicio */}
        <Dialog
          open={openHandle1}
          onClose={handleClose1}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Reclamar un servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para poner un reclamo por tu servicio, por favor ingresa los siguientes datos:
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
            <Button onClick={handleClose1} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClickopenHandle3} color="primary">
              Buscar
            </Button>
          </DialogActions>
        </Dialog>
		{/* Comentar servicio */}
        <Dialog
          open={openHandle2}
          onClose={handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Comentar un servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para comentar tu servicio, por favor buscalo por nombre:
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
            <Button onClick={handleClickopenHandle3} color="primary">
              Buscar
            </Button>
          </DialogActions>
        </Dialog>
		{/* Llenar comentario servicio */}
        <Dialog
          open={openHandle3}
          onClose={handleClose3}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Comentar un servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor cuentanos que salio mal:
            </DialogContentText>
			<TextField
              autoFocus
              margin="dense"
              id="name"
              label="Reclamo"
              type="string"
			  fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClickopenHandle3} color="primary">
              Buscar
            </Button>
          </DialogActions>
        </Dialog>
        <TableContainer>
          <MaterialTable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {attributes.map((column) => (
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
                      {attributes.map((column) => {
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
