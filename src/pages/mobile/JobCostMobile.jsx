import { useEffect, useState } from 'react';
import { useJob } from '../../context/JobContext';
import JobCostPart from '../../components/JobCostPart';
import { CardClearAll, InputCalc, ResultCalc } from '../../components';
import CardConfirmDelete from '../../components/CardConfirmDelete';


const JobCostMobile = () => {

  const {total, partList, addPart, updatePart} = useJob()
  const [showCardRemoveHandler, setShowCardRemoveHandler] = useState(false)
  const [activePartId, setActivePartId] = useState('')
  const [showEditBtn, setShowEditBtn] = useState(false)

  const [inputs, setInputs] = useState({
    name: '',
    price: '',
    quantity: ''
  })

  const [partTotal, setPartTotal] = useState(null)
  const [hasParts, setHasParts] = useState(false)
  const [partValid, setPartValid] = useState(false)

  const [showCardClearParts, setShowCardClearParts] = useState(false)

  const handleInputChange = (event) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const calculateTotal = () => {
    const partName = inputs.name
    const price = +inputs.price
    const quantity = Math.round(+inputs.quantity)

    const total = price * quantity

    if (price > 0 && quantity > 0) {
      setPartTotal(total.toFixed(2))

      if (partName.length > 0) {
        setPartValid(true)
      }
    }
  }

  useEffect(() => {
    calculateTotal()
  }, [inputs])

  const handleAddPart = () => {
    
    addPart({
      id: (new Date().getTime()).toString(12),
      name: inputs.name,
      price: +inputs.price,
      quantity: Math.round(+inputs.quantity),
      total: +partTotal
    })

    setPartValid(false)

    setInputs({
      name: '',
      price: '',
      quantity: ''
    })

    setPartTotal(0)
    
  }

  const handleClearParts = () => {
    setShowCardClearParts(true)
  }

  useEffect(() => {
    if (partList.length > 0) {
      setHasParts(true)
    } else {
      setHasParts(false)
    }
  }, [partList])

  const handleRemovePart = (id) => {
    setShowCardRemoveHandler(true)
    setActivePartId(id)
  }

  const handleEditPart = (part) => {
    setInputs({
      name: part.name,
      price: part.price,
      quantity: part.quantity
    })
    setShowEditBtn(true)
    setActivePartId(part.id)
  }

  const handleUpdatePart = () => {
    updatePart({
      id: activePartId,
      name: inputs.name,
      price: +inputs.price,
      quantity: Math.round(+inputs.quantity),
      total: +partTotal
    })
    setPartTotal(0)
    setShowEditBtn(false)
    setPartValid(false)
    setInputs({
      name: '',
      price: '',
      quantity: '',
      total: +partTotal
    })
    setActivePartId('')
  }

  return (
    <div className='container-mobile'>
      
      <div className='flex flex-col justify-center items-center -m-2'>

        {/* List OF JOBS */}
        <div className='shadow-md rounded-md shadow-stone-600 w-full'>

          <h1 className='text-center text-2xl font-semibold text-stone-700'>Part List</h1>

          <div>
          {
            partList.length > 0 ? (
              partList.map((part, index) => <JobCostPart key={part.id} part={part} onRemovPart={handleRemovePart} onEditPart={handleEditPart} index={index} />)
            ) : (
              <div className='text-center text-orange-600 text-2xl p-4'>No parts in the list!</div>
            )
          }
          </div>

          {/* Show on tablets ONLY */}
          <div className='hidden sm:flex sm:justify-between sm:items-center p-3'>
            <button
              className='btn-outline-zinc mt-2 disabled:bg-white disabled:text-stone-400 disabled:cursor-not-allowed'
              onClick={handleClearParts}
              type='button'
              disabled={!hasParts}
            >
              Clear Parts
            </button>
            <div>
              <span className='p-2 text-stone-700 text-xl italic'>Total Price:</span><span className='bg-emerald-400 font-semibold text-stone-700 text-2xl py-2 px-4'>{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Show on mobile ONLY */}
          <div className='flex flex-col justify-between items-center p-3 sm:hidden gap-2'>
            <div>
              <span className='p-2 text-stone-700 text-xl italic'>Total Price:</span><span className='bg-emerald-400 font-semibold text-stone-700 text-2xl py-2 px-4'>{total.toFixed(2)}</span>
            </div>
            <button
              className='btn-outline-zinc mt-2 disabled:bg-white w-full disabled:text-stone-400 disabled:cursor-not-allowed'
              onClick={handleClearParts}
              type='button'
              disabled={!hasParts}
            >
              Clear Parts
            </button>
          </div>

        </div>
        {/* End List of JOBS */}

        <div className='shadow-md rounded-md shadow-stone-600 w-full mt-4 p-4'>

          <input
            className='bg-amber-200 appearance-none border border-teal-700 rounded-md w-full py-2 p-4 text-stone-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-2xl placeholder:text-stone-500 placeholder:text-xl mb-2'
            type="text" 
            placeholder='Part Name'
            name='name'
            value={inputs.name}
            onChange={handleInputChange}
          />

          <InputCalc label='Price' name='price' onInputChange={handleInputChange} val={inputs.price} />
          <InputCalc label='Quantity' name='quantity' onInputChange={handleInputChange} val={inputs.quantity} />

          <ResultCalc title='Total' val={partTotal} />

          {
            !showEditBtn ? (
              <button
                className='btn-outline-zinc mt-2 disabled:bg-white disabled:text-stone-400 disabled:cursor-not-allowed block mx-auto'
                onClick={handleAddPart}
                type='button'
                disabled={!partValid}
              >
                Add Part
              </button>
            ) : (
              <button
                className='btn-outline-green mt-2 block mx-auto'
                onClick={handleUpdatePart}
                type='button'
              >
                Update Part
              </button>
            )
          }

        </div>

      </div>

      { showCardRemoveHandler && <CardConfirmDelete editBtn={setShowEditBtn} showCard={setShowCardRemoveHandler} partId={activePartId} /> }
      { showCardClearParts && <CardClearAll editBtn={setShowEditBtn} showCard={setShowCardClearParts} /> }

    </div>
  )
}

export default JobCostMobile