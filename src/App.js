import React, {useState} from 'react'
import './App.css'

function App() {
  const apiKey = 'b079a28dc41651842e4c78085d0f46ef'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if(event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        setCity('')
      })
    }
  }

  return (
      <div className='container'>
        <input className='input'
        placeholder='enter city...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p>hello put a city</p>
          </div>
        ) : (
          <div className='weather-data'>
            <p className='city'>{weatherData.name}</p>
            <p className='temp'>{weatherData.main.temp.toFixed()}ºC</p>
            <p className='weather'>{weatherData.weather[0].main}</p>
          </div>
        )}
      </div>
  )
}

export default App