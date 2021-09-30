import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoading } from '../../redux/shop/shop.secetor';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsPage from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoading(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage);

export default CollectionContainer;