//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Dynamic from './components/Dynamic';
import Clock from './components/State';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import FunctionSetState from './components/FunctionSetState';
import Counter from './components/Counter';
import OnchangeEvent from './components/OnchangeEvent';
import ParentComponent from './components/ParentComponent';
import HooksCount from './components/HooksCount';
import HookCounter2 from './components/HookCounter2';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import UseStateInput from './components/UseStateInput';
import UseEffect1 from './components/UseEffect1';
import ConditionalRendering from './components/ConditionalRendering';
import UseEffect2 from './components/UseEffect2';
import UseEffect3 from './components/UseEffect3';
import MountingLifecycleA from './components/MountingLifecycleA'
import MountingLifeCycleB from './components/MountingLifeCycleB'
import ErrorHero from './components/ErrorHero';
import ErrorBoundary2 from './components/ErrorBoundary2';

// wrape all the components with error boundary else all component get hide
//class component
class App extends Component {
render() {
  return (
    <div className="App">

      {/* <ErrorBoundary2>
      <ErrorHero heroName='Batman'/>
      </ErrorBoundary2>

      <ErrorBoundary2>
      <ErrorHero heroName='Superman'/> 
      </ErrorBoundary2>

      // <ErrorBoundary2>
      // <ErrorHero heroName='joker'/>
      // </ErrorBoundary2> */}

      {/* <MountingLifecycleA /> */}

      {/* <UseEffect3 /> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffect1 /> */}
      {/* <ConditionalRendering /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <HookCounter2 /> */}
      {/* <HooksCount /> */}
       {/* <ParentComponent /> */}
      {/* <OnchangeEvent /> */}
      {/* <Counter /> */}
      {/* <FunctionSetState /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
     {/* <Dynamic></Dynamic> */}
     {/* <Clock date={new Date().toLocaleTimeString()} /> */}
      {/* <Message></Message> */}
      {/* <Greet name="kusum" lastName="Rajbhar">   
        <p>I am children element</p>
      </Greet> */}
      {/* <Greet name="Shraddha" lastName="Tendulkar" /> */}
      {/* <Welcome name="Ashutosh" lastName="Sharangi">
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