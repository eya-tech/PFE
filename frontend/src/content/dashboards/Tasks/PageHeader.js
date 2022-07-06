import {
  Typography,
  Box,
  styled,
  Avatar,
  lighten,
  alpha,
  linearProgressClasses,
  LinearProgress,
  // useTheme
  // Stack,
  // Divider,
  // useTheme,
  // Card
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PanoramaPhotosphereTwoToneIcon from '@mui/icons-material/PanoramaPhotosphereTwoTone';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.primary.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[10]
          : theme.colors.alpha.white[50]
      };
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? `0 1px 0 ${alpha(
              lighten(theme.colors.primary.main, 0.8),
              0.2
            )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)`
          : `0px 2px 4px -3px ${alpha(
              theme.colors.alpha.black[100],
              0.4
            )}, 0px 5px 16px -4px ${alpha(theme.colors.alpha.black[100], 0.2)}`
      };
`
);

// const DotLegend = styled('span')(
//   ({ theme }) => `
//     border-radius: 22px;
//     width: ${theme.spacing(1.8)};
//     height: ${theme.spacing(1.8)};
//     display: inline-block;
//     margin-right: ${theme.spacing(0.8)};
//     border: ${theme.colors.alpha.white[100]} solid 2px;
// `
// );

function PageHeader() {
  const { t } = useTranslation();
  // const theme = useTheme();
  // const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" >
        <AvatarPageTitle variant="rounded">
          <PanoramaPhotosphereTwoToneIcon fontSize="large" />
        </AvatarPageTitle>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Auditing Firmware Progress')}
          </Typography>
          <Box
            sx={{
              width: 1000
            }}
          >
                  <LinearProgressPrimary
                    variant="determinate"
                    value={60}
                  />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageHeader;
