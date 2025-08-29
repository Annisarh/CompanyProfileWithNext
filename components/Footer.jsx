import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="pt-20 pb-6 flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-4">
        <p>&copy; Copyright 2025</p>
        <div className="flex gap-4">
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Privasi</Link>
          <Link href={"#"}>Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
