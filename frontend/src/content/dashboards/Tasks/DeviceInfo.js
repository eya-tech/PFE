import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

import * as Yup from 'yup';

import { Formik } from 'formik';

export default function FormDialog({setDeviceInfo}) {
    const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} >
        <DialogTitle>Device Information</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color: 'orange'}}>
            To audit your device please make sure to fill in this form carefully !
          </DialogContentText>
          <Formik
            initialValues={{
                name:"aaa",
                type:"aaa",
                manufacturer:"aaa",
                version:"aaa",
                submit: null
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                        .max(255)
                        .required('The name field is required'),
                type: Yup.string()
                        .max(255)
                        .required('The type field is required'),
                manufacturer: Yup.string()
                        .max(255)
                        .required('The manufacturer field is required'),
                version: Yup.string()
                        .max(255)
                        .required('The version field is required'),
            })}
            onSubmit={async(values,{  setStatus, setSubmitting})=> {
                if(values){
                    setStatus({ success: true });
                    await setDeviceInfo(values)
                    // console.log(deviceInfo.name)
                    setSubmitting(false);
                    handleClose()
                }else{
                    setStatus({ success: false });
                    setSubmitting(false);
                }
            }}
            >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
            }) => (
         <form onSubmit={handleSubmit}>
          <TextField
            // autoFocus
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            margin="dense"
            id="name"
            label="Device Name"
            type="text"
            fullWidth
            variant="standard"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}

          />
         <TextField
            // autoFocus
            error={Boolean(touched.type && errors.type)}
            helperText={touched.type && errors.type}
            margin="dense"
            id="type"
            label="Device Type"
            type="text"
            fullWidth
            variant="standard"
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <TextField
            // autoFocus
            error={Boolean(touched.manufacturer && errors.manufacturer)}
            helperText={touched.manufacturer && errors.manufacturer}
            margin="dense"
            id="manufacturer"
            label="Device Manufacturer"
            type="text"
            fullWidth
            variant="standard"
            value={values.manufacturer}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <TextField
            // autoFocus
            error={Boolean(touched.version && errors.version)}
            helperText={touched.version && errors.version}
            margin="dense"
            id="version"
            label="Device Version"
            type="text"
            fullWidth
            variant="standard"
            value={values.version}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        <DialogActions>
          <Button onClick={handleClose}>
            <Link component={RouterLink} to="/extended-sidebar">
              <b>Cancel</b>
            </Link>
          </Button>
          <Button 
            onClick={handleSubmit}
            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
            disabled={isSubmitting}
          ><b>Save</b></Button>
        </DialogActions>
          </form>
            )}
        </Formik>
        </DialogContent>

      </Dialog>
    </div>
  );
}