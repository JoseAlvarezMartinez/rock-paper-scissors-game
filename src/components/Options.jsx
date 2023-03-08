import OptionCard from "./OptionCard";
import { options } from "../data/options";
const Options = () => {
  return (
    <main>
      {options.map((option) => (
        <OptionCard option={option}/>
      ))}
    </main>
  );
};

export default Options;
