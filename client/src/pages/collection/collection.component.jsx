import React from 'react'
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-items/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.secetor';

import './collection.style.scss'


const Collection = ({ collection, ...rest }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map((item, i) => <CollectionItem key={i} id={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),

})

export default connect(mapStateToProps)(Collection);
