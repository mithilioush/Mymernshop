import React from 'react';
import { Route } from 'react-router';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import Collection from '../catagory/collection.component';

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);


export default ShopPage;