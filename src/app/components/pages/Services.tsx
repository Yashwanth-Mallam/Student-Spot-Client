"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Briefcase, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Uicomponents/ui/card";

const services = [
  {
    title: "Career Development",
    description:
      "Access workshops, mentorship programs, and resources designed to enhance your professional growth.",
    icon: <BookOpen className="h-10 w-10 text-[#e63946]" />,
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with industry professionals, alumni, and peers through our extensive network and events.",
    icon: <Users className="h-10 w-10 text-[#f77f00]" />,
  },
  {
    title: "Job Placement",
    description:
      "Find internships, part-time positions, and full-time career opportunities with our partner organizations.",
    icon: <Briefcase className="h-10 w-10 text-[#e63946]" />,
  },
  {
    title: "Skills Enhancement",
    description:
      "Develop technical and soft skills through our specialized training programs and certifications.",
    icon: <Award className="h-10 w-10 text-[#f77f00]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to support
            students throughout their academic and professional journeys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
