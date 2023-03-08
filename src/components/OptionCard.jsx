const OptionCard = ({ setPick, option }) => {
  return (
    <div className="option-container">
      <div
        onClick={() => setPick(option.name)}
        className={`option-card ${
          option.name == "Scissors" ? "scissors" : ""
        } ${option.name == "Rock" ? "rock" : ""}`}
      >
        <img src={option.image} />
      </div>
      <p>{option.name}</p>
    </div>
  );
};

export default OptionCard;
