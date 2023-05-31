

const InputItem = ({label, value, setValue, labelTextHeight}) => {

  const labelTextH = labelTextHeight ? labelTextHeight : 'text-xl'

  return (
    <div className='flex justify-center items-center'>
      <div className={`text-stone-700 text-right pr-2 ${labelTextH} flex-1`}>{label}</div>
      <input 
        className='py-1 px-2 text-stone-700 bg-yellow-100 text-xl flex-1 mb-2'
        type="number"
        name='risersNum' 
        min={0} 
        max={10000}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default InputItem