import Footer from './components/Footer/Footer.jsx'
import TopBanner from './components/TopBanner/TopBanner.jsx'
import Intro from './components/Intro/Intro.jsx';
import LatestProduct from './components/LatestProduct/LatestProduct.jsx';

import './App.css';

function App() {
  

  return (
    <>
      <TopBanner />
      <div className="contentContainer">
        <Intro />
        <LatestProduct />
      </div>
      <Footer />
    </>
  )
}

export default App