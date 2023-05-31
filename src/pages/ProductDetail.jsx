import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';


const ProductDetail = () => {
  const itemId = useParams()
  useTitle(`Product: ${itemId}`)
  return (
    <main className='container p-4'>ProductDetail {itemId.id}</main>    
  )
}

export default ProductDetail