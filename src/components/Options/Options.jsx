const Options = ({ totalFeedback, updateFeedback, handleReset }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} className="button-reset">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
