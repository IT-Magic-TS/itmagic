import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';

const products = [
  {
    id: 0,
    title: 'Fire Pit',
    desc: 'Metal product - more parts',
    imgUrl: './images/1.png',
    price: 9.67,
    inCart: false
  },
  {
    id: 1,
    title: 'Ornamental Part 1',
    desc: 'Metal product - more parts',
    imgUrl: './images/2.png',
    price: 3.56,
    inCart: false
  },
  {
    id: 3,
    title: 'Scrolls',
    desc: 'Metal product - more parts',
    imgUrl: './images/3.png',
    price: 7.77,
    inCart: false
  },
  {
    id: 4,
    title: 'Metal Gusset',
    desc: 'Metal product - more parts',
    imgUrl: './images/4.png',
    inCart: false
  },
  {
    id: 5,
    title: 'Table Part',
    desc: 'Metal product - more parts',
    imgUrl: './images/5.png',
    price: 4.78,
    inCart: false
  },
  {
    id: 6,
    title: 'Gate Scroll',
    desc: 'Metal product - more parts',
    imgUrl: './images/6.png',
    price: 2.45,
    inCart: false
  }
]


const initialState = {
  productList: products,
  cartList: [],
  total: 0
}
const CartContext = createContext(initialState)

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    product.inCart = true
    const updatedCartList = state.cartList.concat(product)
    updateTotal(updatedCartList)
    dispatch({
      type: 'ADD_TO_CART',   
      payload: {
        products: updatedCartList
      }
    })
  }

  const removeFromCart = (product) => {
    product.inCart = false
    const updateCartList = state.cartList.filter(item => item.id !== product.id)
    updateTotal(updateCartList)
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updateCartList
      }
    })
  }

  const updateTotal = (products) => {
    let total = 0
    products.forEach(p => total = total + p.price)
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        total
      }
    })
  }

  const value = {
    productList: state.productList,
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    updateTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}