import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import Authenticated from 'src/components/Authenticated';

import dashboardsRoutes from './dashboards';
import blocksRoutes from './blocks';
import managementRoutes from './management';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

// const Overview = Loader(lazy(() => import('src/content/overview')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);
// const ExtendedSidebarLayout = Loader(
//   lazy(() => import('src/layouts/ExtendedSidebarLayout'))
// );

const baseRoutes = [
  {
    path: '/',
    element:   (<Authenticated>
                <ExtendedSidebarLayout />
               </Authenticated>),
               children: [
                {
                  path: '/',
                  element: <Navigate to="extended-sidebar/dashboards" replace />
                },
                {
                  path: 'extended-sidebar/dashboards',
                  children: dashboardsRoutes
                },
                {
                  path: 'extended-sidebar/blocks',
                  children: blocksRoutes
                },
                {
                  path: 'extended-sidebar/management',
                  children: managementRoutes
                }
              ]
  },
  // {
  //   path: 'extended-sidebar',
  //   element:( <Navigate to="/" replace />),
  //   children: [
  //     {
  //       path: '/',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  {
    path: 'status',
    children: [
      {
        path: '/',
        element: <Navigate to="404" replace />
      },
      {
        path: '',
        element: <Status404 />
      },
      {
        path: '500',
        element: <Status500 />
      },
      {
        path: 'maintenance',
        element: <StatusMaintenance />
      },
      {
        path: 'coming-soon',
        element: <StatusComingSoon />
      }
    ]
  },
  {
    path: '*',
    element: <Status404 />
  }
];

export default baseRoutes;
