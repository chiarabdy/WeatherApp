import React, { Component} from 'react'
import "regenerator-runtime/runtime";

export default class Weather extends Component{
  
    render(){
      return(
        <div>
          <h1>{this.props.title}</h1>
          <form onSubmit={this.props.getWeather.bind(this)}>
          <input type="txt" name="city" placeholder="city"/>
          <input type="txt" name="country" placeholder="country"/>
          <button >Get Weather</button>
          {/* Add location, Temp, humidity, condition */}
          <div>
          {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
          {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
          {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
          {this.props.description && <p>Condition: {this.props.description}</p>}

          </div>
          </form>
        </div>
      )
    }
  }
