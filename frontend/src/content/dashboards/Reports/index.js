import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';

import { Grid } from '@mui/material';

// import Conversions from './Conversions';
import AllExpenses from './AllExpenses';

import PageHeader from './PageHeader';
// import Block5 from './Block5';
import Block12 from './Block12';
import Block2 from './Block2';
// import Block9 from './Block9';
import Block7 from './Block7';



function DashboardReports() {
  return (
    <> 
      <Helmet>
        <title>Reports Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={0}
      >
        {/* <Grid item md={6} xs={12} lg={6}>
          <Conversions />
        </Grid> */}
        <Grid item md={4} xs={12} lg={6}>
          <Block7 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block2 />
        </Grid>

      </Grid>
      <br/>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="left"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item md={6} lg={6} xs={12}>
          <AllExpenses />
        </Grid>
        <Grid item md={6} xs={12} lg={6}>
          <Block12 />
        </Grid>
      </Grid>

      <br/>
      <br/>

      {/* <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      > 
        <Grid item xs={12}>
          <Block2 />
        </Grid>

      </Grid>
      
       */}
      {/* <Grid
        container
        sx={{
          px: 4
        }} 
        direction="row"
        justifyContent="right"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block12 />
        </Grid>
      </Grid> */}

    </>
  );
}

export default DashboardReports;
