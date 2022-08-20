import styled from "@emotion/styled";

export const Container = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
width: 350px;
overflow: hidden;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0 5px 10px #808080;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  margin: 40px auto;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

export const Tag = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color:; black;
`;

export const Location = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: black;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  background-color: #f1f1f1;
  border-top: 1px solid '#f1f1f1';
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid '#f1f1f1';
  }
`;

export const Label = styled.span`
  display: block;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: black;
`;

export const Quantity = styled.span`
  display: block;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;