import Authenticated from 'src/components/Authenticated';
import { Navigate } from 'react-router-dom';

import BaseLayout from 'src/layouts/BaseLayout';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import dashboardsRoutes from './dashboards';
import blocksRoutes from './blocks';
import managementRoutes from './management';
import accountRoutes from './account';
import baseRoutes from './base';

const router = [
  {
    path: 'account',
    children: accountRoutes
  },
  {
    path: '*',
    element: <BaseLayout />,
    children: baseRoutes
  },

  // Extended Sidebar Layout

  {
    path: 'extended-sidebar',
    element: (
      <Authenticated>
        <ExtendedSidebarLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="dashboards" replace />
      },
      {
        path: 'dashboards',
        children: dashboardsRoutes
      },
      {
        path: 'blocks',
        children: blocksRoutes
      },
      {
        path: 'management',
        children: managementRoutes
      }
    ]
  },


];

export default router;
