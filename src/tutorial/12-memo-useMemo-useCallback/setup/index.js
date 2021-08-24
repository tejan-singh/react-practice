import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

//Notes - React.memo()
/*
- if a component's prop value are same between re-render, then on state change, the components will not re-render
*/


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  )
}

const BigList = React.memo(({ products }) => {
  useEffect(()=>{
    console.log('Big list called')
  })

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields }) => {
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
    </article>
  )
}
export default Index
