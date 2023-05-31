import { useEffect, useState } from 'react';
import Clock from '../../components/Clock';
import StairRise from '../../components/android-calculations/StairRise';
import PrivacyCard from '../../components/PrivacyCard';


const HomeMobile = () => {

  const [privacy, setPrivacy] = useState(true)

  const privacyHandler = () => {
    setPrivacy(false)
    localStorage.setItem('privacy', JSON.stringify(false))
  }

  useEffect(() => {
    const _privacy = JSON.parse(localStorage.getItem('privacy'))
    if (_privacy === false) {
      setPrivacy(false)
    }
  }, [])

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:items-start container-mobile'>

      <div className='border border-stone-500 rounded-md p-4 shadow-xl flex-1 text-center'>
        <Clock />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800 text-xl pt-4">Price: &pound;9.32</p>
        <p className='text-stone-500 mx-4'>
          It is a pleasure for me to present you with the original Ornamental Clock. We designed it for the web and real production
        </p>
        <a 
          className='flex items-center border border-stone-700 hover:bg-gray-200 duration-200 px-4 py-2 justify-center rounded-md mt-4'
          href="https://www.etsy.com/uk/listing/1458547932/ornamental-clock-web-and-production?ref=listings_manager_grid" 
          target='_blank'
        >
          <span className='text-[#F0501D] text-xl font-semibold'>Etsy: </span>
          <span className='text-stone-700 font-bold text-xl px-2'>Ornamental Clock</span>
        </a>
      </div>

      <div className='flex-1'>
        <StairRise />
      </div>

      {privacy && <PrivacyCard setPrivacy={privacyHandler} />}

    </div>
  )
}

export default HomeMobile          