import React, { useState } from "react";
import FormCustom from "./FormCustom";
import "./styles.less";

function Form() {
 const [firstName, bindFirstName, resetFirstName] = FormCustom('')
 const [lastName, bindLastName, resetLastName] = FormCustom('')

 let name = "kusum";
 let role = "developer";

 let obj = {
  name: name,  
  role: role
 }

 if(obj){
   console.log(obj?.work, "obj")  //or obj?.work
 }

 //while checking chaining do this way
//  if(person && person.address){
//   console.log(person.address.street)  //do not throw anything
//  }

const fun = () => {
  console.log("fun")
}
fun?.()   // can check null value

  const submitHandler = (e) => {
    e.preventDefault()
    if (firstName || lastName) {
      alert(`Hii ${firstName} ${lastName}`);
    }
    resetFirstName()    //to reset the value
    resetLastName()
  };

  const calculate = (price, tax, description) => {
    // 2 ways to manage default in case of passing 0
    //first way
    if(tax == null){
      tax = 1
    }
    //second way
    //tax = tax ?? 1;                 // how to manage default value along with passing 0 in a function
    price = price + tax;
    console.log(`%c${description} price is %c${price}`, "color: red", "color: green"); //style console
    }
    
    calculate(100, 2, "First with value");
    calculate(100, undefined, "second passing undefined");
    calculate(100, 0, "third passing zero considering default");

  return (
    <div>
      <h1 className="formHeader">Fill the below Form</h1>
      <form onSubmit={submitHandler}>
        <div>
        <input
          placeholder="firstname"
         {...bindFirstName}
        />
        </div>
        <br />
        <div>
        <input
          placeholder="lastname"
        {...bindLastName}
        />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

//{...bindFirstName}  contains value and onchange handler to set the value
//FormCustom('') -- distructuring custom hook