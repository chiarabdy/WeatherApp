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
          <div className="weatherApp__main">
          {this.props.city && this.props.country && <p className="weatherApp__key">Location: <span weather__value>{this.props.city}, {this.props.country}</span></p>}
          {this.props.temperature && <p className="weatherApp__key">Temperature: <span className="weather__value">{this.props.temperature}</span></p>}
          {this.props.humidity && <p className="weatherApp__key">Humidity: <span className="weather__value">{this.props.humidity}</span></p>}
          {this.props.description && <p className="weatherApp__key">Condition: <span className="weather__value">{this.props.description}</span></p>}
          {this.props.pressure && <p className="weatherApp__key">Pressure: <span className="weather__value">{this.props.pressure}</span></p>}
          {this.props.timezone && <p className="weatherApp__key">Timezone: <span className="weather__value">{this.props.timezone}</span></p>}
          {this.props.visibility && <p className="weatherApp__key">Visibility: <span className="weather__value">{this.props.timezone}</span></p>}
          {this.props.windCondition && <p className="weatherApp__key">WindCondition: <span className="weather__value">{this.props.windCondition}</span></p>}
          </div>
          </form>
        </div>
      )
    }
  }
