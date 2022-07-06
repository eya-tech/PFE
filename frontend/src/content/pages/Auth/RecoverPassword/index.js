import { useState, forwardRef } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import {
  Box,
  Card,
  Link,
  TextField,
  Typography,
  Container,
  Alert,
  Slide,
  Dialog,
  Collapse,
  Button,
  Avatar,
  IconButton,
  styled
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

import useRefMounted from 'src/hooks/useRefMounted';
import CloseIcon from '@mui/icons-material/Close';

import { useTranslation } from 'react-i18next';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};
      box-shadow: ${theme.colors.shadows.success};
      top: -${theme.spacing(6)};
      position: absolute;
      left: 50%;
      margin-left: -${theme.spacing(6)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

function RecoverPasswordBasic() {
  const { t } = useTranslation();
  const isMountedRef = useRefMounted();

  const [openAlert, setOpenAlert] = useState(true);

  const [openDialog, setOpenDialog] = useState(false);

 
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Helmet>
        <title>Recover Password</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="sm">
          <br/>
          <br/>
          <Card
            sx={{
              mt: 3,
              p: 4
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  mb: 1
                }}
              >
                {t('Recover Password')}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{
                  mb: 3
                }}
              >
                {t(
                  'Enter the email used for registration to reset your password.'
                )}
              </Typography>
            </Box>

            <Formik
              initialValues={{
                email: 'aya.mhamdi@ensi-uma.tn',
                submit: null
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email(
                    t('The email provided should be a valid email address')
                  )
                  .max(255)
                  .required(t('The email field is required'))
              })}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
              ) => {
                try {
                  console.log(`values.email : ${values.email}`)
                  const res = await axios.post("http://localhost:5000/auth/forgotpassword", { email: values.email});;
                  if (res.data.success) {
                    setStatus({ success: true });
                    setSubmitting(false);
                  }
                  else{
                    throw new Error('something went wrong')
                  }
                  console.log(res)
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
                touched,
                values
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label={t('Email address')}
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />

                  <Button
                    sx={{
                      mt: 3
                    }}
                    color="primary"
                    disabled={Boolean(touched.email && errors.email)}
                    onClick={handleOpenDialog}
                    type="submit"
                    fullWidth
                    size="large"
                    variant="contained"
                  >
                    {t('Send me a new password')}
                  </Button>
                </form>
              )}
            </Formik>
          </Card>
          <Box mt={3} textAlign="right">
            <Typography
              component="span"
              variant="subtitle2"
              color="text.primary"
              fontWeight="bold"
            >
              {t('Want to try to sign in again?')}
            </Typography>{' '}
            <Link component={RouterLink} to="/extended-sidebar">
              <b>Click here</b>
            </Link>
          </Box>
        </Container>
      </MainContent>

      <DialogWrapper
        open={openDialog}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
      >
        <Box
          sx={{
            px: 4,
            pb: 4,
            pt: 10
          }}
        >
          <AvatarSuccess>
            <CheckTwoToneIcon />
          </AvatarSuccess>

          <Collapse in={openAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="info"
            >
              {t(
                'The password reset instructions have been sent to your email'
              )}
            </Alert>
          </Collapse>

          <Typography
            align="center"
            sx={{
              py: 4,
              px: 10
            }}
            variant="h3"
          >
            {t('Check your email for further instructions')}
          </Typography>

          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={handleCloseDialog}
            href="/extended-sidebar"
          >
            {t('Continue to login')}
          </Button>
        </Box>
      </DialogWrapper>
    </>
  );
}

export default RecoverPasswordBasic;
