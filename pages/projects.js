import Header from './../components/Header.js';
import ProjectComp from '../components/ProjectComp';

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
        <ProjectComp
          borderText="solid 8px #144444"
          text=" CONSOLE FLAPPY BIRD GAME"
          href="https://github.com/ephieo/CLI-flappy-bird"
        />
        <ProjectComp
          text="CHECKIFY DLS"
          href="https://github.com/ephieo/DLS-TFB"
        />
        <ProjectComp
          borderText="solid 8px #144444"
          text="BLACK QUEER TRAVEL GUIDE"
          href="https://github.com/fac20/tfb-kjmp-frontend"
        />
        <ProjectComp
          text="STOPWATCH"
          href="https://github.com/ephieo/Stopwatch"
        />
        <ProjectComp
          text="CALCULATOR"
          href="https://github.com/ephieo/FAC20-CALCULATOR"
        />
        <ProjectComp borderText="solid 8px #144444" text="MARVEL APP" href="" />
        <ProjectComp text="PERIODIC TABLE APP" href="/" />
        <ProjectComp
          borderText="solid 8px #144444"
          text="CALCULATOR 2"
          href="https://github.com/ephieo/FAC2020-CALC-2-"
        />
      </RowCont>
    </MainCont>
  );
}
