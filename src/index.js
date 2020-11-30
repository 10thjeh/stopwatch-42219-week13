import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import kodok from './mlg.gif';

let remaining = -1;

class Timer extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        h : 0,
        m : 0,
        s : 0,
        active : false,
        paused : false,
        stop : false,
        done : false,
        init : true
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

  pause = () => {
    this.setState({paused: true})
  }

  stop = () => {
    this.setState({stop: true,h: 0,m: 0,s: 0});
  }

  okeokeoke = () => {
    document.getElementById('kodoka').style.display = "none";
    document.getElementById('kodokb').style.display = "none";
    document.getElementById('kodokc').style.display = "none";
    document.getElementById('kodokd').style.display = "none";
    document.getElementById('oke').style.display = "none";
    this.setState({done: false});
  }

  startCountdown = () => {
    this.setState({active: true,paused: false,stop: false,init: false});
    remaining = this.state.h*3600+this.state.m*60+this.state.s;
    let x = setInterval(()=>{
      remaining--;
      console.log(remaining);
      if(this.state.s!==0){
        this.setState({s: this.state.s-1});
      }
      else if(this.state.m!==0){
        this.setState({m: this.state.m-1});
        this.setState({s: 59})
      }
      else if(this.state.h!==0){
        this.setState({m: 59});
        this.setState({s: 59});
        this.setState({h: this.state.h-1});
      }
      if(this.state.paused===true){
        this.setState({active: false});
        clearInterval(x);
      }
      if(remaining<=0 || this.state.stop===true){
        this.setState({active: false});
        this.setState({stop: false});
        this.setState({h: 0,m:0, s:0});
        this.setState({done: true});
        if(this.state.done===true && this.state.init===false){
          document.getElementById('kodoka').style.display = "block";
          document.getElementById('kodokb').style.display = "block";
          document.getElementById('kodokc').style.display = "block";
          document.getElementById('kodokd').style.display = "block";
          document.getElementById('oke').style.display = "block";
        }
        clearInterval(x);
      }
    },1000)
  }

  render(){
    return (
      <>
      <div class="row center">
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.addHours}
            disabled={this.state.active}
          >/\</button>
        </div>
        <div class="col-4 center">
        <button
          type="button"
          onClick={this.addMinute}
          disabled={this.state.active}
        >/\</button>
        </div>
        <div class="col-4 center">
        <button
          type="button"
          onClick={this.addSecond}
          disabled={this.state.active}
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
            disabled={this.state.active}
          >\/</button>
        </div>
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.removeMinute}
            disabled={this.state.active}
          >\/</button>
        </div>
        <div class="col-4 center">
          <button
            type="button"
            onClick={this.removeSecond}
            disabled={this.state.active}
          >\/</button>
        </div>
      </div>
      <div class="row center">
        <div class="col center">
        <button
          type="button"
          onClick={this.pause}
          disabled={!this.state.active}
        >Pause</button>
          <button
            type="button"
            onClick={this.startCountdown}
            disabled={this.state.active}
          >Start</button>
          <button
            type="button"
            onClick={this.stop}
          >Reset</button>
        </div>
      </div>
      <div class="row center">
        <div class="col center">
          <img id="kodoka" src={kodok} style={{display: 'none'}}></img>
        </div>
      </div>
      <div class="row center">
        <div class="col-4 center">
          <img id="kodokb" src={kodok} style={{display: 'none'}}></img>
        </div>
        <div class="col-4 center">
          <button
          id="oke"
          onClick={this.okeokeoke}
          style={{display: 'none'}}
          >Oke Oke!</button>
        </div>
        <div class="col-4 center">
          <img id="kodokc" src={kodok} style={{display: 'none'}}></img>
        </div>
      </div>
      <div class="row center">
        <div class="col center">
          <img id="kodokd" src={kodok} style={{display: 'none'}}></img>
        </div>
      </div>
      </>
    )
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
