import {
  Grid,
  Button,
  Card,
  Avatar,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import Text from 'src/components/Text';
// import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';


const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        margin: 0 auto;
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        box-shadow: ${theme.colors.shadows.success};
  `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        margin: 0 auto;
        color: ${theme.palette.getContrastText(theme.colors.error.dark)};
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        box-shadow: ${theme.colors.shadows.error};
        animation: pulse 1.2s infinite ease-in-out;

  `
);

function Block1() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card
          sx={{
            p: 3.5,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <AvatarSuccess variant="rounded">
            <AssessmentTwoToneIcon />
          </AvatarSuccess>
          <Typography
            gutterBottom
            sx={{
              pt: 3.5
            }}
            variant="h4"
          >
            Device #H2ko6
          </Typography>
          <Typography variant="subtitle2">
            This device has a{' '}
            <Text color="success">
              <b>regular</b>
            </Text>{' '}
            compliance at the moment.
          </Typography>
          <br/>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.success.main}`,
              border: `${theme.colors.success.main} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                px: 3,
                background: `${theme.colors.success.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.success.dark
                )}`,
                boxShadow: `${theme.colors.shadows.success}`
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
            variant="contained"
            color="success"
          >
            {t('View details')}
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card
          sx={{
            p: 3.5,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <AvatarError variant="rounded">
            <NewReleasesTwoToneIcon /> 
          </AvatarError>
          <Typography
            gutterBottom
            sx={{
              pt: 3.5
            }}
            variant="h4"
          >
            Device #X8kp1
          </Typography>
          <Typography variant="subtitle2">
            This device has a{' '}
            <Text color="error">
              <b>high</b>
            </Text>{' '}
            vulnerabilities.
          </Typography>
          <br/>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.error.main}`,
              border: `${theme.colors.error.main} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                px: 3,
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`,
                boxShadow: `${theme.colors.shadows.error}`
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
            variant="contained"
            color="error"
          >
            {t('View details')}
          </Button>
        </Card>
      </Grid>

    </Grid>
  );
}

export default Block1;
