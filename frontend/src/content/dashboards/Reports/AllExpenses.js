import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Grid,
  Box,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function AllExpenses() {
  const { t } = useTranslation();
  const theme = useTheme();



  const expenses = {
    datasets: [
      {
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.error.main,
          theme.palette.secondary.main
        ]
      }
    ],
    labels: [
      t('Compliance'),
      t('Vulnerabilities'),
      t('N/A')
    ]
  };

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%'
        }
      }
    },
    colors: [
      theme.palette.success.main,
      theme.palette.error.main,
      theme.palette.secondary.main
    ],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val}%`;
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: expenses.labels,
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [60, 25, 15];

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        title={t('Last scan compliance statement')}
      />
      <CardContent>
        <Divider
          sx={{
            mb: 3
          }}
        />

        <Grid pt={3} container spacing={5}>
          <Grid
            md={6}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Chart
              height={218}
              options={chartOptions}
              series={chartSeries}
              type="donut"
            />
          </Grid>
          <Grid md={6} item display="flex" alignItems="center">
            <Box>
              {expenses.labels.map((label, i) => (
                <Typography
                  key={label}
                  variant="body2"
                  sx={{
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    mr: 2
                  }}
                >
                  <DotLegend
                    style={{
                      background: `${expenses.datasets[0].backgroundColor[i]}`
                    }}
                  />
                  <span
                    style={{
                      paddingRight: 6,
                      fontSize: `${theme.typography.pxToRem(11)}`,
                      color: `${expenses.datasets[0].backgroundColor[i]}`
                    }}
                  >
                    {chartSeries[i]}%
                  </span>
                  {label}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AllExpenses;
