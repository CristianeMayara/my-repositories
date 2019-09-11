import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 14px;
  flex-direction: column;
  border: 1px solid #eaecef;
  margin-bottom: 3px;
  &:hover {
    background-color: #f6fbff;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    color: #444d56;
    font-size: 16px;
    font-weight: 600;
    margin-right: 20px;
    margin-bottom: 8px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  color: #586069;
  font-size: 12px;
  > bold {
    font-weight: 600;
    margin-right: 3px;
  }
  > p {
    font-weight: 400;
  }
`;
