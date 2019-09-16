import React from 'react';
import moment from 'moment';
import 'moment/locale/pt';

import ForkIcon from '../../assets/ForkIcon';
import LicenseIcon from '../../assets/LicenseIcon';
import StarIcon from '../../assets/StarIcon';
import Circle from '../../components/Circle';

import { Container, Data, Details } from './styles';

const Repository = ({ data, history }) => (
  <Container data-testid="repository-item">
    <Data>
      <h3 onClick={() => history.push(`/${data.name}/commits`)}>{data.name}</h3>
      <p>{data.description}</p>
    </Data>
    <Details>
      {data.primaryLanguage && (
        <>
          <Circle color={data.primaryLanguage.color} />
          <p>{data.primaryLanguage.name}</p>
        </>
      )}
      {data.stargazers && (
        <>
          <StarIcon />
          <p>{data.stargazers.totalCount}</p>
        </>
      )}
      {data.licenseInfo && (
        <>
          <LicenseIcon />
          <p>{data.licenseInfo.name}</p>
        </>
      )}
      <ForkIcon />
      <p>{data.forkCount}</p>

      <p>Atualizado {moment(data.updatedAt).fromNow()}</p>
    </Details>
  </Container>
);

export default Repository;
