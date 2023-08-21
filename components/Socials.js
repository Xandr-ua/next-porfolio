// links
import Link from 'next/link';

//icons
import { RiInstagramLine, RiFacebookLine, RiPinterestLine, RiArticleLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://www.instagram.com/babyuk_sasha/'}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://www.facebook.com/babyuk.sasha'}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link
        href={'https://pin.it/1PP7uvS'}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
