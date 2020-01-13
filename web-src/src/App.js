/*  */
// import 'babel-polyfill';

import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from 'react-error-boundary'
import Weather from './components/Weather'

import actions from './config.json'

const regeneratorRuntime = require("regenerator-runtime");

export default class App extends React.Component {
  constructor (props) {
    super(props)

    console.log('actions.list = ', actions.list)
    console.log('actions = ', actions.resolver)

    // error handler on UI rendering failure
    this.onError = (e, componentStack) => {}

    // component to show if UI fails rendering
    this.fallbackComponent = ({ componentStack, error }) => (
      <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Something went wrong :(</h1>
        <pre>{ componentStack + '\n' + error.message }</pre>
      </React.Fragment>
    )

  }

  async getWeather (e){
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    console.log(country, city)
    const api_call = await fetch(actions.WeatherApp + `?city=${city}&country=${country}`)
    // http://api.openweathermap.org/data/2.5/weather?q=lucerne,switzerland&appid=a0b6a9dab659bfe46cbd4813755b597a&units=metric
    const data = await api_call.json(); 
    console.log(data)
  }
  

  static get propTypes () {
    return {
      runtime: PropTypes.any
    }
  }

  render () {
    return (
      <ErrorBoundary onError={this.onError} FallbackComponent={this.fallbackComponent} >
      <Weather  title="Hello, Adobe IO"
                getWeather={this.getWeather}
      />
        {/* <pre>this.props.runtime &eq;{JSON.stringify(this.props.runtime, 0, '\t')}</pre> */}
      </ErrorBoundary>
    )
  }
}

