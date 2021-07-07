import Header from './../components/Header';
// import Icon from './../components/Icon'
import Image from 'next/image';
import {
  MainCont,
  RowCont,
  TechStackIcons,
  IconText,
} from '../styled-components/reusables';
import html from './../public/html.svg';
import react from './../public/react.svg';
import js from './../public/js.svg';
import cpp from './../public/cpp.svg';
import next from './../public/next.svg';
import git from './../public/git.svg';
import travis from './../public/travis.svg';
import css from './../public/css.svg';
import netlify from './../public/netlify.svg';
import heroku from './../public/heroku.svg';
import jest from './../public/jest.svg';
import cypress from './../public/cypress.svg';
import styled from './../public/styled.svg';
import postgres from './../public/postgres.svg';
import figma from './../public/figma.svg';

export default function TechStack() {
  return (
    <>
      <Header />
      <MainCont>
        <RowCont>
          <TechStackIcons>
            <Image src={jest} alt="logo for Jest icon" />
            <IconText>JEST</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={cypress} alt="logo for Cypress icon" />
            <IconText>CYPRESS</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={travis} alt="logo for Travics CI icon" />
            <IconText>TRAVIS CI</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={heroku} alt="logo for Heroku icon" />
            <IconText>HEROKU</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={styled} alt="logo for styled-components icon" />
            <IconText>STYLED COMPONENTS</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={js} alt="logo for JavaScript icon" />
            <IconText>JAVASCRIPT</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={cpp} alt="logo for C++ icon" />
            <IconText>C++</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={css} alt="logo for CSS icon" />
            <IconText>CSS</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={react} alt="logo for react icon" />
            <IconText>REACT</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={html} alt="logo for html icon" />
            <IconText>HTML</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={netlify} alt="logo for Netlify icon" />
            <IconText>NETLIFY</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={postgres} alt="logo for PostgreSQL icon" />
            <IconText>POSTGRESQL</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={figma} alt="logo for Figma icon" />
            <IconText>FIGMA</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={next} alt="logo for Next.js icon" />
            <IconText>NEXT.JS</IconText>
          </TechStackIcons>
          <TechStackIcons>
            <Image src={git} alt="logo for Git icon" />
            <IconText>GIT</IconText>
          </TechStackIcons>
        </RowCont>
      </MainCont>
    </>
  );
}
