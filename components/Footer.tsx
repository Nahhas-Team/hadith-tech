import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div _ngcontent-kty-c18="" className="w-[100vw-32px] px-4">
        <svg
          _ngcontent-kty-c18=""
          aria-hidden="true"
          width="100%"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            _ngcontent-kty-c18=""
            id="a"
            width="91"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <g _ngcontent-kty-c18="" clip-path="url(#clip0_2426_11367)">
              <path
                _ngcontent-kty-c18=""
                d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                stroke="#43464550"
                stroke-linecap="square"
              ></path>
            </g>
          </pattern>
          <rect
            _ngcontent-kty-c18=""
            width="100%"
            height="100%"
            fill="url(#a)"
          ></rect>
        </svg>
      </div>
      <footer className="py-10 flex items-center justify-between container">
        <h1 className="font-semibold hover:bg-accent py-2 px-4 rounded-3xl cursor-pointer">Hadith Tech</h1>
        
      <div className="flex gap-1 items-center justify-center">
        <Link href="/" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          Home
        </Link>
        <Link href="/about" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          About
        </Link>
        <Link href="/episodes" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          Episodes
        </Link>
        <Link href="/contact" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          Contact
        </Link>
      </div>
      </footer>
    </>
  );
};

export default Footer;
