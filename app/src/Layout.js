import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';
import Helmet from 'react-helmet';
import Header from './global/header';
import Footer from './global/footer';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
//import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/theme.css';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

const GlobalHeader = withTranslation()(Header);
const GlobalFooter = withTranslation()(Footer);

const Layout = ({ route }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page Title'}
      </title>
    </Helmet>
    <VisitorIdentification />
    <main className="main">
      <GlobalHeader />
      <div className="container" style={ {minHeight: '500px'}}>
        <Placeholder name="jss-main" rendering={route} />
      </div>
      <GlobalFooter />
    </main>
  </React.Fragment>
);

export default Layout;
