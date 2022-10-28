import { Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(([key]) => {
        return (
          <Btn
            key={key}
            className="btn"
            type="button"
            onClick={onLeaveFeedback}
          >
            {key}
          </Btn>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
