import OptionCard from "./OptionCard";
import { options } from "../data/options";
const Options = ({setPick}) => {
  return (
    <main>
      {options.map((option,i) => (
        <OptionCard setPick={setPick} key={i} option={option}/>
      ))}
    </main>
  );
};

export default Options;
