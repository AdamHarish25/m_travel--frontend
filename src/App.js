import Navbar from './Contents/Components/Navbar';
import { useViewport } from './Contents/Components/Viewport';
import BookingTrip from './Contents/Sections/BookingTrip';
import Brands from './Contents/Sections/Brands';
import Destinations from './Contents/Sections/Destinations';
import Home from './Contents/Sections/Home';
import MobileWarning from './Contents/Sections/mobileWarning';
import Offers from './Contents/Sections/Offers';
import Testimonial from './Contents/Sections/Testimonial';

function App () {
  
  const viewport = useViewport().windowSize;


  return viewport.innerWidth < 950 ? (
    <div id='<=mobile'>
      <MobileWarning/>
    </div>
  ) : (
    <div id=">=Tablet" className='relative overflow-hidden'>

        <Home />
        <Offers />
        <Destinations />
        <BookingTrip />
        <Testimonial />
        <Brands />
        
        <Navbar />
    </div>
  );
}

export default App;
