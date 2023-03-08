import Header from "./components/Header";
import { useState } from "react";
import Options from "./components/Options";
function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score} />
      <Options/>
    </>
  );
}

export default App;
