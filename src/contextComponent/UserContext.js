import React from 'react' 

const userContext = React.createContext('shraddha')  //give value when have to use one default value

const UserProvider = userContext.Provider          //use capital letter in start of the name

const UserConsumer = userContext.Consumer

export {UserProvider, UserConsumer}
export default userContext


//create userContext 
//export provider and consumer
//in App component import provider and wrape the component withing provider Component
//where we want to access value use consumer component and within that passin a function as a child 
//function receives context value as its parameter which can be used to return desire jsx
//can set default value while creating context i.e const userContext = React.createContext('kusum')
//to use this default value commentout provider component u wil get the value in browser

//another way
//export default userContext
//in contextB write -- ContextB.contextType = Usercontext
//and now context value will be available with **{this.context}**
//and include ContextC will get desire value 
//bt this type is limited to class only not in functional component