import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export const BaseView = ({ children }) => <Container>{children}</Container>;

BaseView.propTypes = {
  /** Conteúdo a ser exibido na página */
  children: PropTypes.element.isRequired
};

export default BaseView;
