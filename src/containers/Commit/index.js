import React from 'react';
import moment from 'moment';

import { Container, Data, Author } from './styles';

const Commit = ({ data: { node } }) => (
  <Container>
    <Data>
      <a href={node.url}>{node.messageHeadline}</a>
    </Data>
    {node.author && (
      <Author>
        <img
          alt={node.author.name}
          src={node.author.avatarUrl}
          style={{ height: 20, marginRight: 6 }}
        />
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
