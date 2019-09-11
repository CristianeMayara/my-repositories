import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const BaseView = ({ children }) => <Container>{children}</Container>;

BaseView.propTypes = {
  children: PropTypes.element.isRequired
};

export default BaseView;
