import "./App.css";
import HeaderCaption from "./components/HeaderCaption";
import Time from "./components/Time";
import Welcome from "./components/Welcome";
import Location from "./components/Location";
import Button from "./components/Button";

function App() {
  return (
    <div className="bg-bg-dayMobile bg-no-repeat bg-cover bg-center bg-blend-lighten h-screen md:bg-bg-dayTablet lg:bg-bg-dayDesktop">
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10 bg-black opacity-50"></div>

      <div className="px-6 md:pl-16 lg:pl-40">
        <div className="relative z-50">
          <HeaderCaption />
        </div>

        <div className="absolute z-50 bottom-0">

        <div className="lg:pb-24 lg:flex lg:items-end lg:justify-between">
          <div>
          <Welcome />
          
          <div className="py-4">
            <Time />
          </div>
          
          <Location />
          </div>
          
          <div className="pt-12 pb-10 md:pt-20 md:pb-16 lg:py-0 lg:ml-96">
            <Button />
          </div>
        </div> 
          
        </div>
      </div>
    </div>
  );
}

export default App;
