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
      <div className="bg-slate-900 p-8  w-screen h-screen flex">
        <div className="bg-slate-600 w-1/2 rounded-lg shadow-xl h-fit mx-auto justify-start  align-top  flex flex-col  p-2 flex-wrap">
          <h1 className="text-emerald-400 text-2xl mx-auto my-3  ">Password Generator</h1>
          <input
            ref={copySelect}
            value={password}
            className="w bg-white  p-2 rounded-lg"
            type="text"
            name=""
            id=""
          />
          <button className="text-black m-5" onClick={copyFunction}>
            copy
          </button>
          

          <label htmlFor="range" className="flex justify-center align-middle text-white">
          <input
          className="mx-2"
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
            length: {length}</label>
        <div
         className="flex justify-around my-4 align-middle">
<label htmlFor="number" className=" text-white flex justify-center align-middle">number:
          <input
                    className="mx-1 "

            type="checkbox"
            onChange={() => setNumberAllowed((prev) => !prev)}
            name="number"
            id="number"
          />
           </label>
         
          <label className=" flex justify-center align-middle text-white "  htmlFor="specialChar">specialChar:
          <input
          className="mx-1 "
            type="checkbox"
            onChange={() => setCharAllowed((prev) => !prev)}
            name="specialChar"
            id="specialChar"
          />
          </label>

         </div>

          
        </div>
      </div>
    </>
  );
}

export default App;
