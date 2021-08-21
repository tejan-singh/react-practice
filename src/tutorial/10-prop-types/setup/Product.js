import React from 'react';
//import PropTypes
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

//Notes - PropTypes
/*
- it is used to define default values to props in case value are undefined when fetching from APIs.
*/

const Product = ({name, image, price}) => {
  return <article className='product'>
    <p>{name}</p>
    <img src={image.url} alt="default-img"/>
    <p>{price}</p>
  </article>;
};

// 1. set proptype for each prop
Product.propTypes = {
  //Proptypes.(typeofprop).(is required or not)
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// 2. set default prop value for each prop
Product.defaultProps = {
  name: 'sample',
  image: defaultImage,
  price: 0
}

export default Product;
