import React from 'react';


class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time :  12
    }
  }

     render(){
       return (
       <div className="sort">
         <div className="timer">
          {this.state.time}
         </div>
       </div>
       )}
  
  }  

  export {Clock}