//import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Dynamic from './components/Dynamic';
import Clock from './components/State';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import FunctionSetState from './components/FunctionSetState'

//class component
class App extends Component {
render() {
  return (
    <div className="App">
      <FunctionSetState />
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
     {/* <Dynamic></Dynamic> */}
     {/* <Clock date={new Date().toLocaleTimeString()} /> */}
      {/* <Message></Message> */}
      {/* <Greet name="kusum" lastName="Rajbhar">   
        <p>I am children element</p>
      </Greet>
      <Greet name="Shraddha" lastName="Tendulkar" />
      <Welcome name="Ashutosh" lastName="Sharangi">
  </Welcome> */}
    </div>
  )
}
}

//function component
// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       <Welcome />
//     </div>
//   );
// }

// let App = () => {
//   return (
//     <div className="App">
//       <Greet />
//       <Welcome />
//     </div>
//   );
// }

export default App;

//in props once we declare name then we cannot change its value again to overcome this we uses state