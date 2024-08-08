import s from "./Options.module.css";

const Options = ({
  feedbackTypes,
  updateFeedback,
  totalFeedback,
  setFeedbackTypes,
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
        <button
          onClick={() => setFeedbackTypes({ good: 0, neutral: 0, bad: 0 })}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
