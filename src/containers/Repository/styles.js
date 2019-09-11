import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0px;
  flex-direction: column;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    color: #0366d6;
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    margin-bottom: 8px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  > p {
    color: #586069;
    font-size: 14px;
    font-weight: 100;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  > p {
    color: #586069;
    font-size: 12px;
    font-weight: 100;
    margin-right: 20px;
  }
`;
