import { Note } from './Notification.styled';
import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <Note>{message}</Note>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
