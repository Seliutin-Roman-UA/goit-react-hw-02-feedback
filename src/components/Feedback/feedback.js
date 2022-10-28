import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

import { FeedbackForm, Caption } from './feedback.styled';


export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  pressButton = evt => {
    const nameButton = evt.target.textContent.toLowerCase();

    this.setState(state => ({ [nameButton]: state[nameButton] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevValue, value) => prevValue + value,
      0
    );
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  };
  render() {
    const statsList = Object.entries(this.state);
    const total = this.countTotalFeedback();

    return (
      <FeedbackForm>
        <section className="options">
          <Caption>Please leave fedback</Caption>
          <FeedbackOptions
            options={statsList}
            onLeaveFeedback={this.pressButton}
          />
        </section>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <section className="stats">
            <Caption>Statistics</Caption>
            <Statistics
              statsList={statsList}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </section>
        )}
      </FeedbackForm>
    );
  }
}
