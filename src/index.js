import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let totalSecond = 0;

function count(){
  var i = 5;
  if(i === 6){
    return <h1>Hasdello</h1>
  }
  else return <h1>wrold</h1>
}

class Timer extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        h : 0,
        m : 0,
        s : 0
      }
  }

  addSecond = () => {
    if(this.state.s===59){
    this.setState({
      m: this.state.m+1,
      s: 0
    });
    }
    else this.setState({s: this.state.s+1})
  }
  removeSecond = () => {
    if(this.state.s!==0){
      this.setState({s: this.state.s-1});
    }
  }
  addMinute = () => {
    if(this.state.m===59){
    this.setState({
      h: this.state.h+1,
      m: 0
    });
    }
    else this.setState({m: this.state.m+1})
  }
  removeMinute = () => {
    if(this.state.m!==0){
      this.setState({m: this.state.m-1});
    }
  }
  addHours = () => {
    this.setState({h: this.state.h+1})
  }
  removeHours = () => {
    if(this.state.h!==0){
      this.setState({h: this.state.h-1});
    }
  }

  startCountdown = () => {
    totalSecond = this.state.h*3600+this.state.m*60+this.state.s;
  }

  count = () =>{
    totalSecond-=1;
    console.log(totalSecond);
  }

  render(){
    return (
      <>
      <div class="row center">
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.addHours}
          >/\</button>
        </div>
        <div class="col-4 center">
        <button
          type="button"
          onClick={this.addMinute}
        >/\</button>
        </div>
        <div class="col-4 center">
        <button
          type="button"
          onClick={this.addSecond}
        >/\</button>
        </div>
      </div>
      <div class="row center">
        <div class="col center">
          <h1>{this.state.h}:{this.state.m}:{this.state.s}</h1>
        </div>
      </div>
      <div class="row center">
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.removeHours}
          >\/</button>
        </div>
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.removeMinute}
          >\/</button>
        </div>
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.removeSecond}
          >\/</button>
        </div>
      </div>
      <div class="row">
        <div class="col center">
          <button
            type="button"
            onClick={this.startCountdown}
          >Start</button>
        </div>
      </div>
      </>
    )
  }
}

class Hello extends React.Component{
  render(){
    return count();
  }
}

ReactDOM.render(
  <>
    <Timer />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
