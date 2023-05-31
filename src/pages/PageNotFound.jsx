import { useEffect } from 'react';
import useTitle from '../hooks/useTitle';


const PageNotFound = ({title}) => {

  useTitle(title)

  return (
    <main className='container p-4'>
      <h1 className='text-center text-3xl text-orange-500 font-bold italic'>404 Opps! Page not found!</h1>
    </main>
  )
}

export default PageNotFound