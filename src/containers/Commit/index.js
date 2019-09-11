import React from 'react';
import moment from 'moment';

import { Container, Data, Author } from './styles';

const Commit = ({ data: { node } }) => (
  <Container>
    <Data>
      <h3>{node.messageHeadline}</h3>
    </Data>
    {node.author && (
      <Author>
        <bold>{node.author.name}</bold>
        <p>
          realizou este commit em{' '}
          {moment(node.author.date).format('DD/MM/YYYY')}
        </p>
      </Author>
    )}
  </Container>
);

export default Commit;
