import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const Calculations = ({title}) => {

  useTitle(title)

  return (
    <div className='container px-10 text-center -mt-5'>
      <div className='flex items-center justify-center gap-2 bg-stone-200 p-2'>
        <div className='border-r-2 border-stone-700 px-2'>
          <NavLink
            to=''
            className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
            end
          >
            Perfect Balustrade
          </NavLink>
        </div>
        <div className='border-r-2 border-stone-700 px-2'>
          <NavLink
            to='stairs-balustrade'
            className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
            end
          >
            Balustrade Stairs
          </NavLink>
        </div>
        <div className='border-r-2 border-stone-700 px-2'>
          <NavLink
            to='panel'
            className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
            end
          >
            Simple Panel
          </NavLink>
        </div>
        <div>
          <NavLink
            to='job-cost'
            className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}
            end
          >
            Job Cost
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Calculations