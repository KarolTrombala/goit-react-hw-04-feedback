import React, { useState} from 'react';
import { Statistics}  from './Statistics/Statistics';
import { FeedbackOptions } from './Feedbackoptions/Feedbackoptions';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((feedback) => ({
      ...feedback,
      [type]: feedback[type] + 1,
    }))
  };

  const countTotalFeedback = Object.values(feedback).reduce(
    (total, value) => total + value,
    0
  );

  const countPositiveFeedbackPercentage = Math.round((feedback.good / countTotalFeedback) * 100);
      

  return (
    <div
      style={{
        marginTop: 100,
        marginLeft: 100,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};

export default App;
