import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

PDPFormDialog.propTypes = {
  openForm: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default function PDPFormDialog({ openForm, handleClose }) {
  return (
    <div>
      <Dialog
        open={openForm}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle sx={{ m: 2 }}>
          Please Fill in the employee details.
        </DialogTitle>
        <DialogContent>
          <Box sx={{ flexGrow: 1, m: 2 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              rows={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="outlined-number"
                  label="Employee No."
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Employee Name"
                  // fullWidth
                  // variant="standard"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Date" sx={{ width: 200 }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Box sx={{ width: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Proponent Departmen
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Proponent Department"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>HR Department</MenuItem>
                      <MenuItem value={20}>Finance Department</MenuItem>
                      <MenuItem value={30}>Engineering Department</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Current Job Title"
                  // type="email"
                  // fullWidth
                  // variant="standard"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Target Job Title"
                  // type="email"
                  // fullWidth
                  // variant="standard"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DatePicker
                  sx={{ width: 200 }}
                  label={"Service Date"}
                  views={["year", "month", "day"]}
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DatePicker
                  sx={{ width: 200 }}
                  label={"PDP Start Date"}
                  views={["year", "month", "day"]}
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DatePicker
                  sx={{ width: 200 }}
                  label={"PDP End Date"}
                  views={["year", "month", "day"]}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add New PDP</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
