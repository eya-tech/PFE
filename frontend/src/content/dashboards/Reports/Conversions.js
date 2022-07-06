import { useTranslation } from 'react-i18next';
import {
  CardHeader,
  Divider,
  CardContent,
  Card,
  ListItemText,
  List,
  ListItem,
} from '@mui/material';
import Gauge from 'src/components/Gauge';
import { buildStyles } from 'react-circular-progressbar';


function Conversions() {
  const { t } = useTranslation();

  const data = {
    percentage:67,
    sales: "51 %",
    customers: "20 %",
    earnings: "10 %"
  };

  return (
    <Card>
      <CardHeader title={t('Latest scan progression')} />
      <Divider />
      <CardContent>
        <Gauge
          circleRatio={0.65}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 5.7 })}
          value={data.percentage}
          strokeWidth={13}
          text={`${data.percentage}%`}
          color="primary"
          size="xxlarge"
        />

        <List disablePadding dense>
          <ListItem>
            <ListItemText
              primary={t('Compliance')}
              primaryTypographyProps={{
                variant: 'subtitle2',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={data.sales}
              secondaryTypographyProps={{
                variant: 'h3',
                color: 'textPrimary',
                noWrap: true
              }}
            />
          </ListItem>
          <Divider
            sx={{
              my: 1
            }}
          />
          <ListItem>
            <ListItemText
              primary={t('Vulnerabilities')}
              primaryTypographyProps={{
                variant: 'subtitle2',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={data.customers}
              secondaryTypographyProps={{
                variant: 'h3',
                color: 'textPrimary'
              }}
            />
          </ListItem>
          <Divider
            sx={{
              my: 1
            }}
          />
          <ListItem>
            <ListItemText
              primary={t('N / A')}
              primaryTypographyProps={{
                variant: 'subtitle2',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={data.earnings}
              secondaryTypographyProps={{
                variant: 'h3',
                color: 'textPrimary'
              }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Conversions;
