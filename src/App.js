// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//-----------------------Styling using INLINE CSS
// import React from "react";
// import "./App.css";
// class AppComp extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 style={{ color: "green", fontFamily: "verdana" }}>
//           Welcome to React
//         </h1>
//         <button className="button">Submit</button>
//       </React.Fragment>
//     );
//   }
// }
// export default AppComp;

//-----------------------------------Styling using BOOTSTRAP
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// class AppComp extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Welcome to React</h1>
//         <button className="btn btn-success">Submit</button>
//       </React.Fragment>
//     );
//   }
// }
// export default AppComp;

//--------------------------------------Styling using REACT-BOOTSTRAP
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// class AppComp extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Welcome to React</h1>
//         <Button variant="success">Submit</Button>
//       </React.Fragment>
//     );
//   }
// }
// export default AppComp;

//------------------------------------Styling using MATERIAL-UI
// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// class AppComp extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Typography variant="h4" gutterBottom>
//           Welcome to React
//         </Typography>
//         <Button variant="contained" color="primary">
//           Submit
//         </Button>
//       </React.Fragment>
//     );
//   }
// }
// export default AppComp;

// import React from "react";
// import Timer from "./Timer";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "John",
//     };
//   }
//   update = (value) => {
//     let newValue = value;
//     this.setState({ name: newValue });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <h1>{this.state.name}</h1>
//         <br />
//         <br />
//         <Timer nameValue={this.state.name} update={this.update} />
//       </React.Fragment>
//     );
//   }
// }
// export default App;

//-----------------Accessing child nodes
// import React from "react";
// var count = 1;
// class App extends React.Component {
//   render() {
//     React.Children.map(this.props.children, () => {
//       console.log("child", count++);
//     });
//     return <ul>{this.props.children}</ul>;
//   }
// }
// export default App;

//---------------Setting Default Values to Props
import React from "react";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1> {this.props.element1} </h1>
        <h1> {this.props.element2} </h1>
      </React.Fragment>
    );
  }
}
App.defaultProps = {
  element1: "Hello",
  element2: "World",
};
export default App;
