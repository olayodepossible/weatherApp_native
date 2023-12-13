import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'
import axios from "axios"; 
import {WEATHER_API_KEY} from '@react-native-dotenv'

export const useGetWeatherData = () => {

    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState([])
    const [longi, setLongi] = useState([])
    const [weather, setWeather] = useState([])
    const [error, setError] = useState(null)
  
    const fetchWeatherData = async () => { 
      try {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${longi}&appid=${WEATHER_API_KEY}&units=metric`)
        setWeather(res.data)
      } catch (error) {
        setError("Could not load Weather data")
      }
      finally{
        setLoading(false)
      }
      
    };

    useEffect(() => {
      (async() =>{
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
          setError('permission to access location denied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude)
        setLongi(location.coords.longitude)
        await fetchWeatherData()
      })()
    }, [lat, longi]);
  return [loading, error, weather]
}

