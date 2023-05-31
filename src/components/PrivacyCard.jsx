
import { Link } from 'react-router-dom';

const PrivacyCard = ({setPrivacy}) => {
  return (
    <>
      <div className='hidden sm:block absolute left-[50%] translate-x-[-50%] top-40 p-5 bg-yellow-300 z-50 text-xl max-w-md text-stone-700 text-center rounded-md shadow-lg'>
        <h1 className='p-3 text-2xl font-semibold'>We value your privacy</h1>
        <p className='p-4'>
          By using this site you agree to the use of cookies by the company in accordance with the <Link className='text-blue-700' to='/privacy'>Privacy Policy</Link>
        </p>
        <button
          type='button'
          className='btn-outline-green'
          onClick={setPrivacy}
        >
          AGREE
        </button>
      </div>

      <div className='sm:hidden absolute w-[97%] m-2 top-40 p-5 bg-yellow-300 z-50 text-xl max-w-md text-stone-700 text-center rounded-md shadow-lg'>
        <h1 className='p-3 text-2xl font-semibold'>We value your privacy</h1>
        <p className='p-4'>
          By using this site you agree to the use of cookies by the company in accordance with the <Link className='text-blue-700' to='/privacy'>Privacy Policy</Link>
        </p>
        <button
          type='button'
          className='btn-outline-green'
          onClick={setPrivacy}
        >
          AGREE
        </button>
      </div>
    </>
  )
}

export default PrivacyCard