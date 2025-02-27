import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white h-20">
      <h1 className="text-[26px] leading-[80px] font-semibold">Angel Afube</h1>
      <div>
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/about"
            className="text-black text-[18px] hover:text-gray-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-black text-[18px] hover:text-gray-600"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="text-black text-[18px] hover:text-gray-600"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="text-black text-[18px] hover:text-gray-600"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-black text-[18px] hover:text-gray-600"
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="flex space-x-6">
        <li>
          <Link href="/about" className="hover:text-gray-600">
            <Image src="/file.svg" alt="linkedin-icon" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-600">
            <Image src="/file.svg" alt="cv-icon" width={30} height={30} />
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
