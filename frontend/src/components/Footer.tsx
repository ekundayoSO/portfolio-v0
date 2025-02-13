import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 py-18 text-gray-300 flex flex-col items-center justify-center gap-4 h-16 bg-gray-800 w-full mt-4">
      <div className="w-full max-w-7xl flex justify-between items-center px-8">
        <div className="flex gap-8">
          <span className="text-left">
            Rasinkatu 20 <br />
            01360 Vantaa <br />
            Finland <br />
          </span>

          <span className="text-left">
            sulaimon.ekundayo1@gmail.com
            <br />
            +358 20 187 6602
          </span>
        </div>

        <div className="flex gap-3 text-2xl">
          <a href="https://www.linkedin.com/company/druid-oy/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/druidfi/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/druidfi/" target="_blank" rel="noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="https://x.com/druidfi" target="_blank" rel="noreferrer">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
      <hr className="w-full border-t border-gray-600" />

      <p className="text-center text-sm leading-loose">Sulaimon Ekundayo &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
