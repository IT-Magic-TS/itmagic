import { Fragment } from 'react';
import { Header, Footer } from './components';
import Root from './routes/root';
import HeaderMobile from './components/mobile/HeaderMobile';
import RootMobile from './routes/rootMobile'
import FooterMobile from './components/mobile/FooterMobile'

function App() {
  
  return (
    <Fragment>  
      <div className='lg:hidden'>
        <HeaderMobile />
        <RootMobile />
        <FooterMobile />
      </div>
      <div className='hidden lg:block'>
        <Header />
        <Root />
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
