import PerfectBalustradeDim from '../../assets/images/ca1.png'
import ImgA from '../../assets/images/2a.png'
import ImgB from '../../assets/images/3a.png'
import ImgC from '../../assets/images/4a.png'
import BandHoopDim from '../../assets/images/dc.png'
import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import PerfectBalustradeResults from '../../components/PerfectBalustradeResults';
import useTitle from '../../hooks/useTitle';

const PerfectBalustrade = ({title}) => {
  useTitle(title)
  const [showResult, setShowResult] = useState(true)
  const [inputs, setInputs] = useState({
    stepNumberA: 0,
    stepNumberB: 0,
    stepNumberC: 0,
    stairWidth: 0,
    treadGoing: 0,
    barDiameter: 0,
    hoopDiameter: 0,
    gapBar: 0,
    balustradeCentre: 0
  })

  const [result, setResult] = useState({
    a1: 0,
    a2: 0,
    a3: 0,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    gap: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    k1: 0,
    k2: 0,
    l1: 0,
    l2: 0
  })

  const onChangeStepA = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        stepNumberA: +e.target.value
      }
    })
  }

  const onChangeStepB = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        stepNumberB: +e.target.value
      }
    })
  }

  const onChangeStepC = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        stepNumberC: +e.target.value
      }
    })
  }

  const onChangeStairWidth = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        stairWidth: +e.target.value
      }
    })
  }

  const onChangeTreadGoing = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        treadGoing: +e.target.value
      }
    })
  }

  const onChangeBarDiameter = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        barDiameter: +e.target.value
      }
    })
  }

  const onChangeGapBar = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        gapBar: +e.target.value
      }
    })
  }

  const onChangehoopDiameter = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        hoopDiameter: +e.target.value
      }
    })
  }

  const onChangeBalustradeCentre = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        balustradeCentre: +e.target.value
      }
    })
  }

  const calculateResults = () => {
    const bD = inputs.barDiameter
    const hD = inputs.hoopDiameter
    const d = inputs.gapBar
    const going = inputs.treadGoing
    const width = inputs.stairWidth
    const stepsA = inputs.stepNumberA
    const stepsB = inputs.stepNumberB
    const stepsC = inputs.stepNumberC
    const BC = inputs.balustradeCentre

    if (bD > 0 && hD > 0 && d > 0 && going > 0 && width > 0 && stepsA > 0 && stepsB > 0 && stepsC > 0 && BC > 0) {
      const gap = (going - hD - bD) / 2
      const x = gap - d
      const Y1 = x + hD + gap + bD / 2
      const A3 = Y1 + width - BC
      const X1 = A3 - width
      const A2 = stepsA * going
      const A1 = A2 + A3
      const Y2 = bD/2 + gap + hD + gap + bD + d
      const X2 = Y2 -BC
      const B2 = width + X2
      const B3 = stepsB * going
      const K1 = x + hD + gap + bD/2 
      const B4 = width - BC + K1        
      const B1 = B2 + B3 + B4

      const L1 = B4 -width
      const K2 = bD/2 + gap + hD + gap + bD + d
      const L2 = K2 - BC

      const C3 = L2 + width
      const C4 = stepsC * going
      const C2 = C3 + C4

      const N = x + hD + gap + bD/2
      const M = N - BC
      const C1 = C2 + M
      const D1 = B1 - width


      setResult((prevState) => {
        return {
          ...prevState,
          a1: A1.toFixed(0),
          a2: A2.toFixed(0),
          a3: A3.toFixed(0),
          x1: X1.toFixed(0),
          x2: X2.toFixed(0),
          y1: Y1.toFixed(0),
          y2: Y2.toFixed(0),
          gap: gap.toFixed(1),
          b1: B1.toFixed(0),
          b2: B2.toFixed(0),
          b3: B3.toFixed(0),
          b4: B4.toFixed(0),
          k1: K1.toFixed(0),
          k2: K2.toFixed(0),
          l1: L1.toFixed(0),
          l2: L2.toFixed(0),
          c1: C1.toFixed(0),
          c2: C2.toFixed(0),
          c3: C3.toFixed(0),
          c4: C4.toFixed(0),
          n: N.toFixed(0),
          m: M.toFixed(0),
          d1: D1.toFixed(0)
        }
      })
      localStorage.setItem('perfectBalustrade', JSON.stringify(inputs))
    }
  }

  useEffect(() => {
    calculateResults()
  }, [inputs])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('perfectBalustrade'))

    if (data) {
      setInputs(data)
      calculateResults()
    }
  }, [])

  // console.log(result)

  return (
    <main>
      <div className='flex'>
        <div className='w-2/3'>
          <img src={PerfectBalustradeDim} alt="Perfect Stair Balustrade" />
          <div className='flex'>
            <img src={ImgA} alt="Perfect Stair Balustrade Section A" className='w-1/3' />
            <img src={ImgB} alt="Perfect Stair Balustrade Section A" className='w-1/3' />
            <img src={ImgC} alt="Perfect Stair Balustrade Section A" className='w-1/3' />
          </div>
        </div>
        <div className='w-1/3'>

          <div className='pt-3'>

            <Input label='Stair Width:' name='stairWidth' onInputChange={onChangeStairWidth} val={inputs.stairWidth}  /> 

            <Input label='BC (Balustrade Center):' name='balustradeCenter' onInputChange={onChangeBalustradeCentre} val={inputs.balustradeCentre}  />

            <Input label='Treads A (A1, A2, ..., Ai):' name='stepsA' onInputChange={onChangeStepA} val={inputs.stepNumberA} /> 

            <Input label='Treads B (B1, B2, ..., Bi):' name='stepsB' onInputChange={onChangeStepB} val={inputs.stepNumberB} />

            <Input label='Treads C (C1, C2, ..., Ci):' name='stepsC' onInputChange={onChangeStepC} val={inputs.stepNumberC} />

            <Input label='Tread Going:' name='treadGoing' onInputChange={onChangeTreadGoing} val={inputs.treadGoing} />

            <Input label='D (Gap Bar-Tread):' name='gapBar' onInputChange={onChangeGapBar} val={inputs.gapBar} />

            <Input label='Bd (Bar Diameter):' name='barDiameter' onInputChange={onChangeBarDiameter} val={inputs.barDiameter} />

            <Input label='Hd (Hoop Diameter):' name='hoopDiameter' onInputChange={onChangehoopDiameter} val={inputs.hoopDiameter} />

          </div>

          <div className='flex gap-3 border-t pt-2 border-zinc-600 justify-center'>
            <button className='btn-outline-green block' onClick={() => setShowResult(true)}>Show Result</button>
            <button className='btn-outline-zinc block' onClick={() => setShowResult(false)}>Show Drawing</button>
          </div>

          <div>

            {
              showResult ? (<PerfectBalustradeResults result={result} />) : 
              
              (<div>
                <img src={BandHoopDim} alt="bars and hoops dimensions" />
              </div>)
            }

          </div>

        </div>
      </div>
    </main>
  )
}

export default PerfectBalustrade