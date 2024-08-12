import s from "./Options.module.css";

const Options = ({
  feedbackTypes,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <div className={s.container}>
      {Object.keys(feedbackTypes).map((feedbackType) => {
        return (
          <button
            onClick={() => updateFeedback(feedbackType)}
            key={feedbackType}
          >
            {feedbackType}
          </button>
        );
      })}
      {totalFeedback > 0 && (
        <button onClick={() => resetFeedback()}>Reset</button>
      )}
    </div>
  );
};

export default Options;
