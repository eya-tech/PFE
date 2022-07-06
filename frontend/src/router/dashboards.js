import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards 

const Reports = Loader(lazy(() => import('src/content/dashboards/Reports')));
const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));
// const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));

const dashboardsRoutes = [
  {
    path: '/',
    element: <Navigate to="reports" replace />
  },
  {
    path: 'reports',
    element: <Reports /> 
  },
  {
    path: 'tasks',
    element: <Tasks />
  }
];

export default dashboardsRoutes;
