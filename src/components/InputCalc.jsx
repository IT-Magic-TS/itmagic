const InputCalc = ({label, name, onInputChange, val}) => {

  const nevValue = val ? val : ''

  return (
    <div className='flex items-center mb-2'>

      <div className='w-1/2'>
        <label 
          htmlFor="stepsA"
          className='block text-gray-700 font-semibold text-right mb-1 pr-4 text-xl'
        >
          {label} 
        </label>
      </div>

      <div className='w-1/2'>
        <input
          onChange={onInputChange}
          className='bg-amber-200 appearance-none border border-teal-700 rounded-md w-full py-2 p-4 text-stone-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-2xl'
          name={name} 
          min={0}
          value={nevValue}
          type="number" 
        />
      </div>
      
    </div>
  )
}

export default InputCalc