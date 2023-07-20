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
import { DateField } from "@mui/x-date-pickers/DateField";

import dayjs from "dayjs";
import { Typography } from "@mui/material";

NewPdpDate.propTypes = {
  openDateForm: PropTypes.bool,
  handleCloseDateForm: PropTypes.func,
};

export default function NewPdpDate({ openDateForm, handleCloseDateForm }) {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div>
      <Dialog
        open={openDateForm}
        onClose={handleCloseDateForm}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>Add PDP Plan Month.</DialogTitle>
        <DialogContent>
          <Box sx={{ flexGrow: 1, m: 2 }}>
            <Typography variant="h6" component="h2" sx={{ m: 2 }}>
              Previous PDP Evaluations
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              rows={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <DateField
                  label=""
                  value={value}
                  margin="dense"
                  disabled
                  //   onChange={(newValue) => setValue(newValue)}
                  format="LL"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DateField
                  label=""
                  value={value}
                  margin="dense"
                  disabled
                  //   onChange={(newValue) => setValue(newValue)}
                  format="LL"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DateField
                  label=""
                  value={value}
                  margin="dense"
                  disabled
                  //   onChange={(newValue) => setValue(newValue)}
                  format="LL"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DateField
                  label=""
                  value={value}
                  margin="dense"
                  disabled
                  //   onChange={(newValue) => setValue(newValue)}
                  format="LL"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DateField
                  label=""
                  value={value}
                  margin="dense"
                  disabled
                  //   onChange={(newValue) => setValue(newValue)}
                  format="LL"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <DateField
                  label=""
                  value={value}
                  margin="dense"
                  disabled
                  //   onChange={(newValue) => setValue(newValue)}
                  format="LL"
                />
              </Grid>
            </Grid>
            <Typography variant="h6" component="h2" sx={{ m: 2 }}>
              Add New
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              rows={{ xs: 4, sm: 8, md: 12 }}
            >
            </Grid>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <DatePicker
                    sx={{ width: 250, m: 4, alignItem: "center" }}
                    label={"New PDP Evaluation Month"}
                    views={["year", "month", "day"]}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDateForm}>Cancel</Button>
          <Button onClick={handleCloseDateForm}>Add New Merit Action Month</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
