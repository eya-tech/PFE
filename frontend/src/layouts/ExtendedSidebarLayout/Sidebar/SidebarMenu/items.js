// import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
// import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
 
const menuItems = [
  {
    heading: 'General',
    items: [
      // {
        // name: 'Dashboards',
        // icon: SmartToyTwoToneIcon,
        // link: '/extended-sidebar/dashboards',
        // items: [
          {
            name: 'Last Scan Report',
            icon: SmartToyTwoToneIcon,
            link: 'dashboards/reports',
          },
          {
            name: 'Audit Firmware',
            icon: ReceiptTwoToneIcon,
            link: 'dashboards/tasks'
          }
        // ]
      // },
    ]
  },
  {
    heading: 'Management',
    items: [
      // {
      //   name: 'Users',
      //   icon: AssignmentIndTwoToneIcon,
      //   link: '/extended-sidebar/management/users/list',
      // },
      // {
      //   name: 'Projects',
      //   icon: AccountTreeTwoToneIcon,
      //   link: '/extended-sidebar/management/projects/list'
      // },
      {
        name: 'Firmwares',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/management/invoices/list',
      }
    ]
  },
];

export default menuItems;
