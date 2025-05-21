"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LogIn, Menu, X, UserPlus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/Uicomponents/ui/button";
import LoginModal from "../../components/layout/LoginModal"; // Update if the path changes
import SignupModal from "../../components/layout/SingupModal"; // Add this component

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Mission", href: "#mission" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/studentSpotlogo.jpg"
              alt="Student Spot Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-xl font-bold">
              <span className="text-black">The </span>
              <span className="text-[#e63946]">Student </span>
              <span className="text-[#f77f00]">Spot</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#f77f00] transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
            <Button
              variant="default"
              className="flex items-center gap-2 bg-[#f77f00] text-white hover:bg-[#e76f00]"
              onClick={() => setIsSignupModalOpen(true)}
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-2 px-4 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="py-2 px-4 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSignupModalOpen(true);
                }}
                className="py-2 px-4 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Sign Up
              </button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Modals */}
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
      {isSignupModalOpen && (
        <SignupModal onClose={() => setIsSignupModalOpen(false)} />
      )}
    </>
  );
}
