import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 py-2 md:py-8 text-gray-300 flex flex-col items-center justify-center gap-4 bg-gray-800 w-full mt-20">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left mb-4 md:mb-0">
          <span className="mb-2 md:mb-0">
            Rasinkatu 20 <br />
            01360 Vantaa <br />
            Finland <br />
          </span>

          <span>
            sulaimon.ekundayo1@gmail.com
            <br />
            +358 00 000 0000
          </span>
        </div>

        <div className="flex gap-3 text-2xl">
          <a href="https://www.linkedin.com/in/sulaimonekundayo/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/noble.ekundayo/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href="#https://www.instagram.com/druidfi/" target="_blank" rel="noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="#https://x.com/druidfi" target="_blank" rel="noreferrer">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
      <hr className="w-full border-t border-gray-600" />

      <p className="text-center text-sm leading-loose">Sulaimon Ekundayo &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
