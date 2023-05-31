import { Link, NavLink } from 'react-router-dom'; 
import Icon from '../assets/images/itLogo.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 py-4 container'>
      <Link to='' className='flex items-center gap-2'>
        <img src={Icon} alt="icon" className='h-16 w-16 animate-bounce' />
        <h1 className='text-3xl font-semibold text-stone-700 italic'><span className='text-emerald-600'>I</span>T <span className='text-emerald-600'>M</span>agic</h1>
      </Link>
      <div className='flex gap-4 items-center'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
          end
        >
          Home
        </NavLink>
        <NavLink
          to='/products'
          className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Products
        </NavLink>
        <NavLink
          to='/cart'
          className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Bookmarks
        </NavLink>
        <NavLink
          to='/calculations'
          className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Calculations
        </NavLink>
        <NavLink
          to='/privacy'
          className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Privacy
        </NavLink>
      </div>
    </header>
  )
}

export default Header