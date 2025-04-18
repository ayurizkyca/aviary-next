'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-[20px] md:px-[40px] py-[10px] bg-white flex justify-between items-center text-[#333333] relative">
      {/* Hamburger Icon - Mobile */}
      <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/icons/hamburger-icon.png"
          alt="menu"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>

      {/* Logo */}
      <Image
        src="/img/logo-aviary.png"
        height={46}
        width={104}
        alt="logo-aviary"
        className="mx-auto md:mx-0"
      />

      {/* Navigation Menu - Desktop */}
      <ul className="hidden md:flex gap-8">
        <li className="cursor-pointer">Beranda</li>
        <li className="cursor-pointer">Lindungi Burung</li>
        <li className="cursor-pointer">Donasi</li>
        <li className="cursor-pointer">Pemantauan Live</li>
      </ul>

      {/* Button - Desktop */}
      <div className="hidden md:flex flex-row gap-2">
        <Button>Our Work</Button>
        <Button>Get Involved</Button>
      </div>

      {/* Navigation Menu - Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 p-4 md:hidden">
          <ul className="flex flex-col gap-4 mb-4">
            <li className="cursor-pointer">Beranda</li>
            <li className="cursor-pointer">Lindungi Burung</li>
            <li className="cursor-pointer">Donasi</li>
            <li className="cursor-pointer">Pemantauan Live</li>
          </ul>
          <div className="flex flex-col gap-2">
            <Button>Our Work</Button>
            <Button>Get Involved</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
