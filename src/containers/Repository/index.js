import React from 'react';
import moment from 'moment';
import 'moment/locale/pt';

import { Container, Data, Details } from './styles';

const Repository = ({ data }) => (
  <Container>
    <Data>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </Data>
    <Details>
      {data.primaryLanguage && <p>{data.primaryLanguage.name}</p>}
      {data.licenseInfo && <p>{data.licenseInfo.name}</p>}
      <p>{data.forkCount} forks</p>
      <p>Atualizado {moment(data.updatedAt).fromNow()}</p>
    </Details>
  </Container>
);

export default Repository;
