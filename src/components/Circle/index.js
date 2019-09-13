import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Circle = ({ color }) => <Container color={color} />;

Circle.propTypes = {
  /** Cor que representa a linguagem */
  color: PropTypes.string.isRequired
};

export default Circle;
