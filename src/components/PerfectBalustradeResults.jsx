import React from 'react'

const PerfectBalustradeResults = ({result}) => {
  const {a1, a2, a3, b1, b2, b3, b4, c1, c2, c3, c4, d1, gap, k1, k2, l1, l2, m, n, x1, x2, y1, y2} = result

  return (
    <div className='pt-4 flex gap-4 justify-center'>
      <ul className='list-none border-r border-stone-400 pr-7'>
        <li className='li-border'><div className='title'>A1: </div><div className='result'>{a1}</div></li>
        <li className='li-border'><div className='title'>A2: </div><div className='result'>{a2}</div></li>
        <li className='li-border'><div className='title'>A3: </div><div className='result'>{a3}</div></li>
        <li className='li-border'><div className='title'>B1: </div><div className='result'>{b1}</div></li>
        <li className='li-border'><div className='title'>B2: </div><div className='result'>{b2}</div></li>
        <li className='li-border'><div className='title'>B3: </div><div className='result'>{b3}</div></li>
        <li className='li-border'><div className='title'>B4: </div><div className='result'>{b4}</div></li>
        <li className='li-border'><div className='title'>C1: </div><div className='result'>{c1}</div></li>
        <li className='li-border'><div className='title'>C2: </div><div className='result'>{c2}</div></li>
        <li className='li-border'><div className='title'>C3: </div><div className='result'>{c3}</div></li>
        <li className='li-border'><div className='title'>C4: </div><div className='result'>{c4}</div></li>
        <li className='li-border'><div className='title'>D1: </div><div className='result'>{d1}</div></li>
      </ul>
      <ul className='list-none'>
        <li className='li-border'><div className='title'>X1: </div><div className='result'>{x1}</div></li>
        <li className='li-border'><div className='title'>X2: </div><div className='result'>{x2}</div></li>
        <li className='li-border'><div className='title'>Y1: </div><div className='result'>{y1}</div></li>
        <li className='li-border'><div className='title'>Y2: </div><div className='result'>{y2}</div></li>
        <li className='li-border'><div className='title'>Gap: </div><div className='result'>{gap}</div></li>
        <li className='li-border'><div className='title'>K1: </div><div className='result'>{k1}</div></li>
        <li className='li-border'><div className='title'>K2: </div><div className='result'>{k2}</div></li>
        <li className='li-border'><div className='title'>L1: </div><div className='result'>{l1}</div></li>
        <li className='li-border'><div className='title'>L2: </div><div className='result'>{l2}</div></li>
        <li className='li-border'><div className='title'>M: </div><div className='result'>{m}</div></li>
        <li className='li-border'><div className='title'>N: </div><div className='result'>{n}</div></li>
      </ul>
    </div>
  )
}

export default PerfectBalustradeResults