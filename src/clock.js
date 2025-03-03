import { Howl, Howler } from 'howler';
import React from 'react';
import './App.css';


//I  fucked this up at the very beginning

class Clockface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          breakLength: 5 ,
          sessionLength : 25 ,
          seconds: 0, 
          minutes: 0
        };
    // increment binders 
       this.increment2 = this.incrementSessionLength.bind(this);
       this.increment = this.incrementBreakLength.bind(this);
       this.decrement2 = this.decrementSessionLength.bind(this);
       this.decrement = this.decrementBreakLength.bind(this);
       this.resetCounter = this.resetCounter.bind(this)
       this.start = this.start.bind(this)
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
     // reset counter reloads the whole page 
     resetCounter(){
      window.location.reload(false);
    };

    functi(){
      var audio = new Audio('src/mixkit-vintage-telephone-ringtone-1356.mp3');
      audio.loop = false;
      audio.play(); 
      };
//function that calls the breka length function

// logic to handle the timer countdown 
 startTimer(duration, display , sound){
  var timer = duration, minutes, seconds;
  var audio = new Audio('src/mixkit-vintage-telephone-ringtone-1356.mp3');
  //audio to be played when timer is done 
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer <= 0 ) {
          timer = 0;
          this.begin()
          // Fires when the sound finishes playing.
          document.querySelector("#btnstart").innerHTML = "Start";
      }
      else if(timer === 0){
       
        return ;
      }
  }, 1000)}
  
// function to start the coutdown when the start button is clicked
 start(){document.querySelector("#btnstart").addEventListener("click",()=>{
  var fiveMinutes = 60 * this.state.sessionLength,
      display = document.querySelector('.time');
      var myInterval = true;
      // this is the code that starts the timer
   if(myInterval === true && fiveMinutes !== 0){
     this.startTimer(fiveMinutes, display, this.sound);
      if(document.querySelector("#btnstart").innerHTML === "Pause" ){
        document.querySelector("#btnstart").innerHTML = "Start";
      } else if (document.querySelector("#btnstart").innerHTML = "Start"){
        document.querySelector("#btnstart").innerHTML = "Pause";
        return;
      }}
  })
 }

 //funnction to handle the break time 
 breakTimer(duration, display , sound){
  var timer = duration, minutes, seconds;
  var audio = new Audio('src/mixkit-vintage-telephone-ringtone-1356.mp3');
  //audio to be played when timer is done 
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer <= 0 ) {
          timer = 0;
          // Fires when the sound finishes playing.
          document.querySelector("#btnstart").innerHTML = "Start";
          this.start();
      }
      else if(timer === 0){
        return ;
      }
  }, 1000)}
  
  begin(){
    var fiveMinutes = 60 * this.state.breakLength,
        display = document.querySelector('.time');
        // this is the code that starts the timer
     if ( display.innerHTML === 0 ){
          this.breakTimer(fiveMinutes, display, this.sound);
        if (document.querySelector("#btnstart").innerHTML === "Pause" ){
           document.querySelector("#btnstart").innerHTML = "Start";
        }  else if (document.querySelector("#btnstart").innerHTML = "Start"){
           document.querySelector("#btnstart").innerHTML = "Pause";
           return;
        }}
    }
   

        render() {
          Howler.volume(0.5);
           return (
           <div>      
           <audio id="audio1" src="./src/mixkit-vintage-telephone-ringtone-1356.mp3" preload="auto"></audio>
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
                <p id="splay">{this.state.sessionLength}</p>
             <button  className="btns btn bi-arrow-down" id="sessMinus" onClick={this.decrement2}><b>&#x2193;</b></button>
             </div>
             </div>
             </div>
            {/* TIMER */} 
             <div className="timer"> 
              <div className="time">
                 {this.state.sessionLength}:00
               </div>
                <div class="play-button-outer">
                 <button className="Play btn btn-success" id="btnstart" onClick={()=> this.start(true)}>Start</button>                   
                 <button className="Reset btn btn-danger"  id="btnreset" onClick={this.resetCounter}>Reset</button>          
              </div>
              </div>
            </div>
           )}
        }
    
export {Clockface}

