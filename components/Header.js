import { Header } from './../styled-components/reusables.js';

import navbarIcon from './../public/navbar-icon.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  function handleNav() {
    if (router.pathname.includes('navbar')) {
      router.back();
    }
    router.push('/navbar');
  }
  const router = useRouter();
  return (
    <Header>
      <button type="button" onClick={() => handleNav()} className="headerBtn">
        <div className="navbarIcon">
          <Image src={navbarIcon} alt="navbar icon" />
        </div>
      </button>
    </Header>
  );
}
