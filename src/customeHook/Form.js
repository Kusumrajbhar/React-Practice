import React, { useState } from "react";
import FormCustom from "./FormCustom";
import "./styles.less";

function Form() {
 const [firstName, bindFirstName, resetFirstName] = FormCustom('')
 const [lastName, bindLastName, resetLastName] = FormCustom('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (firstName || lastName) {
      alert(`Hii ${firstName} ${lastName}`);
    }
    resetFirstName()    //to reset the value
    resetLastName()
  };
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