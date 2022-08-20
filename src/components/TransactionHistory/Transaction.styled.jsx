import styled from "@emotion/styled";

export const Table = styled.table`
margin: 0 auto;
width: 60%;
min-width: 500px;
overflow: hidden;
color: textMiddleColor;
background-color: light-grey;
border-radius: 5px;
border: none;
border-spacing: 0;
border-collapse: collapse;
box-shadow: 0 5px 10px #808080;
`;

export const TableHead = styled.thead`
background-color: tomato;
color: black;
font-size: 16px;
text-transform: uppercase;
`;

export const Th = styled.th`
width: calc(100% / 3);
padding: 15px 5px;
&:not(:last-child) {
  border-right: 1px solid green;
}
`;

export const Td = styled.td`
padding: 15px 5px;
font-size: 16px;
text-align: center;
&:not(:last-child) {
  border-right: 1px solid grey;
`;

export const Tr = styled.tr`
&:nth-of-type(2n) {
  background-color: grey;
`;
