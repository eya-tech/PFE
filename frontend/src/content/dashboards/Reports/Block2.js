import {
  Box,
  Grid,
  Button,
  Card,
  Avatar,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import GaugeChart from 'react-gauge-chart';
import Text from 'src/components/Text';
// import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 12;
  `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        margin: 0 auto;
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
        box-shadow: ${theme.colors.shadows.success};
  `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        margin: 0 auto;
        color: ${theme.palette.getContrastText(theme.colors.error.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
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
          <CardActions display="flex" alignItems="center">
            <Label color="success">90%</Label>
          </CardActions>
          <AvatarSuccess variant="rounded">
            <AssessmentTwoToneIcon />
          </AvatarSuccess>
          <Typography
            gutterBottom
            sx={{
              pt: 3.5
            }}
            variant="h2"
          >
            Firmware #857
          </Typography>
          <Typography variant="subtitle2">
            This firmware has a{' '}
            <Text color="success">
              <b>regular</b>
            </Text>{' '}
            compliance at the moment.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: 3,
              mb: 0.5,
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              hideText
              nrOfLevels={6}
              colors={[
                theme.colors.error.main,
                theme.colors.warning.main,
                theme.colors.success.main
              ]}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              arcWidth={0.3}
              percent={0.27}
            />
          </Box>
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
          <CardActions display="flex" alignItems="center">
            <Label color="warning">36%</Label>
          </CardActions>
          <AvatarError variant="rounded">
            <NewReleasesTwoToneIcon /> 
          </AvatarError>
          <Typography
            gutterBottom
            sx={{
              pt: 3.5
            }}
            variant="h2"
          >
            Firmware #857
          </Typography>
          <Typography variant="subtitle2">
            This firmware has a{' '}
            <Text color="error">
              <b>high</b>
            </Text>{' '}
            vulnerabilities .
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: 3,
              mb: 0.5,
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              hideText
              nrOfLevels={6}
              colors={[theme.colors.error.lighter, theme.colors.error.main]}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              arcWidth={0.3}
              percent={0.86}
            />
          </Box>
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
