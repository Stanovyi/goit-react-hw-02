import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedStatistics = window.localStorage.getItem("feedback statistics");

    if (savedStatistics !== null) {
      return JSON.parse(savedStatistics);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    return window.localStorage.setItem(
      "feedback statistics",
      JSON.stringify(feedbackTypes)
    );
  }, [feedbackTypes]);

  const totalFeedback = Object.values(feedbackTypes).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedbackPercentage = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description
        name="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        feedbackTypes={feedbackTypes}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
