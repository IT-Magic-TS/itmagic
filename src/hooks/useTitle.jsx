import { useEffect } from 'react';


const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / 14 Cad`
  })

  return null
}

export default useTitle