import { Card } from '../components';
// import { useCart } from '../context/CartContext';
import useTitle from '../hooks/useTitle';
import { useSelector } from 'react-redux'


const ProductList = ({title}) => {
  /* const { productList } = useCart() */

  const products = useSelector(state => state.advertState.advertList)
  
  useTitle(title)

  return (
    <main className='container p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
        {
          products.length > 0 && products.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </main>
  )
}

export default ProductList