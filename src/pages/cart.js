import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../store/slices/cart-slice'




const Cart = () => {
    const { cartz } = useSelector(state => state)
    const [totalCart, setTotalCart] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setTotalCart(cartz.reduce((acc, curr) => acc + curr.price, 0))
    }, [cartz, totalCart])

    function handleRemove(idz) {
        dispatch(removeFromCart(idz))
    }

    const boxesComponent = cartz?.map(a => {
        return (
            <div className='box text-black flex justify-center items-center max-w-[400px] text-[0.7rem] sm:text-[1rem]'>
                <img  className="max-w-[120px] aspect-square pl-5"src={a.image}></img>
                <h2 className='text-center pl-5 pr-5  font-light max-w-[80%] mx-auto'>{a.title}</h2>
                <button onClick={() => handleRemove(a.id)} className='text-yellow-200'>
                    Remove Item
                </button>
                <p className='absolute bottom-[60px]'>${a.price}</p>
            </div>
        )
    })

    return (

        <div className='flex justify-between gap-20 w-[90%] mx-auto max-w-[900px] pt-10 relative'>
            <div className='flex-col flex max-w-[50%] gap-10 '>
                {cartz && cartz.length>0 ? boxesComponent : <div className='text-black font-bold gap-5 text-[2rem] mt-52 flex flex-col'><p>No Items added to the cart</p>
                <Link to="/" className='bg-black text-white text-[1.3rem] py-2 px-5 rounded-xl mx-auto'>Go to Shop</Link>
                </div>}
            </div>
            <div className='flex-col fixed right-[30px] top-[45%] bg-black p-5 rounded-lg'>
                <p>Total Price: <span className='font-bold'>${totalCart}</span></p>
                <p>Total Objects: <span className='font-bold'>{cartz.length}</span></p>
            </div>
        </div>

    )
}

export default Cart