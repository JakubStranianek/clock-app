import "./App.css";
import HeaderCaption from "./components/HeaderCaption";
import Time from "./components/Time";
import Welcome from "./components/Welcome";
import Location from "./components/Location";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Popup from "./components/Popup";

function App() {
  const date = new Date()
  const [hour] = useState(date.getHours())
  const [main, setMain] = useState(true);
  const [timezone, setTimezone] = useState();

  useEffect(() => {
    setMain(!main)    
  }, [])

  return (
    <div className={hour <= 17 ? "bg-dayMobile bg-no-repeat bg-cover bg-center bg-blend-lighten h-screen md:bg-dayTablet lg:bg-dayDesktop" : 
    "bg-nightMobile bg-no-repeat bg-cover bg-center bg-blend-lighten h-screen md:bg-nightTablet lg:bg-nightDesktop"}>

      <div className="h-full w-11/12 mx-auto md:w-10/12 lg:w-3/4">
        <div className="relative z-50 h-full lg:w-full flex flex-col justify-between">
        {main ?  
         ""
        : 
        <header className="lg:w-2/3">
        <HeaderCaption />
      </header> }

          <main className={main ? "w-full absolute top-[15%] md:top-[5%] lg:top-[10%]" : ""}>
            <div className="lg:pb-24 lg:flex lg:items-end lg:justify-between">
              <div>
                <Welcome setWelcome={hour} />

                <div className="py-4">
                  <Time />            
                </div>

                <Location setTimezone={setTimezone} />
              </div>

              <div className="pt-12 pb-10 md:pt-20 md:pb-16 lg:py-0">
                <Button setMain={setMain}/>                           
              </div>
            </div>
          </main>
        </div>
      </div>

      {main ? 
      <Popup setPopup={hour} sentTimezone={timezone} /> 
      : ""}
    </div>
  );
}

export default App;
