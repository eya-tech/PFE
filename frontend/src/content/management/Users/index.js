/* eslint-disable camelcase */
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { Helmet } from 'react-helmet-async';

import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Results from './Results';
import PageHeader from './PageHeader';

function ManagementUsers() {
  const isMountedRef = useRefMounted();
  const [users, setUsers] = useState([]);
  // const [users_reverse, setUsersRev] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const arr =[];
      const response = await axios.get('http://localhost:5000/allusers');
      response.data.users.forEach((user,id)=>{

        user.id = id
        user.name = `${user.firstname} ${user.lastname}`
        user.jobtitle = 'not specified'
        user.username = 'not specified'
        user.description = 'description not specified'
        user.role = user.role || 'user'
        arr.push(user)

      })
      if (isMountedRef.current) {
        setUsers(response.data.users);
        // eslint-disable-next-line camelcase

        // setUsers(users.reverse())
        
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Helmet>
        <title>Users - Management</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader setUsers={setUsers} />
      </PageTitleWrapper>

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
        <Grid item xs={12}>
          <Results users={users} setUsers={setUsers}/>
        </Grid>
      </Grid>
      <br/>
      <br/>
    </>
  );
}

export default ManagementUsers;
