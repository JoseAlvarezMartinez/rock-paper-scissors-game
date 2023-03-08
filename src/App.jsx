import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(100);
  return (
    <>
      <Header score={score} />
    </>
  );
}

export default App;
