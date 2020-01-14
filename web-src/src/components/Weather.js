import React, { Component} from 'react'
const regeneratorRuntime = require("regenerator-runtime");

export default class Weather extends Component{
    render(){
      return(
        <div>
          <h1>{this.props.title}</h1>
          <form onSubmit={this.props.getWeather.bind(this)}>
          <input type="txt" name="city" placeholder="city"/>
          <input type="txt" name="country" placeholder="country"/>
          <button >Get Weather</button>
          <div>{this.props.temperature}</div>
          <div>{this.props.city}</div>
          <div>{this.props.country}</div>
          <div>{this.props.humidity}</div>
          <div>{this.props.description}</div>
          </form>
        </div>
      )
    }
  }
