import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#4682B4] text-white text-center p-4 mt-auto">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center md:mx-40">
        <h1 className="text-sm md:text-base mb-2 md:mb-0">Copyright © 2025 Nando, All Rights Reserved</h1>
        <h1 className="text-sm md:text-base">
          <a href="#" className="hover:underline">
            User Terms & Conditions
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
