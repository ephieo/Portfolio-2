import { IndexIcon, MainCont } from './../styled-components/reusables';
import icon from './../public/index-logo-2.svg';
import Header from './../components/Header.js';
import Image from 'next/image';
// import { useState } from 'react';

export default function Home() {
  return (
    <MainCont>
      <Header />
      <IndexIcon>
        <Image src={icon} alt="" />
      </IndexIcon>
    </MainCont>
  );
}
