import { useSelector } from 'react-redux';
import { Card } from '../../components';
import useTitle from '../../hooks/useTitle';


const EtsyModels = ({title}) => {

  useTitle(title)

  const products = useSelector(state => state.advertState.advertList)

  return (
    <div className='container-mobile'>
      <div className='flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap'>
        {
          products.length > 0 && products.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default EtsyModels