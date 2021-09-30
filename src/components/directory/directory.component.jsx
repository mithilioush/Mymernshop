import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectDirectorySelection } from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item.component';

import "./directory.style.scss"

const Directory = ({ sections }) => {
  return (

    <div className='directory-menu'>
      {
        sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelection
})


export default connect(mapStateToProps)(Directory);