import { useRef } from 'react';
import useAuth from 'src/hooks/useAuth';

import {
  Avatar,
  IconButton,
  styled,
  Tooltip
} from '@mui/material';

const UserBoxButton = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  padding: 0;
  height: ${theme.spacing(4)};
  margin-left: ${theme.spacing(1)};
  border-radius: ${theme.general.borderRadiusLg};
  
  &:hover {
    background: ${theme.colors.primary.main};
  }
`
);

const UserAvatar = styled(Avatar)(
  ({ theme }) => `
        height: 90%;
        width: 90%;
        border-radius: ${theme.general.borderRadiusLg};
`
);

function HeaderUserbox() {
  // const theme = useTheme();


  const { user } = useAuth();

  const ref = useRef(null);

  return (
    <>
    <Tooltip arrow title={`${user.firstname} ${user.lastname}`}>
      <UserBoxButton color="primary" ref={ref}>
        <UserAvatar alt={`${user.firstname} ${user.lastname}`} src={user.avatar} />
      </UserBoxButton>
    </Tooltip>
    </>
  );
}

export default HeaderUserbox;
