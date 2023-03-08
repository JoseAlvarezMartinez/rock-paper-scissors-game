import Header from "./components/Header";
import { useState, useEffect } from "react";
import Options from "./components/Options";
import IconRock from "./assets/icon-rock.svg";
import IconPaper from "./assets/icon-paper.svg";
import IconScissors from "./assets/icon-scissors.svg";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  function reloadGame(picked, draw) {
    if (pick === picked) {
      setWin(true);
      setScore(score + 1);
    } else if (pick === draw) {
      setWin(false);
    } else {
      setWin(false);
      setScore(score - 1);
    }
  }
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState("");
  const [loader, setLoader] = useState(false);
  const [oponentPick, setOponentPick] = useState("");
  const [win, setWin] = useState(false);
  const options = {
    Rock: IconRock,
    Paper: IconPaper,
    Scissors: IconScissors,
  };
  useEffect(() => {
    if (pick.length) {
      setLoader(true);
      setTimeout(() => {
        const random = Math.ceil(Math.random() * 3);
        if (random === 1) {
          setOponentPick("Rock");
          reloadGame("Paper", "Rock");
        } else if (random === 2) {
          setOponentPick("Paper");
          reloadGame("Scissors", "Paper");
        } else {
          setOponentPick("Scissors");
          reloadGame("Rock", "Scissors");
        }
        setLoader(false);
         setTimeout(() => {
           setPick("");
           setOponentPick("");
         }, 1000);
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
              } ${pick == "Rock" ? "pick-rock" : ""} `}
            >
              <img src={options[pick]} />
            </div>
            <h2 className="picked-h2">You Picked</h2>
          </div>

          <div className="center-pick">
            <div
              className={` ${loader ? "loader-card" : "oponent-card"}
               ${oponentPick == "Scissors" ? "scissors" : ""} ${
                oponentPick == "Rock" ? "pick-rock" : ""
              } ${oponentPick == "Paper" ? "pick-paper" : ""}`}
            >
              {loader ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                <img src={options[oponentPick]} />
              )}
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
