import { useRef, 
  // useState
 } from 'react';

import {
  alpha,
 // Avatar,
  Badge,
  // Box,
  // Button,
  // Divider,
  IconButton,
  // Tab,
  // Tabs,
  // CardMedia,
  // CardActionArea,
  // AvatarGroup,
  // Card,
  // Popover,
  useTheme,
  styled,
  Tooltip,
  // Typography
} from '@mui/material';
import { 
  // Link as RouterLink, 
  useNavigate } from 'react-router-dom';
// import Scrollbar from 'src/components/Scrollbar';
// import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import Text from 'src/components/Text';

// import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
// import Link from '@mui/material/Link';
// import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
// import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
// import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
// import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';

// import Chart from 'react-apexcharts';

import useAuth from 'src/hooks/useAuth';

// const BoxComposed = styled(Box)(
//   () => `
//   position: relative;
// `
// );

// const BoxComposedContent = styled(Box)(
//   ({ theme }) => `
//   position: relative;
//   z-index: 7;

//   .MuiTypography-root {
//       color: ${theme.palette.primary.contrastText};

//       & + .MuiTypography-root {
//           color: ${alpha(theme.palette.primary.contrastText, 0.7)};
//       }
//   }
  
// `
// );

// const BoxComposedImage = styled(Box)(
//   () => `
//   position: absolute;
//   left: 0;
//   top: 0;
//   z-index: 5;
//   filter: grayscale(80%);
//   background-size: cover;
//   height: 100%;
//   width: 100%;
//   border-radius: inherit;
// `
// );

// const BoxComposedBg = styled(Box)(
//   () => `
//   position: absolute;
//   left: 0;
//   top: 0;
//   z-index: 6;
//   height: 100%;
//   width: 100%;
//   border-radius: inherit;
// `
// );

// const TabsWrapper = styled(Tabs)(
//   ({ theme }) => `
//       overflow: visible !important;

//       .MuiTabs-scroller {
//           overflow: visible !important;
//       }

//       .MuiButtonBase-root {
//           text-transform: uppercase;
//           font-size: ${theme.typography.pxToRem(12)};

//           &:last-child {
//             margin-right: 0;
//           }
//       }
//   `
// );

// const AvatarSuccess = styled(Avatar)(
//   ({ theme }) => `
//       background-color: ${theme.colors.success.lighter};
//       color: ${theme.colors.success.main};
//       width: ${theme.spacing(10)};
//       height: ${theme.spacing(10)};
//       margin: 0 auto ${theme.spacing(2)};

//       .MuiSvgIcon-root {
//         font-size: ${theme.typography.pxToRem(42)};
//       }
// `
// );

// const LabelPrimary = styled(Box)(
//   ({ theme }) => `
//     font-weight: bold;
//     border-radius: ${theme.general.borderRadiusSm};
//     background: ${theme.colors.primary.main};
//     text-transform: uppercase;
//     font-size: ${theme.typography.pxToRem(10)};
//     padding: ${theme.spacing(0.5, 1.5)};
//     color: ${theme.palette.primary.contrastText};
// `
// );

// const DividerVertialPrimary = styled(Box)(
//   ({ theme }) => `
//   height: 60%;
//   width: 6px;
//   left: -3px;
//   border-radius: 50px;
//   position: absolute;
//   top: 20%;
//   background: ${theme.colors.primary.main};
// `
// );

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);

function HeaderNotifications() {
  const ref = useRef(null);
  // const [isOpen, setOpen] = useState(false);
  const theme = useTheme();

  const { logout } = useAuth();
  const navigate = useNavigate();

  // const [currentTab, setCurrentTab] = useState('timeline');

  // const tabs = [
  //   { value: 'timeline', label: t('Timeline') },
  //   { value: 'tasks', label: t('Tasks') },
  //   { value: 'reports', label: t('Reports') }
  // ];

  // const handleTabsChange = (_event, value) => {
  //   setCurrentTab(value);
  // };

  // // const handleOpen = () => {
  // //   setOpen(true);
  // // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  // const chartOptions = {
  //   chart: {
  //     background: 'transparent',
  //     toolbar: {
  //       show: false
  //     },
  //     zoom: {
  //       enabled: false
  //     },
  //     sparkline: {
  //       enabled: true
  //     },
  //     stacked: true
  //   },
  //   dataLabels: {
  //     enabled: true
  //   },
  //   plotOptions: {
  //     bar: {
  //       borderRadius: 8,
  //       horizontal: false,
  //       columnWidth: '65%'
  //     }
  //   },
  //   stroke: {
  //     show: false,
  //     width: 0,
  //     colors: ['transparent']
  //   },
  //   theme: {
  //     mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
  //   },
  //   colors: [theme.colors.secondary.light, theme.colors.secondary.dark],
  //   fill: {
  //     opacity: 1
  //   },
  //   labels: [
  //     'Monday',
  //     'Tuesday',
  //     'Wednesday',
  //     'Thursday',
  //     'Friday',
  //     'Saturday',
  //     'Sunday',
  //     'Last week',
  //     'Last month',
  //     'Last year',
  //     'Last quarter'
  //   ],
  //   legend: {
  //     show: false
  //   },
  //   tooltip: {
  //     fixed: {
  //       enabled: true
  //     },
  //     x: {
  //       show: true
  //     },
  //     marker: {
  //       show: true
  //     }
  //   }
  // };
  // const chartData = [
  //   {
  //     name: 'Net Profit',
  //     data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
  //   },
  //   {
  //     name: 'Net Loss',
  //     data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
  //   }
  // ];

  return (
    <>
      <Tooltip arrow title='Log out'>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '.MuiBadge-badge': {
              background: theme.colors.error.main,
              animation: 'pulse 1s infinite',
              transition: `${theme.transitions.create(['all'])}`
            }
          }}
        >
          <IconButtonWrapper
            sx={{
              background: alpha(theme.colors.primary.main, 0.1),
              transition: `${theme.transitions.create(['background'])}`,
              color: theme.colors.primary.main,

              '&:hover': {
                background: alpha(theme.colors.primary.main, 0.2)
              }
            }}
            color="primary"
            ref={ref}
            onClick={handleLogout}
          >
            <PowerSettingsNewTwoToneIcon fontSize="small" />
          </IconButtonWrapper>
        </Badge>
      </Tooltip>
    </>
  );
}

export default HeaderNotifications;
