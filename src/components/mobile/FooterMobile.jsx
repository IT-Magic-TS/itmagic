import { Link } from 'react-router-dom';
import Icon from '../../assets/images/itLogo.png'
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconGooglePlay from '../icons/IconGooglePlay';
import IconMail from '../icons/IconMail';

const FooterMobile = () => {
  return (
    
    <footer className="shadow bg-stone-600">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        <div className="flex items-center justify-between">

          <div className="flex items-center">
            <img src={Icon} className="h-8 mr-3 animate-bounce" alt="IT Magic" />
            <div className='text-xl font-semibold'>
              <span className="text-violet-500">I</span>
              <span className='text-yellow-500'>T</span>
              <span className='text-green-500'>{' '} Magic</span>
            </div>
          </div>

          <div className='flex gap-4 justify-center'>
            <a href="https://play.google.com/store/apps/developer?id=Eve+Star" target='_blank' className='text-yellow-300'>
              <IconGooglePlay />
            </a>
            <a href="https://www.facebook.com/itmagic.dev/" target='_blank' className='text-blue-400'>
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/jquerymobile/" target='_blank' className='text-rose-600'>
              <IconInstagram />
            </a>
          </div>

          <div>
            <Link to='/privacy' className='text-rose-300 hover:text-rose-500 font-semibold duration-300'>Privacy</Link>
          </div>

        </div>

        <hr className="my-4 border-gray-500 sm:mx-auto" />
        <div className='text-stone-300 flex justify-center items-center gap-2'>
          <IconMail />
          <a href="mailto:info@itmagic.dev">
            info@itmagic.dev
          </a>
        </div>
        <div className='text-center text-gray-300 sm:mt-3'>
          © {new Date().getFullYear()}<span> IT Magic</span>. All Rights Reserved.
        </div>
      </div>
    </footer>

  )
}

export default FooterMobile