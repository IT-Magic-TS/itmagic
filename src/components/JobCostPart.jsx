import IconPencil from './icons/IconPencil';
import IconTrash from './icons/iconTrash';


const JobCostPart = ({part, onRemovPart, onEditPart, index}) => {

  const {id, name, quantity, price, total, active} = part

  return (
    <div className='py-1 px-4'>
      {/* Visible on Tablets -> */}
      <div className='hidden sm:flex items-center justify-between border-b-2 border-stone-200'>
        <h2
          className='text-xl text-teal-800 font-medium'
        >
          <span className='p-1 bg-yellow-200 text-stone-700'>{index + 1}.</span> {name} <span className='text-sm font-thin text-stone-700 italic'>(price: <span className='text-lg not-italic font-semibold'>{price.toFixed(2)}</span>)</span>
        </h2>
        <div className='flex justify-center items-center gap-2'>
          <p 
            className='text-sm text-stone-500 italic font-thin'
          >
            Quantity: <span className='text-xl text-stone-700 font-medium not-italic'>{quantity},</span>
          </p>
          <p 
            className='text-sm text-stone-500 italic font-thin'
          >
            Total Price: <span className='text-xl text-stone-700 font-medium not-italic'>{total.toFixed(2)}</span>
          </p>
          <div 
            className='text-red-500 cursor-pointer hover:scale-105 duration-200'
            onClick={() => onRemovPart(id)}
          >
            <IconTrash size={7} />
          </div>
          <div 
            onClick={() => onEditPart(part)}
            className='text-emerald-700 cursor-pointer hover:scale-105 duration-200'
          >
            <IconPencil />
          </div>
        </div>
      </div>

      {/* Visible on mobile only */}
      <div className='sm:hidden border-b-2 border-stone-200 flex items-center gap-2'>

        <div className='p-1 bg-yellow-200 text-stone-700'>{index + 1}.</div>
        
        <div className='flex-1'>
          <h2
            className='text-xl text-teal-800 font-medium'
          >
            {name} <span className='text-sm font-thin text-stone-700 italic'>(price: <span className='text-lg not-italic font-semibold'>{price.toFixed(2)}</span>)</span>
          </h2>

          <div className='flex justify-between items-center gap-1'>
            <p 
              className='text-xs text-stone-500 italic font-thin'
            >
              Quantity: <span className='text-lg text-stone-700 font-medium not-italic'>{quantity},</span>
            </p>
            <p 
              className='text-xs text-stone-500 italic font-thin'
            >
              Total Price: <span className='text-lg text-stone-700 font-medium not-italic'>{total.toFixed(2)}</span>
            </p>
            <div className='flex'>
              <div 
                className='text-red-500 cursor-pointer hover:scale-105 duration-200'
                onClick={() => onRemovPart(id)}
              >
                <IconTrash size={7} />
              </div>
              <div 
                onClick={() => onEditPart(part)}
                className='text-emerald-700 cursor-pointer hover:scale-105 duration-200'
              >
                <IconPencil />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default JobCostPart