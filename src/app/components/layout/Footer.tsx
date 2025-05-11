"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StudentSpotLogo from "../../../public/studentSpotlogo.jpg";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/Uicomponents/ui/input";
import { Button } from "@/Uicomponents/ui/button";
import { toast } from "sonner";
import Image from "next/image";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate subscription
    toast.success("Thanks for subscribing to our newsletter!");

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/studentSpotlogo.jpg"
                alt="Student Spot Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xl font-bold">
                <span className="text-white">The </span>
                <span className="text-[#e63946]">Student </span>
                <span className="text-[#f77f00]">Spot</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Your One Stop Shop For All Things Tech. Connecting students with
              opportunities for success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Services",
                "Contact",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Career Development",
                "Networking Opportunities",
                "Job Placement",
                "Skills Enhancement",
                "Mentorship Programs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and announcements.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
                <Button
                  type="submit"
                  className="ml-2 bg-[#f77f00] hover:bg-[#e76f00] text-white"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} The Student Spot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
