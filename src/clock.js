import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// create the basic layout of the clock
// the buttons 
// the divs that will have the time within them

class Clockface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          breakLength: 0 ,
          sessionLength : 25 ,
        };
    // increment binders 
       this.increment2 = this.incrementSessionLength.bind(this);
       this.increment = this.incrementBreakLength.bind(this);
       this.decrement2 = this.decrementSessionLength.bind(this);
       this.decrement = this.decrementBreakLength.bind(this);
      }
     // increment the break length 
        incrementBreakLength(){
        this.setState ( state=>{
        return {breakLength : state.breakLength += 1}
         }
        )}
     // decrement the break length
      decrementBreakLength(){
        this.setState ( state=>{
        return { breakLength : state.breakLength -= 1}
         })
        }

    // increment the session length     
        incrementSessionLength(){
         this.setState ( state=>{
        return {sessionLength : state.sessionLength += 1}
         })
        ;}
    // decrement the session     
        decrementSessionLength(){
         this.setState ( state=>{
        return { sessionLength : state.sessionLength -= 1}
         }
        )}; 
        render() {
            // three seperate divs
            // one for the break length
            // another for the session length
            // the actual timer
           return (
           <div>                
             <div className="controls">
             <div className="breakLength"> 
             Break Length
             <div>
             <button className="btn-up btn arrow this" id="breakincrease" onClick={this.increment}> + </button>
                {this.state.breakLength}
             <button className="btn-up btn arrow" id="breakdecrease" onClick={this.decrement}> - </button>
             </div>
             </div>
             <div className="sessionLength"> 
             Session Length
             <div>
             <button className="btn-up btn arrow this" onClick={this.increment2}> + </button>
                {this.state.sessionLength}
             <button className="btn-up btn arrow" onClick={this.decrement2}> - </button>
             </div>
             </div>
             </div>
             <div className="timer"> ACTUAL TIMER
             <div>
                 {this.state.sessionLength}
             </div>
              </div>
            </div>
           )}
        }
    
export {Clockface}
