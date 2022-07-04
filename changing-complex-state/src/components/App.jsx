import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({ fName: "", lName: "" });

  const { fName, lName } = fullName;
  // function firstName(e) {
  //   setfName(e.target.value);
  // }

  // function lastName(e) {
  //   setlName(e.target.value);
  // }

  function handleChange(e) {
    // const newValue = e.target.value;
    // const inputName = e.target.name;
    const { name: inputName, value: newValue } = e.target;

    setfullName((prevValue) => {
      console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
