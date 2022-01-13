import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Dynamic from "./components/Dynamic";
import Clock from "./components/State";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import FunctionSetState from "./components/FunctionSetState";
import Counter from "./components/Counter";
import OnchangeEvent from "./components/OnchangeEvent";
import ParentComponent from "./components/ParentComponent";
import HooksCount from "./components/HooksCount";
import HookCounter2 from "./components/HookCounter2";
import UseStateObject from "./components/UseStateObject";
import UseStateArray from "./components/UseStateArray";
import UseEffect1 from "./components/UseEffect1";
import ConditionalRendering from "./components/ConditionalRendering";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import MountingLifecycleA from "./components/MountingLifecycleA";
import MountingLifeCycleB from "./components/MountingLifeCycleB";
import ErrorHero from "./components/ErrorHero";
import ErrorBoundary2 from "./components/ErrorBoundary2";
import ApiTaskget from "./apiChallenge/ApiTaskget";
//import sideBar from './components/SideBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HookHistory from "./components/HookHistory";
import UseReducer from "./Reducer/UseReducer";
import ObjectReducer from "./Reducer/ObjectReducer";
import MultipleUseReducer from "./Reducer/MultipleUseReducer";
import EffectTitleOne from "./customeHook/EffectTitleOne";
import EffecttitleTwo from "./customeHook/EffecttitleTwo";
import CounterOne from "./customeHook/CounterOne";
import CounterTwo from "./customeHook/CounterTwo";
import Form from "./customeHook/Form";
import InterviewPrctice from "./interviewQ/InterviewPrctice";
import PreviousComponent from "./customHook/usePreviousHook/PreviousComponent";
import ToggleComponent from "./customHook/useToggle/ToggleComponent";
import TimeOutComponent from "./customHook/useTimeOut/TimeOutComponent";
import Todo from "./TODO/Todo";
import Test from "./mediaQuery/Test";

// wrape all the components with error boundary else all component get hide
//class component
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation /><br/> */}
        <Router>
          <Switch>
            <Route
              exact
              path="/counter"
              component={(props) => (
                <Counter
                  notify="this is the Counter implementation"
                  {...props}
                />
              )}
            />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/greet" component={Greet} />
            <Route exact path="/history1" component={HookHistory} />
          </Switch>
        </Router>

        <Test />

        {/* <Todo /> */}

        {/* <TimeOutComponent /> */}
        {/* <ToggleComponent /> */}
        {/* <PreviousComponent /> */}

        {/* <HookHistory /> */}

        {/* <InterviewPrctice /> */}

        {/* <Form /> */}

        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}

        {/* <EffectTitleOne /> */}
        {/* <EffecttitleTwo /> */}

        {/* <UseReducer /> */}
        {/* <ObjectReducer /> */}
        {/* <MultipleUseReducer /> */}
        {/* <ApiTaskget /> */}

        {/* <ErrorBoundary2>
      <ErrorHero heroName='Batman'/>
      </ErrorBoundary2>

      <ErrorBoundary2>
      <ErrorHero heroName='Superman'/> 
      </ErrorBoundary2>

      <ErrorBoundary2>
      <ErrorHero heroName='joker'/>
      </ErrorBoundary2> */}

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
        {/* <Welcome name="Ashutosh" lastName="Sharangi" /> */}
      </div>
    );
  }
}

export default App;

//in props once we declare name then we cannot change its value again to overcome this we uses state
