import './App.css';
import HeaderCaption from './components/HeaderCaption';
import Time from './components/Time';
import Welcome from './components/Welcome';
import Location from './components/Location';

function App() {
  return (
      <div className="bg-bg-dayMobile bg-no-repeat bg-cover bg-center bg-blend-lighten h-screen md:bg-bg-dayTablet lg:bg-bg-dayDesktop">
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10 bg-black opacity-50"></div>
        
        <div className='relative z-50 px-6'>
          <HeaderCaption />
        </div>

        <div className='absolute z-50 px-6 bottom-0'>
            <Welcome />
            <Time />
            <Location />
          </div>
      </div>
  );
}

export default App;
