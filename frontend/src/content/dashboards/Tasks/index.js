import { useEffect,useCallback,useState } from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';

import { Helmet } from 'react-helmet-async';
import {
  Grid,
 // Divider,
  Card,
  Box,
  useTheme,
} from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import DeviceInfo from './DeviceInfo';

// import TeamOverview from './TeamOverview';
// import TasksAnalytics from './TasksAnalytics';
// import Performance from './Performance';
// import Checklist from './Checklist';
import Stepper from './Stepper';



function DashboardTasks() {
  const theme = useTheme();
  const isMountedRef = useRefMounted();
  const [tests, setTests] = useState([]);
  const [cr, setCr] = useState([]);
  const [fr, setFr] = useState([]);
  const [deviceInfo, setDeviceInfo] = useState({
    name:"Device name",
    type:"Device type",
    manufacturer:"Device manufacturer",
    version:"Device version"
  });

  const getTests = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/tests');
      if (isMountedRef.current) {
        setTests(response.data.tests);
        // console.log(tests)
         
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]); 
  const getCr = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/commun_requirements');
      if (isMountedRef.current) {
        setCr(response.data.commun_requirements);
        // console.log(cr)
        
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);
  const getFr = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/foundational_requirements');
      if (isMountedRef.current) {
        setFr(response.data.foundational_requirements);
        // console.log(fr)
        
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getTests();
    getCr()
    getFr()
  }, []);


   

  return (
    <>
      <Helmet>
        <title>Auditing firmware</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Card
        variant="outlined"
        sx={{
          mx: 4
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={0}

        >
            <>
              <Grid item xs={12} >
                {/* <Box
                  sx={{
                    background: `${theme.colors.alpha.white[5]}`
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={6} lg={12}> */}
                      <Box
                        p={4}
                        sx={{
                          background: `${theme.colors.alpha.white[70]}`
                        }}
                      >
                        {/* <Checklist /> */}
                        <Grid
                            item
                            xs={12}
                            lg={12}
                            md={10}
                            sx={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                        <DeviceInfo setDeviceInfo={setDeviceInfo} />
                        
                        <Stepper fr={fr} cr={cr} tests={tests} deviceInfo={deviceInfo}/>
                        </Grid>
                      </Box>
                    {/* </Grid>
                  </Grid>
                </Box> */}
              </Grid>
            </>

        </Grid>
      </Card>
      <br/>
      <br/>
    </>
  );
}

export default DashboardTasks;
