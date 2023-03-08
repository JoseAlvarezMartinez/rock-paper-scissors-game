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
      setTimeout(() => {
        const random = Math.ceil(Math.random() * 3);
        if (random === 1) {
          setOponentPick("Rock");
        } else if (random === 2) {
          setOponentPick("Paper");
        } else {
          setOponentPick("Scissors");
        }
      }, 1000);
    }
  }, [pick]);
  return (
    <>
      <Header score={score} />
      {pick.length ? (
        <div className="pick">
          <div className="center-pick">
            <div
              className={`option-card  ${
                pick == "Scissors" ? "scissors" : ""
              } ${pick == "Rock" ? "pick-rock" : ""}`}
            >
              <img src={options[pick]} />
            </div>
            <h2 className="picked-h2">You Picked</h2>
          </div>

          <div className="center-pick">
            <div
              className={`oponent-card${
                oponentPick ? "" : "option-card-oponent"
              }  ${oponentPick == "Scissors" ? "scissors" : ""} ${
                oponentPick == "Rock" ? "pick-rock" : ""
              }`}
            >
              <img src={options[oponentPick]} />
            </div>
            <h2 className="picked-h2">The house picked</h2>
          </div>
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
