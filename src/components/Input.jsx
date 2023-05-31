

const Input = ({label, name, onInputChange, val}) => {

  const nevValue = val ? val : ''

  return (
    <div className='md:flex md:items-center mb-2'>

      <div className='md:w-2/3'>
        <label 
          htmlFor="stepsA"
          className='block text-gray-700 font-semibold md:text-right mb-1 md:mb-0 pr-4'
        >
          {label} 
        </label>
      </div>

      <div className='md:w-1/3'>
        <input
          onChange={onInputChange}
          className='bg-amber-200 appearance-none border border-teal-700 rounded-md w-full py-2 p-4 text-stone-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          name={name} 
          min={0}
          value={nevValue}
          type="number" 
        />
      </div>
      
    </div>
  )
}

export default Input