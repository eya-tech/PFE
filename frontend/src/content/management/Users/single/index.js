import { useState, useCallback, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { Box, 
 // Tabs, 
 // Tab, 
  Grid, 
 // styled 
} from '@mui/material';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import axios from 'axios';

import ProfileCover from './ProfileCover';
import EditProfileTab from './EditProfileTab';

// import NotificationsTab from './NotificationsTab';
// import SecurityTab from './SecurityTab';

// const TabsWrapper = styled(Tabs)(
//   () => `
//     .MuiTabs-scrollableX {
//       overflow-x: auto !important;

//       .MuiTabs-indicator {
//         box-shadow: none;
//       }
//     }
// `
// );

function ManagementUsersView() {
  const isMountedRef = useRefMounted();
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  // const [currentTab, setCurrentTab] = useState('edit_profile');

  // const tabs = [
  //   { value: 'edit_profile', label: 'Edit Profile' },
  //   { value: 'security', label: 'Passwords/Security' }
  // ];

  // const handleTabsChange = (_event, value) => {
  //   setCurrentTab(value);
  // };

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/user', {
        params: {
          userId
        }
      });
      if (isMountedRef.current) {
        setUser(response.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userId, isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{user.firstname} {user.lastname} - Profile Details</title>
      </Helmet>
      <Box
        sx={{
          mt: 3
        }}
      >
        <Grid
          sx={{
            px: 4
          }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} md={15}>
            <ProfileCover user={user} />
          </Grid>
          {/* <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid> */}
          <Grid item xs={12}>
            <EditProfileTab />
            {/* {currentTab === 'security' && <SecurityTab />} */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ManagementUsersView;
