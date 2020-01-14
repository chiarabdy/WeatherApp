/*  */
// import 'babel-polyfill';

import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from 'react-error-boundary'
import Weather from './components/Weather'

import actions from './config.json'

import "regenerator-runtime/runtime";

export default class App extends React.Component {

  constructor(props){
    super(props)

    // Printing: Temperature - City - Coutry - Humidity - Description - Error

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      pressure: undefined,
      timezone: undefined,
      visibility: undefined,
      windCondiiton: undefined,
      
      error: undefined
    }
  }
  
  async getWeather (e){
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(actions.WeatherApp + `?city=${city}&country=${country}`)
    // http://api.openweathermap.org/data/2.5/weather?q=lucerne,switzerland&appid=a0b6a9dab659bfe46cbd4813755b597a&units=metric
    const data = await api_call.json(); 
    console.log(data)
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        timezone: data.sys.timezone,
        visibility: data.sys.visibility,
        windCondiiton: data.wind.speed,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        timezone: undefined,
        visibility: undefined,
        windCondiiton: undefined,
        error: "Please enter the values."
      });
    }
  }

  // static get propTypes () {
  //   return {
  //     runtime: PropTypes.any
  //   }
  // }

  render () {
    return (
      <Weather
        title="Weather Application"
        getWeather={this.getWeather.bind(this)}
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        pressure= {this.state.pressure} 
        timezone= {this.state.timezone} 
        visibility= {this.state.visibility} 
        windCondiiton= {this.state.windCondiiton} 
        error={this.state.error}
      />
    )
  }
}

