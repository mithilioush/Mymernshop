import React from "react";
import { connect } from "react-redux";

import CustomButton from '../custom-button/custom-button.component'
import { addItems } from "../../redux/cart/cart.action";

import './collection-item.style.scss';

const CollectionItem = ({ item, addItems }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItems(item)} children="ADD TO CART" inverted="inverted" />
        </div>
    )
}
const mapDispatchToProps = dispach => ({
    addItems: item => dispach(addItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);