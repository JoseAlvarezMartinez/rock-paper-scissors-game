const OptionCard = ({ setPick,option }) => {
  return (
    <div
      onClick={() => setPick(option.name)}
      className={`option-card ${option.name == "Scissors" ? "scissors" : ""} ${
        option.name == "Rock" ? "rock" : ""
      }`}
    >
      <img src={option.image} />
    </div>
  );
};

export default OptionCard;
