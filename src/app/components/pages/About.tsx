"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/Uicomponents/ui/card";
import { Quote } from "lucide-react";

const stats = [
  { value: "500+", label: "Students Helped" },
  { value: "100+", label: "Partner Companies" },
  { value: "50+", label: "Events Per Year" },
  { value: "95%", label: "Success Rate" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about our journey, our team, and the impact we've made in
            helping students navigate their tech career paths.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              The Student Spot was founded in 2018 with a simple mission: to
              help students navigate the complex and rapidly evolving tech
              industry. What began as a small mentorship program has grown into
              a comprehensive platform that serves students across the country.
            </p>
            <p className="text-gray-600">
              Today, we work with leading tech companies, educational
              institutions, and industry experts to provide students with the
              resources, connections, and opportunities they need to succeed in
              their careers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative p-6 bg-[#e63946] text-white">
                  <Quote className="h-8 w-8 opacity-50 absolute top-4 right-4" />
                  <p className="text-lg italic mb-4">
                    "The Student Spot transformed my job search and helped me
                    land my dream role at a leading tech company. The mentorship
                    and resources they provided were invaluable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 mr-3"></div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm opacity-80">
                        Software Engineer, Google
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#f77f00] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're a dedicated team of educators, industry professionals, and
            tech enthusiasts committed to student success.
          </p>

          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our team"
              className="rounded-lg w-full max-w-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
