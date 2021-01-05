import React from 'react';
import './App.css'


class Clockface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          breakLength: 5 ,
          sessionLength : 25 ,
          seconds : 0,
        };

    // increment binders 
       this.increment2 = this.incrementSessionLength.bind(this);
       this.increment = this.incrementBreakLength.bind(this);
       this.decrement2 = this.decrementSessionLength.bind(this);
       this.decrement = this.decrementBreakLength.bind(this);
       this.resetCounter = this.resetCounter.bind(this)
       this.begin = this.begin.bind(this)
      }
     // increment the break length 
        incrementBreakLength(){
         if(this.state.breakLength < 60){  
            this.setState (state => {
           return {breakLength : state.breakLength+1} 
            }) 
           }
         };
     // decrement the break length
      decrementBreakLength(){
         if (this.state.breakLength > 0){
           this.setState( state => {
             return {breakLength : state.breakLength-1}
            })
         }
        };
    // increment the session length     
        incrementSessionLength(){
         if(this.state.sessionLength < 60){  
         this.setState (state => {
        return {sessionLength : state.sessionLength+1} 
         }) 
        }
      };
    // decrement the session     
        decrementSessionLength(){
          if (this.state.sessionLength > 0){
            this.setState( state => {
              return {sessionLength : state.sessionLength-1}
             })
          }};

     //reset Counter 
     resetCounter(){
       this.setState(state => {
         return  {breakLength : 5 ,
                  sessionLength : 25 
       }
     });
    }

      begin() {
      var minute = this.state.sessionLength;
      var sec = this.state.seconds;
      setInterval(function() {
         sec = sec - 1;
        if (sec === 0) {
         minute =  minute - 1;
          this.setState( state => {
            return  sec = 59
         })
        if (minute === 0) {
              return;
          }
        }
      }, 10);
    }

        render() {
           return (
           <div>      
             <h1>Pomodoro Clock</h1>          
             <div className="controls">
             <div className="breakLength"> 
               Break Length
             <div>
              {/* Button to adjust the BREAK length */} 
             <button  className="btn bi-arrow-up" id="breakplus" onClick={this.increment}>&#x2191;</button>
                <p>{this.state.breakLength}</p>
             <button className="btn bi-arrow-down" id="breakminus" onClick={this.decrement}><b>&#x2193;</b></button>
              </div>
             </div>
            {/* Button to adjust the SESSION length */} 
             <div className="sessionLength"> 
                Session Length
             <div>
             <button className="btns btn bi-arrow-up" id="sessPlus" onClick={this.increment2}><b>&#x2191;</b></button>
                <p>{this.state.sessionLength}</p>
             <button  className="btns btn bi-arrow-down" id="sessMinus" onClick={this.decrement2}><b>&#x2193;</b></button>
             </div>
             </div>
             </div>
            {/* TIMER */} 
             <div className="timer"> 
              <div className="time">
                 {this.state.sessionLength}:{this.state.seconds}
              </div>
                <div class="play-button-outer">
                 <button className="Play btn btn-primary" id="btnstart" onClick={this.begin}>Start</button>          
                 <button className="Pause btn btn-secondary" id="btnpause">Pause</button>          
                 <button className="Reset btn btn-danger"  id="btnreset" onClick={this.resetCounter}>Reset</button>          
              </div>
              </div>
            </div>
           )}
        }
    
export {Clockface}

