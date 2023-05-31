import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, PageNotFound, ProductDetail, ProductList, Calculations, BalustradeStairs, Cart, PerfectBalustrade, SimplePanel, JobCost, PrivacyPolicy } from '../pages';


const Root = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home title=' Magic' />} end />
        <Route path='products' element={<ProductList title=' Magic - Products' />} />
        <Route path='cart' element={<Cart title='Cart' />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='privacy' element={<PrivacyPolicy title=' Magic - Privacy' />} />
        <Route path='calculations' element={<Calculations title=' Magic - Calculations' />}>
          <Route path='' element={<PerfectBalustrade title=' Magic - Perfect Balustrade' />} />
          <Route path='stairs-balustrade' element={<BalustradeStairs title=' Magic - Balustrade Stairs' />} />
          <Route path='panel' element={<SimplePanel title=' Magic - Simple Panel' />} />
          <Route path='job-cost' element={<JobCost />} />
        </Route>
        <Route path='*' element={<PageNotFound title=' Magic - 404' />} />
      </Routes>
    </Fragment>
  )
}

export default Root