import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  styled,
  Divider,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';


const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.main)};
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        box-shadow: ${theme.colors.shadows.primary};
        top: -${theme.spacing(1)};
        position: absolute;
        left: 20%;
        margin-left: -${theme.spacing(4.5)};
  `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        color:  ${theme.palette.primary.contrastText};
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        box-shadow: ${theme.colors.shadows.error};
        top: -${theme.spacing(1)};
        position: absolute;
        left: 20%;
        margin-left: -${theme.spacing(4.5)};
  `
);

function Block7() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={5} >
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 2.5,
            pb: 2,
            mt: 4.5,
          }}
        >
          <AvatarPrimary variant="rounded">
            <SubscriptionsTwoToneIcon fontSize="large" />
          </AvatarPrimary>
          <Box px={3.5} pt={3}>
            <Typography
              textAlign="center"
              variant="h1"
              sx={{
                mb: 1,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              19
            </Typography>
            <Typography
              textAlign="center"
              variant="subtitle2"
              sx={{
                mb: 3,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t('Total Firmwares')}
            </Typography>
            <Divider
              sx={{
                mb: 2
              }}
            />
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'uppercase',
                  fontSize: `${theme.typography.pxToRem(12)}`
                }}
                variant="text"
                color="info"
              >
                {t('View firmwares list')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={5.5} ml={3}> 
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 2.5,
            pb: 2,
            mt: 4.5,
          }}
        >
          <AvatarError variant="rounded">
            <BugReportTwoToneIcon fontSize="large" />
          </AvatarError>
          <Box px={3.5} pt={3}>
            <Typography
              textAlign="center"
              variant="h1"
              sx={{
                mb: 1,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              12
            </Typography>
            <Typography
              textAlign="center"
              variant="subtitle2"
              sx={{
                mb: 3,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t('Total Vulnerabilities')}
            </Typography>
            <Divider
              sx={{
                mb: 2
              }}
            />
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'uppercase',
                  fontSize: `${theme.typography.pxToRem(12)}`
                }}
                variant="text"
                color="error"
              >
                {t('View vulnerabilities list')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block7;
