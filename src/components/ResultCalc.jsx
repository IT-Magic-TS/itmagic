

const ResultCalc = ({title, val}) => {

  const value = val ? val : 0

  return (
    
    <div className='flex items-center mb-2 gap-2'>
      <div className='w-1/2 text-right'>
        <p className='text-teal-700 font-semibold italic text-2xl'>{title}: </p>
      </div>
      <div className='w-1/2 text-left'>
        <p className='text-white font-bold bg-teal-700 p-1 text-2xl rounded-md'>{value}</p>
      </div>
    </div>
   
  )
}

export default ResultCalc