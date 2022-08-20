import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  margin: 25px auto;
  width: 60%;
  min-width: 500px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 5px 10px #808080;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 50px 0;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  
`;

export const StatsList = styled.ul`
  box-sizing: border-box;
  display: flex;
  padding: 0;
  margin: 0 auto;
  list-style: none;
`;

export const StatsListItem = styled.li`
  display: block;
  box-sizing: border-box;
  flex-basis: calc(100% / 5);
  padding: 20px 5px;
  background-color: tomato;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  text-shadow: 0 5px 10px black;
  font-size: 20px;
  text-align: center;
`;

export const Percentage = styled.span`
  display: block;
  margin-bottom: 0;
  text-shadow: 0 5px 10px black;
  font-size: 25px;
  text-align: center;
`;