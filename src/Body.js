import React,{useState, useEffect} from 'react'
import './style.scss'
import clear from './Images/clear.png'
import Hum from './Images/humidity.png'
import Speed from './Images/wind.png'

export default function Body() {
    const[temp, setTemp] = useState(10);
    const[country, setCountry] = useState(0);
    const[humedity, setHumedity] = useState(10);
    const[wind, setWind] = useState(10);
    const[cityName, setCityName] = useState("Kolkata");
    let weather ;
  const play=()=>{
    let inputValue =(document.querySelector(".input").value);
    setCityName(inputValue);
    
  }


    useEffect(()=>{
    const apiKey="4f156663f183103cc5d0e2bee1055547" ;
    const uri = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;
      
      fetch(uri+cityName+`&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => {
        setTemp(Math.round(response.main.temp));
        setCountry(cityName+','+response.sys.country);
        setHumedity(response.main.humidity);
        setWind(response.wind.speed);
        weather = response.weather[0].main ;
        // weather = "Clear";

        console.log(weather);
    let weatherIcon = document.getElementById("icon");

        if(weather=="Clouds"){
          weatherIcon.src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png"
          }
          else if(weather=="Haze"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/1779/1779807.png";
            }
            else if(weather=="Clear"){
              weatherIcon.src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png";
              }   
              else if(weather=="Rain"){
                weatherIcon.src="https://cdn-icons-png.flaticon.com/128/4724/4724094.png";
                }  
                else if(weather=="Mist"){
                  weatherIcon.src="https://cdn-icons-png.flaticon.com/128/990/990469.png";
                  } 
        })
    })

  return (
    <>
    <div className='con'>
      <div className="con1">
        <div className="search">
            <input type="text" name="" placeholder='Enter city Name' className='input' id="" />
            <div className='submit' onClick={play}><span className="material-symbols-outlined">
search
</span></div>
        </div>
        {/* Middle */}
        <div className="mid">
            <img id='icon' src={clear} alt="weather icon" />
            <h2 className='temp'>{temp}°c</h2>
            <h2 className='city' >{country}</h2>
        </div>
        <div className="footer">
            <div className="speed"><img src={Hum} alt="" /><h1 className='per'>{humedity}%</h1><h1 className='hu'>Humedity</h1></div>
            <div className="speed"><img src={Speed} alt="" /><h1 className='km'>{wind}km/h</h1><h1 className='wind'>Wind Speed</h1></div>
        </div>
      </div>
    </div>
    </>
  )
}

   
  