"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StudentSpotLogo from "../../../public/studentSpotlogo.jpg";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Image
          src={StudentSpotLogo}
          alt="Student Spot Logo"
          width={256}
          height={256}
          className="w-64 h-64"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-4xl font-bold text-center"
        >
          <span className="text-black">The </span>
          <span className="text-[#e63946]">Student </span>
          <span className="text-[#f77f00]">Spot</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-2 text-lg text-center text-gray-600"
        >
          Your One Stop Shop For All Things Tech
        </motion.p>
      </motion.div>
    </div>
  );
}
