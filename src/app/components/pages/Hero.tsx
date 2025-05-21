"use client";

import { Button } from "@/Uicomponents/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/Uicomponents/ui/card";
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
            <Card
              className="w-full max-w-md shadow-2lg"
              style={{ boxShadow: "0 4px 20px rgba(230, 57, 70, 0.4)" }}
            >
              <CardHeader className="flex justify-center pb-0">
                <Image
                  src="/studentSpotlogo.jpg"
                  alt="Student Spot Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-gray-600">Welcome to Student Spot</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
