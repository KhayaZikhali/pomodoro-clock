import React from 'react';
import './App.css'
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
         if (this.state.breakLength > 0){
           this.setState( state => {
             return {breakLength : state.breakLength -1}
            })
         }
        }
    // increment the session length     
        incrementSessionLength(){
         this.setState ( state=>{
        return {sessionLength : state.sessionLength += 1}
         })
        ;}
    // decrement the session     
        decrementSessionLength(){
          if (this.state.sessionLength > 0){
            this.setState( state => {
              return {sessionLength : state.sessionLength -1}
             })
          }
         }; 
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
              {/* Button to adjust the BREAK length */} 
             <button  className="btns" id="breakplus" onClick={this.increment}><b>+</b> </button>
                <p>{this.state.breakLength}</p>
             <button className="btns" id="breakminus" onClick={this.decrement}><b>-</b></button>
             </div>
             </div>

            {/* Button to adjust the SESSION length */} 
             <div className="sessionLength"> 
                Session Length
             <div>
             <button className="btns" id="sessPlus"  onClick={this.increment2}><b>+</b></button>
                <p>{this.state.sessionLength}</p>
             <button  className="btns" id="sessMinus" onClick={this.decrement2}><b>-</b></button>
             </div>
             </div>
             </div>
            {/* TIMER */} 
             <div className="timer"> 
                 <p CLASS="title">ACTUAL TIMER</p>
             <div>
                 {this.state.sessionLength}
             </div>
              </div>
            </div>
           )}
        }
    
export {Clockface}

