import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.secetor";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainter = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainter;