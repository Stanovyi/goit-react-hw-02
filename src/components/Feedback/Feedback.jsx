import s from "./Feedback.module.css";

const Feedback = ({
  feedbackTypes,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className={s.feedbackList}>
      {Object.entries(feedbackTypes).map(([feedback, value]) => {
        return (
          <li key={feedback}>
            {feedback}: {value}
          </li>
        );
      })}
      <li> Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbackPercentage}%</li>
    </ul>
  );
};

export default Feedback;
