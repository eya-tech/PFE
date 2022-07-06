import {
    Box,
    Card,
    Typography,
    Container,
    styled,
    Button,
    FormHelperText,
    TextField,
    Link,
    CircularProgress
  } from '@mui/material';
  import axios from 'axios'
  
  import { Helmet } from 'react-helmet-async';
  import * as Yup from 'yup';

  import { Formik } from 'formik';
  import { Link as RouterLink } from 'react-router-dom';

  import useRefMounted from 'src/hooks/useRefMounted';
  
  
  
  const MainContent = styled(Box)(
    () => `
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
  `
  );
  
  const TopWrapper = styled(Box)(
    () => `
    display: flex;
    width: 100%;
    flex: 1;
    padding: 20px;
  `
  );
  
  function ChangePas() {
    // const { method } = useAuth();
    const isMountedRef = useRefMounted();
    console.log(window.location.href.split("/").slice(-1)[0])
  
    return (
      <>
        <Helmet>
          <title>reset password</title>
        </Helmet>
        <MainContent>
          <TopWrapper>
            <Container maxWidth="sm">
              <br/>
              <br/>
              <br/>
              <Card
                sx={{
                  mt: 3,
                  px: 4,
                  pt: 5,
                  pb: 3
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 1
                    }}
                  >
                    Create new password
                  </Typography>
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    fontWeight="normal"
                    sx={{
                      mb: 3
                    }}
                  >
                    Fill in the fields below to change  your password.
                  </Typography>
                </Box>
                <Formik
                    initialValues={{
                        password: '',
                        confirm_password: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        password: Yup.string()
                        .max(255)
                        .required('The password field is required')
                        .matches(
                            // eslint-disable-next-line no-useless-escape
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                          ),
                        confirm_password: Yup.string()
                        .max(255)
                        .required('The confirm ppassword field is required')
                        .oneOf([Yup.ref("password"), null], "Passwords must match")
                    })}
                    onSubmit={async (values, { 
                        setErrors, 
                        resetForm,
                        setStatus, 
                        setSubmitting }) => {
                        try {
                        const res = await axios.post(`http://localhost:5000/auth/changepass/${window.location.href.split("/").slice(-1)[0]}`,
                                                     { password:values.password });

                        if (res.data.success) {
                            resetForm();
                            setStatus({ success: true });
                            setSubmitting(false);
                        }else{
                            throw new Error("something went wrong")
                        }
                        } catch (err) {
                        console.error(err);
                        if (isMountedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
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
                        <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            error={Boolean(touched.password && errors.password)}
                            fullWidth
                            margin="normal"
                            autoFocus
                            helperText={touched.password && errors.password}
                            label='Password'
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(touched.confirm_password && errors.confirm_password)}
                            fullWidth
                            margin="normal"
                            helperText={touched.confirm_password && errors.confirm_password}
                            label='Confirm Password'
                            name="confirm_password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.confirm_password}
                            variant="outlined"
                        />
                        <Box
                            alignItems="center"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Link component={RouterLink} to="/extended-sidebar">
                            <b>continue to login !</b>
                            </Link>
                        </Box>

                        {Boolean(touched.terms && errors.terms) && (
                            <FormHelperText error>{errors.terms}</FormHelperText>
                        )}

                        <Button
                            sx={{
                            mt: 3
                            }}
                            color="primary"
                            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                            disabled={isSubmitting}
                            type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                        >
                            Confirm changes
                        </Button>
                        </form>
                    )}
                    </Formik>
  
              </Card>
            </Container>
          </TopWrapper>
        </MainContent>
      </>
    );
  }
  
  export default ChangePas;
  