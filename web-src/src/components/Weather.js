import React, { Component} from 'react'

class Weather extends Component{
    render(){
      return(
        <div>
          <h1>{this.props.title}</h1>

          <form onSubmit={this.props.getWeather}>
          <input type="txt" name="city" placeholder="cities"/>
          <input type="txt" name="country" placeholder="cities"/>
          <button >Get Weather</button>
          </form>
        </div>
      )
    }
  }

  export default Weather;