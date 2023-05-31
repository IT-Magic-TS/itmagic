import { useSelector } from 'react-redux';
import useTitle from '../../hooks/useTitle';
import { Card } from '../../components';


const EtsyBookmarks = ({title}) => {

  useTitle(title)

  const items = useSelector(state => state.advertState.favoriteList)
  const total = useSelector(state => state.advertState.total)

  return (
    <div className='container-mobile'>
      <h1 
        className='text-center pb-8 text-xl text-stone-700 font-semibold'
      >
        Bookmark Items: {items.length} / &pound;{total.toFixed(2)}
      </h1>
      <div className='flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap'>
        {
          items.length > 0 && items.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default EtsyBookmarks