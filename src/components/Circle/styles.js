import styled from 'styled-components';

export const Container = styled.span`
  min-width: 12px;
  min-height: 12px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;
