"use client";

import { Button } from "@/Uicomponents/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gray-100 px-4 py-1 rounded-full mb-6">
              <p className="text-gray-700 font-medium">
                Bridging Students & Opportunities
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Your <span className="text-[#f77f00]">One Stop Shop</span> <br />
              For All Things <span className="text-black">Tech</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              We connect students, professionals, and organizations in a
              collaborative community designed to foster career growth and
              success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#e63946] hover:bg-[#c1121f] text-white"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("mission")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative p-8 bg-gray-50 rounded-lg shadow-sm">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <StudentSpotLogo className="w-20 h-20" />
              </div>
              <div className="pt-12 text-center">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="text-black">The </span>
                  <span className="text-[#e63946]">Student </span>
                  <span className="text-[#f77f00]">Spot</span>
                </h3>
                <p className="text-gray-600">
                  Your One Stop Shop For All Things Tech
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StudentSpotLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 20L120 60L100 100L80 60L100 20Z" fill="#f77f00" />
      <path d="M60 60L80 100L60 140L40 100L60 60Z" fill="#e63946" />
      <path d="M140 60L160 100L140 140L120 100L140 60Z" fill="#f77f00" />
      <path d="M100 100L120 140L100 180L80 140L100 100Z" fill="#e63946" />
      <circle cx="100" cy="20" r="5" fill="#FFD700" />
    </svg>
  );
}
