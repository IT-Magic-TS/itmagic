import React from 'react'
// import { useCart } from '../context/CartContext';
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/advertsSlice'
import IconBookmark from '../components/icons/IconBookmark'
import IconBookmarkSlash from '../components/icons/IconBookmarkSlash'

const Card = ({item}) => {
  // const { addToCart, removeFromCart } = useCart()
  const {id, title, desc, price, imgUrl, favorite, url} = item

  // Start REDUX
  const dispatch = useDispatch()
 

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:scale-[101%] duration-300">
      <img className="rounded-t-lg" src={imgUrl} alt={title} />
      <div className="p-5 text-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc} | &pound;{price}</p>
        <a
          className="btn-outline-orange"
          href={url}
          target='_blank'
        >
          Go To Etsy
        </a>
      </div>
      
      <div className='absolute top-1 right-1 z-50'>
        {
          !favorite ? (
            <div>
              <button 
                onClick={() => dispatch(add(item))}
                className='bg-teal-600 rounded-md hover:scale-105 duration-200'
              >
                <IconBookmark />
              </button>
            </div>
          ) : (
            <div className='bg-orange-400 rounded-md hover:scale-105 duration-200'>
              <button
                onClick={() => dispatch(remove(item))}
              >
                <IconBookmarkSlash />
              </button>
            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default Card