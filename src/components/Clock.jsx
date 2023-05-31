import { useEffect, useState } from 'react';


const Clock = () => {

  const images = [
    'clock-black.png',
    'clock-blue.png',
    'clock-brick.png',
    'clock-bricks2.png',
    'clock-brown.png',
    'clock-green.png',
    'clock-red.png',
    'clock-sand.png'
  ]

  const [ elSrc, setElSrc ] = useState(`/images/clock/${images[0]}`)

  useEffect(() => {
    const interval = setInterval(() => {
      const hourEl = document.getElementById('hour')
      const minEl = document.getElementById('minute')
      const secEl = document.getElementById('secunda')

      const date = new Date()

      const h = date.getHours()
      const min = date.getMinutes()
      const sec = date.getSeconds()

      let difH = 0
      let difMin = 0

      min === 60 ? difH = 0 : difH = min / 2
      sec === 60 ? difMin = 0 : difMin = sec / 12

      const hoursDeg = h / 12 * 360 - 90 + difH
      const minDeg = min / 60 * 360 - 92 + difMin
      const secDeg = sec / 60 * 360

      hourEl.style.transform = `rotate(${hoursDeg}deg)`
      minEl.style.transform = `rotate(${minDeg}deg)`
      secEl.style.transform = `rotate(${secDeg}deg)`
    }, 1000)

    let num = 0

    const interval2 = setInterval(() => {
      setElSrc(`/images/clock/${images[num]}`)
      num = num + 1
      if (num === images.length) num = 0
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(interval2)
    }
  }, [])

  return (
    <div className='relative h-auto w-full max-w-2xl mx-auto'>

      <img src={elSrc} alt="clock" />

      <div id='hour' className='absolute w-[40%] h-[40%] -m-[20%] top-1/2 left-1/2'>
        <img src="/images/clock/hour.png" alt="hour" />
      </div>

      <div id='minute' className='absolute w-[40%] h-[40%] -m-[20%] top-1/2 left-1/2'>
        <img src="/images/clock/min.png" alt="minutes" />
      </div>

      <div id='secunda' className='absolute w-[40%] h-[40%] -m-[20%] top-1/2 left-1/2'>
        <img src="/images/clock/sec.png" alt="secundes" />
      </div>

    </div>
  ) 
}

export default Clock