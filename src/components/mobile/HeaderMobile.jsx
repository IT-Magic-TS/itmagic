import { useState } from 'react';
import Icon from '../../assets/images/itLogo.png'
import { Link, NavLink } from 'react-router-dom';
import Icon3Bars from '../icons/Icon3Bars';
import IconClose from '../icons/IconClose'


const HeaderMobile = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const pendingClass = 'text-white'

  return (
    
    <nav className='bg-stone-700'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link to='' className='flex items-center gap-2'>
          <img src={Icon} alt="icon" className='h-14 w-14 animate-bounce' />
          <h1 className='text-3xl font-semibold italic text-rose-400'><span className='text-emerald-600'>I</span>T <span className='text-emerald-600'>M</span>agic</h1>
        </Link>

        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 ml-3 text-sm text-rose-800 rounded-lg hover:bg-rose-800 hover:text-rose-400 bg-rose-400 duration-200" 
        >
          <span className="sr-only">Open main menu</span>
          { !showMobileMenu ? <Icon3Bars /> : <IconClose size={6} /> }
        </button>

        {
          showMobileMenu && (
            <div className="w-full">

              <ul className="font-medium flex flex-col p-4 mt-4 border bg-teal-700 gap-2">

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Home
                  </NavLink>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/products'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Etsy 3D Models
                  </NavLink>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/cart'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Etsy 3D Models - Bookmarks
                  </NavLink>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/simple-panel'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Simple Panel
                  </NavLink>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/stairs-balustrade'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Stairs Balustrade
                  </NavLink>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/job-cost'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Job Cost Calculator
                  </NavLink>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <NavLink
                    to='/privacy'
                    className={({  isActive, isPending}) => isPending ? 'pendingMobile' : isActive ? 'activeMobile' : 'notActiveMobile'}
                  >
                    Privacy
                  </NavLink>
                </li>
                
              </ul>

            </div>
          )
        }

      </div>
    </nav>

  )
}

export default HeaderMobile