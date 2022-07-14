import {
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';


function Block12() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{
          p: 3
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Latest issues')}
          </Typography>
        }
      />
      <Divider />
      <List
        sx={{
          py: 0
        }}
      >
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 2
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <BugReportTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`,
                color: `${theme.colors.error.main}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Public key infrastructure certificates')}</Typography>}
            secondary={
              <Typography noWrap variant="subtitle2">
                {t('Uses of weak public key authentication')}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 2
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <BugReportTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`,
                color: `${theme.colors.error.main}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Software process and device identification and authentication')}</Typography>}
            secondary={
              <Typography noWrap variant="subtitle2">
                {t('Lack of software processes authentication when accessing APIs.')}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 2
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <BugReportTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`,
                color: `${theme.colors.error.main}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Human user identification and authentication')}</Typography>}
            secondary={
              <Typography noWrap variant="subtitle2">
                {t('Absence of user identity security')}
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default Block12;
