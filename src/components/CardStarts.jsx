import IconClose from './icons/IconClose';


const CardStarts = ({showCard, title, type, data}) => {

  return (
    
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center w-full h-full backdrop-sepia">
      <div className="flex flex-col items-center overflow-y-auto p-4 bg-stone-700 md:p-16 gap-y-4 rounded-xl z-50 text-yellow-300 relative">
        <button
          type='button'
          onClick={() => showCard(false)}
          className='absolute top-2 right-3 hover:scale-105 duration-200 text-red-600'
        >
          <IconClose />
        </button>
        <h2 className="text-lg md:text-2xl mt-10">{title}</h2>
        <ul>
        {
          type === 'starts' && (
            data.length > 0 ? (
              data.map((item, index) => (
                <li key={index} className='flex items-center justify-center gap-2 odd:stroke-neutral-700 even:bg-green-500 p-2'>
                  <span className='font-thin italic'>S-{index+1}:</span><span className='text-xl font-semibold'>{item}</span>
                </li>
              ))
            ) :
              (
                <li className='flex items-center justify-center gap-2 odd:stroke-neutral-700 even:bg-green-500 p-2'>
                  <span className='text-xl font-semibold'>No valid Stat Points!</span>
                </li>
              )
          )
        }
        </ul>
        <ul>
        {
          type === 'bars' && (
            data.map((item, index) => (
              <li key={index} className='flex items-center justify-center gap-2 odd:stroke-neutral-700 even:bg-green-500 p-2'>
                <span className='font-thin italic'>Bar-{index+1} length =</span><span className='text-xl font-semibold'>{item}</span>
              </li>
            ))
          )
        }
        </ul>
        <button 
          type='button'
          className="btn-outline-red"
          onClick={() => showCard(false)}
        >
          Close Window
        </button>
      </div>
    </div>
   
  )
}

export default CardStarts