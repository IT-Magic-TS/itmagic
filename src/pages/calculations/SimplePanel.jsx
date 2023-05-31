import { useEffect, useState } from 'react';
import imgBSmallWeb from '../../assets/images/panel-simple-sm.webp'
import imgBSmallPng from '../../assets/images/panel-simple-sm.png'
import imgPng from '../../assets/images/panel-simple.png'
import imgWeb from '../../assets/images/panel-simple.webp'
import { CardStarts, InputCalc, ResultCalc } from '../../components';
import useTitle from '../../hooks/useTitle';


const SimplePanel = ({title}) => {

  useTitle(title)

  const [showCardStarts, setShowCardStarts] = useState(false)
  const [data, setData] = useState([])
  const [type, setType] = useState('')
  const [callName, setCallName] = useState('')

  const [inputs, setInputs] = useState({
    panelLength: 0,
    barD: 0,
    barNum: 0,
    panelH: 0,
    x: 0,
    y: 0
  })

  const [results, setResults] = useState({
    gap: 0,
    barLength: 0,
    starts: []
  })

  const handleInputChange = (event) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [event.target.name]: +event.target.value
      }
    })
  }

  const calculations = () => {
    const panelLength = inputs.panelLength
    const bD = inputs.barD
    const bNum = inputs.barNum
    const x = inputs.x
    const y = inputs.y
    const panelH = inputs.panelH
    const starts = []

    const barLength = panelH + y - x

    const gap = (panelLength - bD * bNum) / (bNum + 1)

    if (panelH > 0 && x > 0 && y > 0) {
      setResults((prevState) => {
        return {
          ...prevState,
          barLength: barLength.toFixed(0)
        }
      })

      localStorage.setItem('simplePanel', JSON.stringify(inputs))
    } else {
      setResults((prevState) => {
        return {
          ...prevState,
          barLength: 0.0
        }
      })
    }


    if (panelLength > 0 && bD > 0 && bNum > 0 && bNum < 10000) {
      setResults((prevState) => {
        return {
          ...prevState,
          gap: gap.toFixed(1)
        }
      })

      localStorage.setItem('simplePanel', JSON.stringify(inputs))
    } else {
      setResults((prevState) => {
        return {
          ...prevState,
          gap: 0.0
        }
      })
    }

    if (gap > 0 && bNum < 10000) {
      let start = gap + bD / 2
      const center = gap + bD
      starts.push(Math.round(start))

      for (let i = 1; i < bNum; i++) {
        start += center
        starts.push(Math.round(start))
      }

      setResults((prevState) => {
        return {
          ...prevState,
          starts
        }
      })
    } else {
      setResults((prevState) => {
        return {
          ...prevState,
          starts: []
        }
      })
    }
  }

  const onShowStartPoints = () => {
    setData(results.starts)
    setShowCardStarts(true)
    setType('starts')
    setCallName('Start Points')
  }

  useEffect(() => {
    calculations()
  }, [inputs])

  useEffect(() => {
    const data = localStorage.getItem('simplePanel')
    if (data) {
      setInputs(JSON.parse(data))
    }
  }, [])

  return (
    <main className='container p-4'>
      <div className='flex justify-center'>
        <div className='w-2/3'>
          <picture>
            <source media='(min-width:768px)' srcSet={imgBSmallWeb} type='image/webp' />
            <source media='(min-width:768px)' srcSet={imgBSmallPng} type='image/png' />
            <source media='(min-width:1019px)' srcSet={imgWeb} type='image/webp' />
            <source media='(min-width:1019px)' srcSet={imgPng} type='image/png' />
            <img src={imgPng} alt="Stair BalustradSimple Panel Balustrade" className='lg:max-w-xl xl:max-w-3xl block mx-auto' />
          </picture>
        </div>

        <div className='w-1/3'>

          <h2 className='text-center font-semibold text-white bg-stone-700 p-2 text-xl'>Calculate Gap and Start Points</h2>
          <div className='pt-4 pr-10'>

            <InputCalc label='Panel Length' name='panelLength' onInputChange={handleInputChange} val={inputs.panelLength} />
            <InputCalc label='Bd' name='barD' onInputChange={handleInputChange} val={inputs.barD} />
            <InputCalc label='Bar Number' name='barNum' onInputChange={handleInputChange} val={inputs.barNum} />
            <ResultCalc title='Gap' val={results.gap} />
            <button
              className='btn-outline-zinc mt-2'
              onClick={onShowStartPoints}
            >
              Start Points
            </button>

          </div>

          <h2 className='text-center font-semibold text-white bg-stone-700 p-2 text-xl mt-3'>Calculate Bar Length</h2>
          <div className='pt-4 pr-10'>

            <InputCalc label='Panel Height' name='panelH' onInputChange={handleInputChange} val={inputs.panelH} />  
            <InputCalc label='X' name='x' onInputChange={handleInputChange} val={inputs.x} />
            <InputCalc label='Y' name='y' onInputChange={handleInputChange} val={inputs.y} />
            <ResultCalc title='Bar Length' val={results.barLength} />

          </div>

        </div>

      </div>
      { showCardStarts && <CardStarts showCard={setShowCardStarts} data={data} title={callName} type={type} /> }
    </main>
  )
}

export default SimplePanel