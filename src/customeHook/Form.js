import React, { useState } from "react";
import FormCustom from "./FormCustom";

function Form() {
 const [firstName, bindFirstName, resetFirstName] = FormCustom('')
 const [lastName, bindLastName, resetLastName] = FormCustom('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hii ${firstName} ${lastName}`);
    resetFirstName()    //to reset the value
    resetLastName()
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="firstname"
         {...bindFirstName}
        />
        <br />
        <input
          placeholder="lastname"
        {...bindLastName}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;

//{...bindFirstName}  contains value and onchange handler to set the value
//FormCustom('') -- distructuring custom hook