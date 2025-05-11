"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              At The Student Spot, we're committed to bridging the gap between
              academic learning and professional success. We believe that every
              student deserves access to opportunities that will help them
              thrive in their chosen field.
            </p>

            <div className="space-y-4">
              {[
                "Create meaningful connections between students and industry professionals",
                "Provide resources that enhance technical and soft skills",
                "Foster a supportive community where knowledge sharing is encouraged",
                "Help students navigate their career paths with confidence",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 mr-3 mt-1 bg-[#f77f00] rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-semibold">
                  Creating pathways to student success
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
