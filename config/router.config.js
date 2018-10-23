import defaultSettings from './settings.config';

export default [
  // app
  {
    path: '',
    component: '../layouts',
    routes: [
      {
        path: '/',
        name: '',
        component: './Home',
      },
      {
        path: `/contact`,
        name: 'Contact',
        component: './Contact',
      },
    ],
  },
];
