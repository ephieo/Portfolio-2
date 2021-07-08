import Header from './../components/Header.js';

import {
  ProjectDiv,
  MainCont,
  RowCont,
} from './../styled-components/reusables';

export default function Projects() {
  return (
    <MainCont>
      <Header />
      <RowCont>
        <ProjectDiv border="solid 8px #144444">
          CONSOLE FLAPPY BIRD GAME
        </ProjectDiv>
        <ProjectDiv>CHECKIFY DLS</ProjectDiv>
        <ProjectDiv border="solid 8px #144444">
          BLACK QUEER TRAVEL GUIDE
        </ProjectDiv>
        <ProjectDiv>CALCULATOR</ProjectDiv>
        <ProjectDiv border="solid 8px #144444">STOPWATCH</ProjectDiv>
        <ProjectDiv>MARVEL APP</ProjectDiv>
      </RowCont>
    </MainCont>
  );
}
