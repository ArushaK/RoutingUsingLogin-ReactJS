// import React from "react";
// class Timer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       secondsElapsed: 0,
//     };
//   }
//   start = () => {
//     this.setState({
//       secondsElapsed: this.state.secondsElapsed + 1,
//     });
//   };
//   handleClick = (e) => {
//     this.interval = setInterval(this.start, 1000);
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <br />
//         <br />
//         <button onClick={this.handleClick}>Start timer</button>
//         <br />
//         <br />
//         <h2>
//           {" "}
//           Seconds Elapsed:
//           {this.state.secondsElapsed}
//         </h2>
//       </React.Fragment>
//     );
//   }
// }
// export default Timer;

// import React from "react";
// class Timer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       secondsElapsed: 0,
//     };
//   }
//   start = () => {
//     this.setState({
//       secondsElapsed: this.state.secondsElapsed + 1,
//     });
//   };
//   handleClick = (e) => {
//     this.interval = setInterval(this.start, 1000);
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <br />
//         <button onClick={this.handleClick}>Start Timer</button>
//         <br />
//         <br />
//         <Resultant new={this.state.secondsElapsed} />
//       </React.Fragment>
//     );
//   }
// }
// class Resultant extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3> Seconds Elapsed: {this.props.new} </h3>
//       </div>
//     );
//   }
// }
// export default Timer;

//---------------child parent data flow using prop
// import React from "react";
// class Child extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       nameValue: null,
//     };
//   }
//   handleChange = () => {
//     let newValue = "Jack";
//     this.setState({ nameValue: newValue });
//     this.props.update(newValue);
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={this.handleChange}>Change</button>
//       </React.Fragment>
//     );
//   }
// }
// export default Child;

import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
  }
  start = () => {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1,
    });
  };
  handleClick = (e) => {
    this.interval = setInterval(this.start, 1000);
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Start Timer</button>
        <Resultant new={this.state.secondsElapsed} />
      </React.Fragment>
    );
  }
}
function Resultant(data) {
  return <h2>Seconds Elapsed: {data.new}</h2>;
}
export default Timer;
