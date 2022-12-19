import Navbar from './Contents/Components/Navbar';
import { useViewport } from './Contents/Components/Viewport';
import Home from './Contents/Sections/Home';
import MobileWarning from './Contents/Sections/mobileWarning';

function App () {
  
  const viewport = useViewport().windowSize;


  return viewport.innerWidth < 860 ? (
    <div id='<=mobile'>
      <MobileWarning/>
    </div>
  ) : (
    <div id=">=Tablet" className='relative'>

      <Home />

      <Navbar />
    </div>
  );
}

export default App;
