import React from 'react'
import { connect } from 'react-redux'

import { removeItem } from '../actions'

import AddedFeature from './AddedFeature';

const AddedFeatures = ({features, removeItem}) => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature removeFeature={removeFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, {removeItem})(AddedFeatures);
