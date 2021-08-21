import React from 'react';
//import PropTypes
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

//Notes - PropTypes
/*
- it is used to define default values to props in case value are undefined when fetching from APIs.
- sometimes these default value does not render properly when fetched value and default value are of different type.
- in our case, value for image is image.url(an object) and default value is defaultImage(a file). So default props are not rendered properly.
- To solve this issue we can use && / || Operators
- Note: in this case too, OR operator does not work direclty. JS does not recognise it. So we use AND Operator to return url when only when there is an image.
*/

const Product = ({name, image, price}) => {
  // means return image.url only when image prop is true or is defined
  const imgUrl = image && image.url // Fix for rendering defaultImage

  return <article className='product'>
    <p>{name || 'sample'}</p>
    <img src={imgUrl || defaultImage} alt="default-img"/>
    <p>{price || 3.99}</p>
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
// Product.defaultProps = {
//   name: 'sample',
//   image: defaultImage,
//   price: 0
// }

export default Product;
