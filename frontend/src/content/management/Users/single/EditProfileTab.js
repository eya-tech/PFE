import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios'


import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  ListItem,
  List,
  ListItemText,
  Switch,
  // Modal,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField


} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
// import ChangePassword from "src/content/pages/Auth/change-password";


function EditProfileTab() {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleChangeOpen = () => {
    setOpen(true);
  };

  const handleChangeClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Security</Typography>
          <Typography variant="subtitle2">
            Change your security preferences below
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem
              sx={{
                p: 3
              }}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary='Change Password'
                secondary='You can change your password here'
              />
              <Button size="large" 
                variant="outlined"
                onClick={handleChangeOpen}
              >
                Change password
              </Button>
             {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <ChangePassword />
                </Box>
             </Modal> */}
             <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleChangeClose}
              >
                <DialogTitle
                  sx={{
                    p: 3
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    Change Password
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill in the fields below to change your password.
                  </Typography>
                </DialogTitle>
                <Formik
                  initialValues={{
                    old_password: '',
                    password: '',
                    confirm_password: '',
                    submit: null
                  }}
                  validationSchema={Yup.object().shape({
                    old_password: Yup.string()
                                .max(255)
                                .required('The old password field is required'),
                    password: Yup.string()
                                .max(255)
                                .required('The new password field is required')
                                .matches(
                                    // eslint-disable-next-line no-useless-escape
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                                  ),
                    confirm_password: Yup.string()
                                .max(255)
                                .required('The confirm password field is required')
                                .oneOf([Yup.ref("password"), null], "Passwords must match")
                  })}
                  onSubmit={async (
                    _values,
                    { resetForm, setErrors, setStatus, setSubmitting }
                  ) => {
                    try {
                      // await wait(1000);
                      // console.log(_values)              
                      const res = await axios.post('http://localhost:5000/auth/adduser',_values)
                      if (res.data.success) {

                        resetForm();
                        setStatus({ success: true });
                        setSubmitting(false);
                        
                      }else {
                        throw new Error('something went wrong')
                      }
                    } catch (err) {
                      console.error(err);
                      setStatus({ success: false });
                      setErrors({ submit: err.message });
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
                      <DialogContent
                        dividers
                        sx={{
                          p: 3
                        }}
                      >
                        <Grid container >
                          <Grid item xs={12}>
                            <Grid container spacing={3}>
                              <Grid item xs={12}>
                                <TextField
                                  error={Boolean(
                                    touched.old_password && errors.old_password
                                  )}
                                  fullWidth
                                  helperText={touched.old_password && errors.old_password}
                                  label='Old Password'
                                  name="old_password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  type="password"
                                  value={values.old_password}
                                  variant="outlined"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  error={Boolean(touched.password && errors.password)}
                                  fullWidth
                                  helperText={touched.password && errors.password}
                                  label='New Password'
                                  name="password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  type="password"
                                  value={values.password}
                                  variant="outlined"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  error={Boolean(touched.confirm_password && errors.confirm_password)}
                                  fullWidth
                                  helperText={touched.confirm_password && errors.confirm_password}
                                  label='Confirm New Password'
                                  name="confirm_password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  type="password"
                                  value={values.confirm_password}
                                  variant="outlined"
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          p: 3
                        }}
                      >
                        <Button color="secondary" onClick={handleChangeClose}>
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          startIcon={
                            isSubmitting ? <CircularProgress size="1rem" /> : null
                          }
                          disabled={Boolean(errors.submit) || isSubmitting}
                          variant="contained"
                        >
                          Save Changes
                        </Button>
                      </DialogActions>
                    </form>
                  )}
                </Formik>
              </Dialog>

            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                p: 3
              }}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary='Two-Factor Authentication'
                secondary='Enable PIN verification for all sign in attempts'
              />
              <Switch color="primary" />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="subtitle2">
                Manage informations related to your personal details
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Firstname :
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>Eya</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Lastname :
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>Mhamdi</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Address :
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box
                    sx={{
                      maxWidth: { xs: 'auto', sm: 300 }
                    }}
                  >
                    <Text color="black">
                      1749 High Meadow Lane, SEQUOIA NATIONAL PARK,
                      93262
                    </Text>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Email Addresses
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your associated email addresses
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID :
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>example@demo.com</b>
                  </Text>
                  <Box pl={1} component="span">
                    <Label color="success">Primary</Label>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID :
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>demo@example.com</b>
                  </Text>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>


    </Grid>
    <br /><br />
    </>
  );
}

export default EditProfileTab;
