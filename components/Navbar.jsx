"use client";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="navbar py-6">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-3xl font-bold">Ngoding.</h1>
          </div>
          <ul
            className={`menu flex items-center gap-12 md:static absolute top-24 left-1/2 -translate-x-1/2 md:-translate-x-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-black ${
              isMenu ? "opacity-100" : "opacity-0"
            } transition-all duration-700 ease-in-out md:opacity-100 md:transition-none md:text-base text-xl`}
          >
            <li>
              <Link href={"#beranda"}>Beranda</Link>
            </li>
            <li>
              <Link href={"#layanan"}>Layanan</Link>
            </li>
            <li>
              <Link href={"#proyek"}>Proyek</Link>
            </li>
            <li>
              <Link href={"#kontak"}>Kontak</Link>
            </li>
          </ul>
          <div className="md:hidden block" onClick={() => setIsMenu(!isMenu)}>
            <i className="ri-menu-3-line ri-2x font-bold"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
