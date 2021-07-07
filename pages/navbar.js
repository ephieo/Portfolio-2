import { Choices, ColumnCont } from '../styled-components/reusables';
import Header from './../components/Header';
import Link from 'next/link';
export default function NavbarChoices() {
  return (
    <>
      <Header />
      <ColumnCont>
        <Link href="/">
          <Choices>HOME</Choices>
        </Link>
        <Link href="/projects">
          <Choices>PROJECTS</Choices>
        </Link>
        <Link href="/blog">
          <Choices>BLOG</Choices>
        </Link>
        <Link href="/tech-stack">
          <Choices>TECH STACK</Choices>
        </Link>
        <Link href="https://ephieo.myportfolio.com/">
          <Choices>PHOTOGRAPHY</Choices>
        </Link>
        <Link href="/design">
          <Choices>DESIGN</Choices>
        </Link>
        <Link href="/socials">
          <Choices>SOCIALS</Choices>
        </Link>
      </ColumnCont>
    </>
  );
}
