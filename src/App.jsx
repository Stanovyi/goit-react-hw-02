import './App.css';
import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const initializeFeedback = () => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(initializeFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (sum, value) => sum + value,
    0
  );
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="container">
      <div className="card">
        <Description />
        <Options
          totalFeedback={totalFeedback}
          updateFeedback={updateFeedback}
          handleReset={resetFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
            handleReset={resetFeedback}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    </div>
  );
};

export default App;
