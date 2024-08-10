import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/img_placeholder/logo-dark.png";

const LogoDark = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='AIMass' width='125' height='35' />
    </Link>
  );
};

export default LogoDark;
