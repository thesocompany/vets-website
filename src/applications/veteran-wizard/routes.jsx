import AppDemoRoot from './containers/AppDemoRoot';
// import FacilityDetail from './containers/FacilityDetail';
// import ProviderDetail from './containers/ProviderDetail';
// import VAMap from './containers/VAMap';
// import { ccLocatorEnabled } from './config';

// TODO: Remove feature flag when ready to go live
// const childRoutes = ccLocatorEnabled()
//   ? [
//       { path: 'facility/:id', component: FacilityDetail },
//       { path: 'provider/:id', component: ProviderDetail },
//     ]
//   : [{ path: 'facility/:id', component: FacilityDetail }];

const routes = {
  path: '/',
  component: AppDemoRoot,
  // childRoutes: [
  //   {
  //     indexRoute: { component: VAMap },
  //     childRoutes,
  //   },
  // ],
};

export default routes;
