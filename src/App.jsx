import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-4xl font-generalLight">Projects</p>
      <p className="text-4xl font-generalRegular">Projects</p>
      <p className="text-4xl font-generalSemibold">Projects</p>
      <p className="text-4xl font-generalBold">Projects</p>
    </>
  );
}

export default App;
