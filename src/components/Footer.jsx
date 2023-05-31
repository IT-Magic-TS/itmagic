
import { Link } from 'react-router-dom';
import Icon from '../assets/images/itLogo.png'
import IconFacebook from './icons/IconFacebook';
import IconInstagram from './icons/IconInstagram';
import IconGooglePlay from './icons/IconGooglePlay';
import IconMail from './icons/IconMail';

const Footer = () => {
  return (
    
    <footer className="bg-white m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">

        <div className="sm:flex sm:items-center sm:justify-between">

          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Icon} className="h-8 mr-3" alt="Flowbite Logo" />
            <h2 className='text-2xl font-semibold text-stone-700 italic'><span className='text-emerald-600'>I</span>T <span className='text-emerald-600'>M</span>agic</h2>
          </Link>

          <div className='flex gap-4'>
            <a href="https://play.google.com/store/apps/developer?id=Eve+Star" target='_blank' className='text-yellow-300'>
              <IconGooglePlay />
            </a>
            <a href="https://www.facebook.com/itmagic.dev/" target='_blank' className='text-blue-700'>
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/jquerymobile/" target='_blank' className='text-rose-600'>
              <IconInstagram />
            </a>
          </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link to='privacy' className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
          </ul>

        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className='text-stone-800 flex justify-center items-center gap-2 mb-2'>
          <IconMail />
          <a href="mailto:info@itmagic.dev">
            info@itmagic.dev
          </a>
        </div>

        <span 
          className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >
          © {new Date().getFullYear()} 
          <Link to="/" className="hover:underline">IT Magic™</Link>
          . All Rights Reserved.
        </span>

      </div>
    </footer>


  )
}

export default Footer