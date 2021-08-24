import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

//Notes - useCallback()
/*
- use to re-rendering of component only when certain value changes.
- here we have 2 states - count, cart. 
  - when either of those changes, page re-render.
  - we want to re-render count component when value of count changes and stop re-rendering of cart component.
  - which is done using useCallback() by specifying condition to re-render the cort component only when cart component value changes.
  - cart component will not re-render when value for count changes.
  - note: component re-render when prop value changes. When we were passing addToCart component to BigList component inside Index component, it is re-created everytime when count value changes and react thinks addToCart's value is changed.
*/


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)
  
  //page will re-render only when cart value is changed. If any other value is changed, page will not re-render.
  const addToCart = useCallback(function(){
    setCart(cart + 1)
  },[cart])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>

      <h1 style={{marginTop:"3rem"}}>Cart : {cart}</h1>

      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}



const BigList = React.memo(({ products, addToCart}) => {
  useEffect(()=>{
    console.log('Big list called')
  })

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(()=>{
    console.log('Small list called')
  })

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
