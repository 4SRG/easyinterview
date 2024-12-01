import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/cart-slice'

const ProductTile = (props) => {
  const dispatch = useDispatch()
  const {cartz} = useSelector(state=> state)

  function handleAddToCart(){
    dispatch(addToCart(props))
  }
  function handleRemove(){
    dispatch(removeFromCart(props.id))

  }
  return (
    <div className='box'>
      <img src={props.image} alt="loading..."></img>
      <h2 className='text-center mt-5 font-light max-w-[80%] mx-auto'>{props.title}</h2>
      <button onClick={cartz.some(item => item.id === props.id) ? handleRemove : handleAddToCart} className='text-yellow-200'>
        {
          cartz?.some(item => item.id === props.id) ? "Remove From Cart" : "Add To Cart"
        }
      </button>
    </div>
  )
}
export default ProductTile
