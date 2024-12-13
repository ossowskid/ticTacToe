import styled from 'styled-components';

//TODO: Change background color
export const Wrapper = styled.div`
  width: 601px;
  height: 601px;
  background: tomato;
`;

export const Netting = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px 200px;
  grid-gap: 1px;
  background-color: #000;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  color: #000;
`;
