import styled from 'styled-components';

export const Container = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;
