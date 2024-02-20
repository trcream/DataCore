import Image from 'next/image';
import Link from 'next/link';

const LogoDark = () => {
  return (
    <Link href='/'>
      <Image
        src='/assets/img/logo-dark.png'
        alt='AIMass'
        width='96'
        height='24'
      />
    </Link>
  );
};

export default LogoDark;
