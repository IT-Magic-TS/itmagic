import { useEffect, useState } from 'react'
import Clock from '../components/Clock';
import StairRise from '../components/android-calculations/StairRise';
import useTitle from '../hooks/useTitle';
import PrivacyCard from '../components/PrivacyCard'

const Home = ({title}) => {
  useTitle(title)

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
    <main className='container relative'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/4 w-full'>
          <StairRise />
        </div>
        <div className='md:w-2/4 w-full'>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe 
              className='lg:w-[426px] lg:h-[240px] xl:w-[560px] xl:h-[315px] rounded-lg mx-auto border-2 border-stone-700 shadow-xl'
              src="https://www.youtube.com/embed/xkw5OY05xFI" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            >
            </iframe>
          </div>
          <div className='aspect-w-16 aspect-h-9 -mt-4'>
            <iframe 
              className='lg:w-[426px] lg:h-[240px] xl:w-[560px] xl:h-[315px] rounded-lg mx-auto border-2 border-stone-700 shadow-xl'
              src="https://www.youtube.com/embed/DfsAeX8UQvc" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
        <div className='max-w-sm h-auto text-center md:w-1/4 w-full mx-auto'>
          <div className='border border-stone-500 rounded-md p-4 shadow-xl'>
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
        </div>
      </div>
      {privacy && <PrivacyCard setPrivacy={privacyHandler} />}
    </main>
  )
}

export default Home