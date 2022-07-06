import { Suspense, lazy } from 'react';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Guest from 'src/components/Guest';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Account

const LoginCover = Loader(
  lazy(() => import('src/content/pages/Auth/Login/Cover'))
);
const LoginBasic = Loader(
  lazy(() => import('src/content/pages/Auth/Login/Basic'))
);

const RecoverPassword = Loader(
  lazy(() => import('src/content/pages/Auth/RecoverPassword'))
);
const CreateNewPassword = Loader(
  lazy(() => import('src/content/pages/Auth/CreateNewPass'))
);

const accountRoutes = [
  {
    path: 'login',
    element: (
      <Guest>
        <LoginBasic />
      </Guest>
    )
  },
  {
    path: 'login-basic',
    element: <LoginBasic />
  },
  {
    path: 'login-cover',
    element: <LoginCover />
  },
  {
    path: 'recover-password',
    element: <RecoverPassword />
  },
  {
    path: 'create-new-password/:token',
    element: <CreateNewPassword />
  }
];

export default accountRoutes;
