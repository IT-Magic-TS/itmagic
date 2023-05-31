import { useEffect, useState } from 'react';
import IconArrowLeft from '../icons/iconArrowLeft'
import imgA from '../../assets/images/R1.png'
import imgB from '../../assets/images/FF1.png'
import InputItem from './InputItem';

const StairRise = () => {

  const [typeA, setTypeA] = useState(true)

  const [showDwg, setShowDwg] = useState(true)
  
  // Calculations A
  const [A, setA] = useState('')
  const [DB, setDB] = useState('')
  const [DT, setDT] = useState('')
  const [risersNum, setRisersNum] = useState('')

  const [FFL, setFFL] = useState(0)
  const [rise, setRise] = useState(0)

  const calculations = () => {

    const _A = parseFloat(A)
    const _DB = parseFloat(DB)
    const _DT = parseFloat(DT)
    const risersN = parseInt(risersNum)

    const FFL = _A - _DB + _DT
    const riseT = FFL / risersN

    if (_A > 0 && FFL > 0) {
      setFFL(FFL.toFixed(0))
    } else {
      setFFL('')
    }

    if (riseT > 0 && riseT !== Infinity) {
      setRise(riseT.toFixed(1))
    } else {
      setRise(0)
    }
  }

  useEffect(()=> {
    calculations()
  }, [A, DB, DT, risersNum])

  // Calculations B
  const [bFFL, setBFFL] = useState('')
  const [bRisers, setBRisers] = useState('')
  const [bRiser, setBRiser] = useState(0)

  const calculationsB = () => {
    const _FFL = parseFloat(bFFL)
    const risers = parseInt(bRisers)

    const rise = _FFL / risers

    if (rise > 0 && rise !== Infinity) {
      setBRiser(rise.toFixed(1))
    } else {
      setBRiser(0)
    }
  }

  useEffect(() => {
    calculationsB()
  }, [bFFL, bRisers])

  return (
    <section className='max-w-md border border-green-300'>

      <header className='bg-stone-700 flex justify-between items-center p-2 text-white'>
        <IconArrowLeft />
        <h2 className='text-xl font-semibold'>Tread Rise</h2>
        <button
          className='px-2 py-1 border border-white hover:bg-white hover:text-stone-700 duration-300'
          onClick={() => setShowDwg(!showDwg)}
        >
          { showDwg ? 'Hide DWG' : 'Show DWG' }
        </button>
      </header>

      {
        typeA && (
          <div className='p-2'>
            { showDwg && <img src={imgA} alt="stairs step rise" /> }

            <div>
      
              <InputItem value={A} setValue={setA} label='A:' />
              <InputItem value={DB} setValue={setDB} label='DB:' />
              <InputItem value={DT} setValue={setDT} label='DT:' />
              <InputItem value={risersNum} setValue={setRisersNum} label='Risers Num(1,2...5):' labelTextHeight='text-sm' />

            </div>

            <div className='border-t border-stone-200 py-2'>
              <div className='flex justify-center items-center'>
                <div className='flex-1 text-right pr-4 text-xl text-green-700'>FFL:</div>
                <div className='flex-1 text-green-700 text-2xl'>{FFL}</div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='flex-1 text-right pr-4 text-xl text-green-700'>RISE:</div>
                <div className='flex-1 text-green-700 text-2xl'>{rise}</div>
              </div>
            </div>

          </div>
        )
      }

      {
        !typeA && (
          <div className='p-2'>
            { showDwg && <img src={imgB} alt="stairs step rise" /> }

            <div>
      
              <InputItem value={bFFL} setValue={setBFFL} label='FFL:' />
              <InputItem value={bRisers} setValue={setBRisers} label='Risers Num(1,2...5):' labelTextHeight='text-sm' />

            </div>

            <div className='border-t border-stone-200 py-2'>
              <div className='flex justify-center items-center'>
                <div className='flex-1 text-right pr-4 text-xl text-green-700'>RISE:</div>
                <div className='flex-1 text-green-700 text-2xl'>{bRiser}</div>
              </div>
            </div>

          </div>
        )
      }

      <div className='bg-stone-700 flex text-white text-2xl'>
        <button
          className='flex-1 border-r border-stone-500 hover:bg-stone-500 duration-200 py-2'
          type='button'
          onClick={() => setTypeA(true)}
        >
          A
        </button>
        <button
          className='flex-1 hover:bg-stone-500 duration-200 py-2'
          type='button'
          onClick={() => setTypeA(false)}
        >
          B
        </button>
      </div>

    </section>
  )
}

export default StairRise