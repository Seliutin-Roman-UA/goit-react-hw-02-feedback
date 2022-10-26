import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

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
    
    return (
      <div className="feedback">
        <p className="qwe">Please leave fedback</p>
        {statsList.map(([key]) => {
          
          return (
            <button
              key={key}
              className="btn"
              type="button"
              onClick={this.pressButton}
            >
              {key}
            </button>
          );
        })}
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            statsList={statsList}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
