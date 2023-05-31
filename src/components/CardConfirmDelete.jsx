import { useJob } from '../context/JobContext';
import IconClose from './icons/IconClose';


const CardConfirmDelete = ({showCard, partId, editBtn}) => {

  const removePartHandler = () => {
    removePart(partId)
    showCard(false)
    editBtn(false)
  }

  const {removePart} = useJob()

  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center w-full h-full backdrop-sepia">
      <div className="flex flex-col items-center overflow-y-auto p-4 bg-stone-700 md:p-16 gap-y-4 rounded-xl z-50 text-yellow-300 relative m-2">
        <button
          type='button'
          onClick={() => showCard(false)}
          className='absolute top-2 right-3 hover:scale-105 duration-200 text-red-600'
        >
          <IconClose />
        </button>
        <h2 className="text-lg sm:text-2xl mt-8">Are you sure you want to delete this part?</h2>

        <button 
          type='button'
          className="btn-outline-red w-2/3"
          onClick={removePartHandler}
        >
          Yes, I'm sure
        </button>
          
        <button 
          type='button'
          className="btn-outline-green w-2/3"
          onClick={() => showCard(false)}
        >
          No, cancel
        </button>
      </div>
    </div>
  )
}

export default CardConfirmDelete