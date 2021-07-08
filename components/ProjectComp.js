import { ProjectDiv } from '../styled-components/reusables';
import Link from 'next/link';
export default function ProjectComp({ text, borderText, href }) {
  return (
    <Link href={href}>
      <ProjectDiv border={borderText}>{text}</ProjectDiv>
    </Link>
  );
}
