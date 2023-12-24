import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let [numberallowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let copySelect = useRef(null);
  console.log(copySelect);

  let generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYXabcdefghijklmnopqrstuvwxyz";
    let num = "123456789";
    let speCher = "!@#$%^&*";

    if (numberallowed) {
      str += num;
    }
    if (charAllowed) {
      str += speCher;
    }
    for (let index = 1; index < length; index++) {
      let indx = Math.floor(Math.random() * str.length + 1);
      console.log(indx);
      // console.log(str[2]);
      pass += str[indx];
    }
    setPassword(pass);

    console.log(pass);
  };

  let copyFunction = () => {
    copySelect.current?.select();

    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [setPassword, numberallowed, length, charAllowed]);

  return (
    <>
      <div className="bg-dark-200 p-8 m-8 w-screen h-screen flex justify-center align-center">
        <div className="text-black bg-pink-200 w-1/2 h-2/3  justify-start m-20 align-top  flex flex-col  p-2 flex-wrap">
          <h1 className="text-base m-4">Password Generator</h1>
          <input
            ref={copySelect}
            value={password}
            className="w bg-white  p-2 rounded-lg"
            type="text"
            name=""
            id=""
          />
          <button className="text-white m-5" onClick={copyFunction}>
            copy
          </button>
          <input
            type="range"
            min={1}
            max={100}
            id="range"
            name="range"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label htmlFor="range">character-{length}</label>
          <input
            type="checkbox"
            onChange={() => setNumberAllowed((prev) => !prev)}
            name="number"
            id="number"
          />

          <label htmlFor="number">number </label>
          <input
            type="checkbox"
            onChange={() => setCharAllowed((prev) => !prev)}
            name="specialChar"
            id="specialChar"
          />
          <label htmlFor="specialChar">specialChar</label>
        </div>
      </div>
    </>
  );
}

export default App;
