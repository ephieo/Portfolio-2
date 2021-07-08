import styled from 'styled-components';
import dashed from './../public/dashed-sqr.svg';

export const IndexIcon = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid black 1rem; */
  /* padding-left: 51rem; */
`;

export const TechStackIcons = styled.div`
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    opacity: 0.5;
  }
`;

export const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kenia', cursive;
  /* border: solid black 1rem; */
`;
export const ColumnCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kenia', cursive;
  flex-direction: column;
  /* border: solid black 1rem; */
`;
export const RowCont = styled.div`
  width: 60vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kenia', cursive;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: solid black 1rem; */
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  /* border: solid black 3px; */
  display: flex;
  justify-content: flex-end;
`;

export const Choices = styled.h1`
  font-family: 'Kenia', cursive;
  color: #144444;
  font-size: 2rem;
  margin: 1rem;
  padding: 0.6rem;
  &:hover {
    border-bottom: solid 4px #144444;
    border-radius: 10px;
  }
  &:active {
    border: solid 5px #144444;
    border-radius: 20px;
  }
`;
export const IconText = styled.h3`
  margin: 0.7rem;
  text-align: center;

  &:hover {
    color: red;
  }
`;

export const ProjectDiv = styled.div`
  width: 11vw;
  height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border || 'dashed 5px #144444'};

  border-radius: 20px;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
`;
