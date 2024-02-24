import Image from 'next/image';
import Link from 'next/link';

const LogoLight = () => {
  return (
    <Link href='/'>
      <Image
        src='/assets/img/logo-light.png'
        alt='AIMass'
        width='96'
        height='24'
      />
    </Link>
  );
};

export default LogoLight;
