import { mock } from 'src/utils/axios';

import { subHours } from 'date-fns';

let invoices = [
  {
    id: '1',
    number: 'Device 5262',
    issuedDate: subHours(new Date(), 18).getTime(),
    dueDate: subHours(new Date(), 15).getTime(),
    clientName: 'Nlounge',
    clientAvatar: '/static/images/avatars/1.jpg',
    progress: 56,
    currency: '%',
    status: 'progress'
  },
  {
    id: '2',
    number: 'Device 6739',
    issuedDate: subHours(new Date(), 21).getTime(),
    dueDate: subHours(new Date(), 18).getTime(),
    clientName: 'Thoughtmix',
    clientAvatar: '/static/images/avatars/2.jpg',
    progress: 0,
    currency: '%',
    status: 'draft'
  },
  {
    id: '3',
    number: 'Device 7849',
    issuedDate: subHours(new Date(), 44).getTime(),
    dueDate: subHours(new Date(), 21).getTime(),
    clientName: 'Oyoba',
    clientAvatar: '/static/images/avatars/3.jpg',
    progress: 21,
    currency: '%',
    status: 'progress'
  },
  {
    id: '4',
    number: 'Device 6839',
    issuedDate: subHours(new Date(), 36).getTime(),
    dueDate: subHours(new Date(), 24).getTime(),
    clientName: 'Twimm',
    clientAvatar: '/static/images/avatars/4.jpg',
    progress: 100,
    currency: '%',
    status: 'completed'
  },
  {
    id: '5',
    number: 'Device 7684',
    issuedDate: subHours(new Date(), 44).getTime(),
    dueDate: subHours(new Date(), 27).getTime(),
    clientName: 'Meembee',
    clientAvatar: '/static/images/avatars/5.jpg',
    progress: 75,
    currency: '%',
    status: 'progress'
  },
  {
    id: '6',
    number: 'Device 7837',
    issuedDate: subHours(new Date(), 65).getTime(),
    dueDate: subHours(new Date(), 32).getTime(),
    clientName: 'Trudoo',
    clientAvatar: '/static/images/avatars/1.jpg',
    progress: 56,
    currency: '%',
    status: 'completed'
  },
  {
    id: '7',
    number: 'Device 6831',
    issuedDate: subHours(new Date(), 44).getTime(),
    dueDate: subHours(new Date(), 35).getTime(),
    clientName: 'Buzzdog',
    clientAvatar: '/static/images/avatars/2.jpg',
    progress: 56,
    currency: '%',
    status: 'draft'
  },
  {
    id: '8',
    number: 'Device 8936',
    issuedDate: subHours(new Date(), 43).getTime(),
    dueDate: subHours(new Date(), 41).getTime(),
    clientName: 'Realcube',
    clientAvatar: '/static/images/avatars/3.jpg',
    progress: 56,
    currency: '%',
    status: 'pending'
  },
  {
    id: '9',
    number: 'Device 9683',
    issuedDate: subHours(new Date(), 76).getTime(),
    dueDate: subHours(new Date(), 51).getTime(),
    clientName: 'Zoomzone',
    clientAvatar: '/static/images/avatars/4.jpg',
    progress: 56,
    currency: '%',
    status: 'draft'
  },
  {
    id: '10',
    number: 'INV 3798',
    issuedDate: subHours(new Date(), 87).getTime(),
    dueDate: subHours(new Date(), 65).getTime(),
    clientName: 'Eabox',
    clientAvatar: '/static/images/avatars/5.jpg',
    progress: 56,
    currency: '%',
    status: 'draft'
  },
  {
    id: '11',
    number: 'Device 8982',
    issuedDate: subHours(new Date(), 78).getTime(),
    dueDate: subHours(new Date(), 76).getTime(),
    clientName: 'Ozu',
    clientAvatar: '/static/images/avatars/1.jpg',
    progress: 56,
    currency: '%',
    status: 'progress'
  },
  {
    id: '12',
    number: 'Device 7891',
    issuedDate: subHours(new Date(), 91).getTime(),
    dueDate: subHours(new Date(), 87).getTime(),
    clientName: 'Fivespan',
    clientAvatar: '/static/images/avatars/2.jpg',
    progress: 56,
    currency: '%',
    status: 'completed'
  },
  {
    id: '13',
    number: 'Device 7982',
    issuedDate: subHours(new Date(), 102).getTime(),
    dueDate: subHours(new Date(), 91).getTime(),
    clientName: 'Twitternation',
    clientAvatar: '/static/images/avatars/3.jpg',
    progress: 56,
    currency: '%',
    status: 'progress'
  },
  {
    id: '14',
    number: 'Device 7092',
    issuedDate: subHours(new Date(), 122).getTime(),
    dueDate: subHours(new Date(), 94).getTime(),
    clientName: 'Rhyzio',
    clientAvatar: '/static/images/avatars/4.jpg',
    progress: 56,
    currency: '%',
    status: 'pending'
  },
  {
    id: '15',
    number: 'Device 5923',
    issuedDate: subHours(new Date(), 196).getTime(),
    dueDate: subHours(new Date(), 99).getTime(),
    clientName: 'Trudeo',
    clientAvatar: '/static/images/avatars/5.jpg',
    progress: 56,
    currency: '%',
    status: 'draft'
  }
];

mock.onGet('/api/invoices').reply(() => {
  return [200, { invoices }];
});

mock.onGet('/api/invoice').reply((config) => {
  const { invoiceId } = config.params;
  const invoice = invoices.find((_invoice) => _invoice.id === invoiceId);

  return [200, { invoice }];
});
