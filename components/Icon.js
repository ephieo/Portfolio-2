import Image from 'next/image';
import { TechStackIcons } from '../styled-components/reusables';

export default function Icon(src, altText) {
  return (
    <TechStackIcons>
      <Image src={src} alt={`logo for ${altText} icon`} width="10" />
    </TechStackIcons>
  );
}
