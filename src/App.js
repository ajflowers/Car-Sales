import React from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from './actions'

import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = ({ car, additionalFeatures, additionalPrice, addItem, removeItem }) => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures 
          buyItem={buyItem} 
          additionalFeatures={additionalFeatures} 
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {addItem, removeItem})(App);
