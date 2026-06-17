'use client';
import { useEffect, useState } from 'react';
import Modal from "@/components/Modal";

type NavLinkProps = {
  text: string;
}

const NavLink = ({ text }: NavLinkProps) => {
  return (
    <span className="text-[15px] md:text-[18px] xl:text-[26px] font-mono tracking-[-0.04em] leading-[1.2]">{text}</span>
  );
}

export default function Header(){
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showModal]);

  return (
    <>
      <header className="pt-5.5 px-2.5">
        <nav className="px-7.5">
          <ul className="flex justify-between">
            <li><button className='cursor-pointer' onClick={() => setShowModal(true)}><NavLink text="ABOUT" /></button></li>
            <li><button className='cursor-pointer' onClick={() => setShowModal(true)}><NavLink text="DIRECTIONS" /></button></li>
          </ul>
        </nav>
      </header>
      {showModal && <Modal onClose={()=> setShowModal(false)} />}
    </>
  );
}