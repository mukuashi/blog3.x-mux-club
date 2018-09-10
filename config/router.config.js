import defaultSettings from './settings.config';

export default [
  // app
  {
    path: defaultSettings.version,
    component: '../layouts',
    Routes: ['src/pages/index'],
    routes: [
      {
        path: `${defaultSettings.version}/media`,
        name: 'Media',
        component: './Media',
      },
    ],
  },
];
