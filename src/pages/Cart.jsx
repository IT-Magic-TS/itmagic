import { useSelector } from 'react-redux';
import { Card } from '../components';
// import { useCart } from '../context/CartContext';
import useTitle from '../hooks/useTitle';
import { total } from '../store/advertsSlice';
import { useDispatch } from 'react-redux';


const Cart = ({title}) => {
  useTitle(title)
  // const {cartList, total} = useCart()

  const dispatch = useDispatch()

  const items = useSelector(state => state.advertState.favoriteList)
  const total = useSelector(state => state.advertState.total)

  return (
    <main className='container p-4'>
      <h1 className='text-center pb-8 text-xl text-stone-700 font-semibold'>Bookmark Items: {items.length} / &pound;{total.toFixed(2)}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
        {
          items.length > 0 && items.map(item => <Card key={item.id} item={item} remove={true} />)
        }
      </div> 
    </main>
  )
}

export default Cart