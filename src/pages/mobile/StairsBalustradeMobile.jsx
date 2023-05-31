import useTitle from '../../hooks/useTitle';
import imgWeb from '../../assets/images/stair.webp'
import imgPng from '../../assets/images/stair.png'
import abcSmallWeb from '../../assets/images/abc-sm.webp'
import abcSmallPng from '../../assets/images/abc-sm.png'
import { useEffect, useState } from 'react';
import { InputCalc, ResultCalc, CardStarts } from '../../components'

const StairsBalustradeMobile = ({title}) => {
  useTitle(title)

  const [showCardStarts, setShowCardStarts] = useState(false)
  const [data, setData] = useState([])
  const [type, setType] = useState('')
  const [callName, setCallName] = useState('')

  const [inputs, setInputs] = useState({
    going: 0,
    barD: 0,
    barNum: 0,
    d: 0,
    rise: 0,
    stepNum: 0,
    H: 0,
    Hd: 0,
    x: 0
  })

  const [results, setResults] = useState({
    gap: 0,
    L: 0,
    angle: 0,
    startPoints: [],
    barsLength: []
  })

  const onChangeGoing = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        going: +e.target.value
      }
    })
  }

  const onChangeBd = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        barD: +e.target.value
      }
    })
  }

  const onChangeBarNum = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        barNum: +e.target.value
      }
    })
    calculateResults()
  }

  const onChangeD = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        d: +e.target.value
      }
    })
  }

  const onChangeH = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        H: +e.target.value
      }
    })
  }

  const onChangeHd = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        Hd: +e.target.value
      }
    })
  }

  const onChangeX = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        x: +e.target.value
      }
    })
  }

  const onChangeRise = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        rise: +e.target.value
      }
    })
  }

  const onChangeStepNum = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        stepNum: +e.target.value
      }
    })
  }

  const calculateResults = () => {
    const going = inputs.going
    const Bd = inputs.barD
    const BNum = Math.round(inputs.barNum)
    const d = inputs.d
    const starts = []

    if (going > 0 && Bd > 0 && BNum > 0) {
      const gap = (going - BNum * Bd) / BNum 

      if (d > 0 && gap > 0) {
        let start = gap + Bd / 2 - d
        const center = gap + Bd
        starts.push(Math.round(start))
        for (let i = 1; i < BNum; i++) {
          start += center
          starts.push(Math.round(start))
        }
        setResults((prevState) => {
          return {
            ...prevState,
            startPoints: starts
          }
        })
      } else {
        setResults((prevState) => {
          return {
            ...prevState,
            startPoints: []
          }
        })
      }

      if (gap > 0) {
        setResults((prevState) => {
          return {
            ...prevState,
            gap: gap.toFixed(1)
          }
        })
      }

      // Calculate L
      const rise = inputs.rise
      const stepNumber = inputs.stepNum

      const x = Math.pow(rise, 2) + Math.pow(going, 2)
      const dStep = Math.sqrt(x)
      const L = dStep * stepNumber
      if (rise > 0 && going > 0 && L > 0) {
        setResults((prevState) => {
          return {
            ...prevState,
            L: L.toFixed(0)
          }
        })
      }

      // Calculate Agle
      const angleRadian = Math.atan(rise / going)
      let angelDegree = (180 / Math.PI) * angleRadian
      angelDegree = 90 - angelDegree

      if (rise > 0 && going > 0 && angelDegree > 0) {
        setResults((prevState) => {
          return {
            ...prevState,
            angle: angelDegree.toFixed(2)
          }
        })
      } else {
        setResults((prevState) => {
          return {
            ...prevState,
            angle: 0
          }
        })
      }

      // Calculate Bars Length
      const H = inputs.H
      const Hd = inputs.Hd
      const XX = inputs.x

      const barCentre = gap + Bd
      const d1 = gap - d + Bd

      const y = Hd / Math.cos(angleRadian)

      const x1 = d1 * Math.tan(angleRadian)
      const x2 = barCentre * Math.tan(angleRadian)
      const barHHDX = H - y + XX

      let barLength_x = barHHDX + x1

      const barsLength = []
      barsLength.push(Math.round(barLength_x))

      for (let i = 1; i < BNum; i++) {
        barLength_x += x2
        barsLength.push(Math.round(barLength_x))
      }

      if (barsLength.length > 0) {
        setResults((prevState) => {
          return {
            ...prevState,
            barsLength
          }
        })
      } else {
        setResults((prevState) => {
          return {
            ...prevState,
            barsLength: []
          }
        })
      }

      localStorage.setItem('stairBalustrade', JSON.stringify(inputs))
    } else {
      setResults((prevState) => {
        return {
          ...prevState,
          gap: 0,
          L: 0,
          angle: 0
        }
      })
    }
    if (!going) {
      setResults((prevState) => {
        return {
          ...prevState,
          L: 0,
          angle: 0
        }
      })
    }
  }

  useEffect(() => {
    calculateResults()
  }, [inputs])

  useEffect(() => {
    const data = localStorage.getItem('stairBalustrade')
    if (data) {
      setInputs(JSON.parse(data))
      calculateResults()
    }
  }, [])

  const onShowStartPoints = () => {
    setData(results.startPoints)
    setShowCardStarts(true)
    setType('starts')
    setCallName('Start Points')
  }

  const onShowBarsLength = () => {
    setData(results.barsLength)
    setShowCardStarts(true)
    setType('bars')
    setCallName('Bars Length')
  }

  return (
    <div className='container-mobile'>

      <picture>
        <source srcSet={imgWeb} type='image/webp' />
        <source srcSet={imgPng} type='image/png' />
        <img src={imgPng} alt="Stair Balustrade" className='max-w-lg w-[100%] block mx-auto border border-stone-300 p-2 rounded-sm -mt-4' />
      </picture>

      <h2 className='text-center font-semibold text-white bg-stone-700 p-2 text-xl mt-2'>Calculate Gap and Start Points</h2>
      <div className='pt-4 pr-10'>
        <InputCalc label='going' name='going' onInputChange={onChangeGoing} val={inputs.going} />
        <InputCalc label='Bd' name='barDiameter' onInputChange={onChangeBd} val={inputs.barD} />
        <InputCalc label='Bar Number' name='barNumber' onInputChange={onChangeBarNum} val={inputs.barNum} />
        <InputCalc label='d' name='d' onInputChange={onChangeD} val={inputs.d} />
        <ResultCalc title='gap' val={results.gap} />
        <button
          className='btn-outline-zinc mt-2 block mx-auto'
          onClick={onShowStartPoints}
        >
          Start Points
        </button>
      </div>

      <h2 className='text-center font-semibold text-white bg-stone-700 p-2 text-xl mt-3'>Calculate Handrail and Angle</h2>
      <div className='pt-4 pr-10'>
        <InputCalc label='rise' name='rise' onInputChange={onChangeRise} val={inputs.rise} />
        <InputCalc label='Step Number' name='stepNum' onInputChange={onChangeStepNum} val={inputs.stepNum} />
        <ResultCalc title='L' val={results.L} />
        <ResultCalc title='Angle' val={results.angle} />
      </div>

      <picture>
        <source srcSet={abcSmallWeb} type='image/webp' />
        <source srcSet={abcSmallPng} type='image/png' />
        <img src={abcSmallPng} alt="Stair Balusters" className='max-w-lg block mx-auto border border-stone-300 p-2 rounded-sm mt-3 w-[100%]' />
      </picture>

      <h2 className='text-center font-semibold text-white bg-stone-700 p-2 text-xl mt-3'>Calculate Bars Length</h2>
      <div className='pt-4 pr-10'>
        <InputCalc label='H' name='H' onInputChange={onChangeH} val={inputs.H} />
        <InputCalc label='Hd' name='Hd' onInputChange={onChangeHd} val={inputs.Hd} />
        <InputCalc label='x' name='x' onInputChange={onChangeX} val={inputs.x} />
        <button
          className='btn-outline-zinc mt-2 block mx-auto'
          onClick={onShowBarsLength}
        >
          Bars Length
        </button>
      </div>

      { showCardStarts && <CardStarts showCard={setShowCardStarts} data={data} title={callName} type={type} /> }

    </div>
  )
}

export default StairsBalustradeMobile