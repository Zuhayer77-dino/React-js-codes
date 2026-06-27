import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./component/Card";

// Keep your main App component clean and self-contained
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-xl mb-6 text-center font-bold text-2xl w-full max-w-sm">
        Tailwind test
      </h1>
      <Card username = "Zuhayer's insights" btnText="Learn More to get fck up "/>
      <Card />
    </>
  );
}

export default App;
