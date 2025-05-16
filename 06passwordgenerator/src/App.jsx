import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setNumber] = useState(true);
  const [isSymbol, setSymbol] = useState(true);
  const [password, setPassword] = useState("");

  const createPassword = useCallback(() => {
    let pass = "";
    let helperPass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumber) helperPass += "0123456789";
    if (isSymbol) helperPass += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let randomePos = Math.floor(Math.random() * helperPass.length + 1);
      pass += helperPass.charAt(randomePos);
    }

    setPassword(pass);

  }, [length, isNumber, isSymbol, setPassword]);

  //useRef hook
  const passwordRef = useRef(null);

  const copiedToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3) //this is to select only upto certain characters
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    createPassword();
  }, [length, isNumber, isSymbol, createPassword]);

  return (
    <>
      <div className="w-screen h-screen bg-slate-800 flex justify-center items-center">
        <div className="flex flex-col justify-center bg-slate-500 w-max px-4 py-2 gap-4 rounded-md">
          <h1 className="text-4xl text-center text-white">Password Generator</h1>
          <div className="flex justify-center items-center gap-2 w-full">
            <input
              type="text"
              readOnly
              value={password}
              className="bg-slate-200 rounded-md px-4 py-2 outline-0"
              ref={passwordRef}
            />
            <button className="px-4 py-2 bg-slate-400 active:bg-slate-500 duration-250 text-black rounded-md hover:cursor-pointer" onClick={copiedToClipboard}>Copy</button>
          </div>
          <div className="w-full flex justify-between items-center">
            <label htmlFor="" className="flex justify-between items-center gap-2">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />Length: {length}
            </label>
            <span>
              <input
                type="checkbox"
                defaultChecked={isNumber}
                onChange={() => setNumber((prev) => !prev)}
              />Number
            </span>
            <span>
              <input
                type="checkbox"
                defaultChecked={isSymbol}
                onChange={() => setSymbol((prev) => !prev)}
              />Symbol
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;