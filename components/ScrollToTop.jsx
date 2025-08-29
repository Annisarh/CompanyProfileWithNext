"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      className={`fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full text-center hover:bg-slate-700 cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      href={"#beranda"}
    >
      <i className="ri-arrow-up-line ri-2x"></i>
    </Link>
  );
};

export default ScrollToTop;
