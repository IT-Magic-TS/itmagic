import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeMobile from '../pages/mobile/HomeMobile';
import PrivacyPolicy from '../pages/PrivacyPolicy'
import EtsyModels from '../pages/mobile/EtsyModels';
import EtsyBookmarks from '../pages/mobile/EtsyBookmarks';
import JobCostMobile from '../pages/mobile/JobCostMobile';
import { PageNotFound } from '../pages';
import SimplePanelMobile from '../pages/mobile/SimplePanelMobile';
import StairsBalustradeMobile from '../pages/mobile/StairsBalustradeMobile';


const RootMobile = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomeMobile title=' Magic' />} end />
        <Route path='products' element={<EtsyModels title=' Magic - Etsy Models' />} />
        <Route path='cart' element={<EtsyBookmarks title=' Magic - Cart' />} />
        <Route path='job-cost' element={<JobCostMobile title=' Magic - Job Cost' />} />
        <Route path='stairs-balustrade' element={<StairsBalustradeMobile title=' Magic - Stair Balustrade' />} />
        <Route path='simple-panel' element={<SimplePanelMobile title=' Magic - Simple Panel' />} />
        <Route path='privacy' element={<PrivacyPolicy title=' Magic - Privacy' />} />
        <Route path='*' element={<PageNotFound title=' Magic - 404' />} />
      </Routes>
    </Fragment>
  )
}

export default RootMobile