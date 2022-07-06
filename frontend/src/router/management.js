import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Management

const Users = Loader(lazy(() => import('src/content/management/Users')));
const SingleUser = Loader(
  lazy(() => import('src/content/management/Users/single'))
);
const Projects = Loader(lazy(() => import('src/content/management/Projects')));
const Invoices = Loader(lazy(() => import('src/content/management/Invoices')));
const SingleInvoice = Loader(
  lazy(() => import('src/content/management/Invoices/single'))
);

const managementRoutes = [
  {
    path: '/',
    element: <Navigate to="users" replace />
  },
  {
    path: 'users',
    children: [
      {
        path: '/',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Users />
      },
      {
        path: 'single',
        children: [
          {
            path: '/',
            element: <Navigate to="1" replace />
          },
          {
            path: ':userId',
            element: <SingleUser />
          }
        ]
      }
    ]
  },
  {
    path: 'projects',
    children: [
      {
        path: '/',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Projects />
      }
    ]
  },
  {
    path: 'invoices',
    children: [
      {
        path: '/',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Invoices />
      },
      {
        path: 'single',
        children: [
          {
            path: '/',
            element: <Navigate to="1" replace />
          },
          {
            path: ':invoiceId',
            element: <SingleInvoice />
          }
        ]
      }
    ]
  }
];

export default managementRoutes;
