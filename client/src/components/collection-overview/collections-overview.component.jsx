import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../preview-collectio/collectio-preview.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.secetor';

import './collections-overview.style.scss'


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)