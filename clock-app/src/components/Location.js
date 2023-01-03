import React, { useState } from 'react'
import { useEffect } from 'react'
import Geocode from "react-geocode";

export default function Location() {
    const [countryCode, setCountryCode] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    Geocode.setApiKey("AIzaSyAJ0RxqmihZVc1PixpxKGQfrC1A0AaNTnE");

    function getElementText(response, elementName) {
        return response.getElementsByTagName(elementName)[0].innerHTML;
    }
    
    useEffect(() => {
        fetch('http://api.hostip.info').then(response => {
         return response.text();
    }).then(xml => { 
        return (new window.DOMParser()).parseFromString(xml, "text/xml");
    }).then(xmlDoc => {
        setCountryCode(getElementText(xmlDoc , "countryAbbrev"));
    });
     },[])

     useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setIsLoading(false);
          });
     },[])

     
     useEffect(() => {
        Geocode.fromLatLng(latitude, longitude).then(
            (response) => {
              const cityVar = response.results[0].address_components[1].long_name;
              setCity(cityVar)
              console.log(response)
            },
            (error) => {
              console.error(error);
            }
          );
     })
        

  return (
    <div className='text-white'>
        <p className='uppercase font-[15px] tracking-[3px]'>{"IN " + city + ", " + countryCode}</p>
    </div>
  )
}
