import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

import { FeedbackForm } from './App.styled';
import { Section } from './Section/Section';

export class App extends Component {
  positivFeedback = ['exelent', 'very good', 'good'];
  state = {
    exelent: 0,
    'very good': 0,
    good: 0,
    neutral: 0,
    'so-so': 0,
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
    const total = this.countTotalFeedback();
    const good = this.positivFeedback.reduce(
      (acc, item) => (this.state?.[item] ? acc + this.state[item] : acc),
      0
    );
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  };

  render() {
    const statsList = Object.entries(this.state);
    const total = this.countTotalFeedback();

    return (
      <FeedbackForm>
        <Section title={'Please leave fedback'}>
          <FeedbackOptions
            options={statsList}
            onLeaveFeedback={this.pressButton}
          />
        </Section>

        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              statsList={statsList}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </FeedbackForm>
    );
  }
}
