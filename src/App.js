import Navbar from './Contents/Components/Navbar';
import { useViewport } from './Contents/Components/Viewport';
import Destinations from './Contents/Sections/Destinations';
import Home from './Contents/Sections/Home';
import MobileWarning from './Contents/Sections/mobileWarning';
import Offers from './Contents/Sections/Offers';

function App () {
  
  const viewport = useViewport().windowSize;


  return viewport.innerWidth < 950 ? (
    <div id='<=mobile'>
      <MobileWarning/>
    </div>
  ) : (
    <div id=">=Tablet" className='relative overflow-x-hidden'>

        <Home />
        <Offers />
        <Destinations/>
        
        <Navbar />
    </div>
  );
}

export default App;
