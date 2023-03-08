import Header from "./components/Header";
import { useState, useEffect } from "react";
import Options from "./components/Options";
import IconRock from "./assets/icon-rock.svg";
import IconPaper from "./assets/icon-paper.svg";
import IconScissors from "./assets/icon-scissors.svg";
function App() {
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState("");
  const [oponentPick, setOponentPick] = useState("");
  const options = {
    Rock: IconRock,
    Paper: IconPaper,
    Scissors: IconScissors,
  };
  useEffect(() => {
    if (pick.length) {
      const random = Math.ceil(Math.random() * 3);
      if (random === 1) {
        setOponentPick("Piedra");
      } else if (random === 2) {
        setOponentPick("Papel");
      } else {
        setOponentPick("TIjeras");
      }
    }
  }, [pick]);
  return (
    <>  
      <Header score={score} />
      {pick.length ? (
        <div
          className={`option-card  ${pick == "Scissors" ? "scissors" : ""} ${
            pick == "Rock" ? "pick-rock" : ""
          }`}
        >
          <img src={options[pick]} />
        </div>
      ) : (
        <>
          {" "}
          <Options setPick={setPick} />
        </>
      )}
    </>
  );
}

export default App;
