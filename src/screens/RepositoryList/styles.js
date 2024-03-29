import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  > hr {
    width: 100%;
    color: #ddd;
    margin: 15px 0;
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

export const Title = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0px;
  flex-direction: row;
`;
