import React from "react";
import { connect } from 'react-redux'

import { addItem } from '../actions'

import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = ({additionalFeatures, addItem}) => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    addItem(item);
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature
              buyItem={buyItem}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}


export default connect(mapStateToProps, {addItem})(AdditionalFeatures);