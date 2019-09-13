import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  & h1 {
    margin-bottom: 20px;
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;
