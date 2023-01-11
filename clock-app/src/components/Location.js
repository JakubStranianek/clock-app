import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

export default function Location( {setTimezone} ) {
    const [countryCode, setCountryCode] = useState("");
    const [city, setCity] = useState("");

    const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
          setCountryCode(data.country_code)
          setCity(data.city)
          setTimezone(data.timezone)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <div className='text-white'>
        <p className='uppercase font-[15px] tracking-[3px]'>{"IN " + city + ", " + countryCode}</p>
    </div>
  )
}
