import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [symbolAllow, setsymbolAllow] = useState(false);
  const [numbAllow, setnumbAllow] = useState(false);
  const [paswor, setpasswor] = useState("");
  const passwordchanger = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbAllow) str += "0123456789";
    if (symbolAllow) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpasswor(pass);
  }, [length, symbolAllow, numbAllow, setpasswor]);
  useEffect(() => {
    passwordchanger();
  }, [length, symbolAllow, numbAllow, setpasswor]);
  return (
    <>
      <div>
        <div>
          <input
            name="Password"
            id="password"
            readOnly
            type="text"
            value={paswor}
          />
          <button id="copy">
            <label htmlFor="copy">copy</label>
          </button>
        </div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length: {length}</label>
        <input
          type="checkbox"
          name="number"
          id="number"
          defaultChecked={numbAllow}
          onChange={() => setnumbAllow((prev) => !prev)}
        />
        <label htmlFor="number">number</label>
        <input
          type="checkbox"
          name="symbol"
          id="symbol"
          defaultChecked={symbolAllow}
          onChange={() => setsymbolAllow((prev) => !prev)}
        />
        <label htmlFor="symbol">Symbol</label>
      </div>
    </>
  );
}

export default App;
