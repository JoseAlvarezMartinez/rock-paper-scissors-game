const OptionCard = ({ option }) => {
  return (
    <div className={`option-card ${option.name == "Scissors" ? "scissors" : ""} ${option.name == "Rock" ? "rock" : ""}`}>
      <img src={option.image} />
    </div>
  );
};

export default OptionCard;
