import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import CollectionsOverviewContainter from '../../components/collection-overview/shop-overview.container';
import CollectionContainer from '../collection/collection.container';


class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (<div className='shop=page' >
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainter} />
      <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
    </div>)
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);