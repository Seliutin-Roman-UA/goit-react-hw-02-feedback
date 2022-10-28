import { Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ statsList, total, positivePercentage }) {
  return (
    <>
      {statsList.map(([key, value]) => (
        <Text key={key}>
          {key}: {value}
        </Text>
      ))}

      <Text>total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </>
  );
}


Statistics.propTypes = {
  statsList: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
