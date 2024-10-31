// src/components/ProgramsSection.tsx
"use client";

import { Users, GraduationCap, Lightbulb, School } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the programs array
const programs = [
  {
    title: "Teachers' Connekt",
    description: "A networking platform for teachers to share experiences, resources, and best practices.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Users
  },
  {
    title: "TaRL Teaching at the Right Level",
    description: "An innovative approach to education that tailors teaching methods to students' current learning levels.",
    image: "/placeholder.svg?height=200&width=300",
    icon: GraduationCap
  },
  {
    title: "UNLEASHED - Teachers Professional Development Training",
    description: "Intensive training program designed to unlock teachers' full potential and enhance their professional skills.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Lightbulb
  },
  {
    title: "Teachers Academy",
    description: "Comprehensive, long-term program for continuous teacher education and career advancement.",
    image: "/placeholder.svg?height=200&width=300",
    icon: School
  }
];

export default function ProgramsSection() {
  return (
    <motion.section 
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image 
                src={program.image} 
                alt={program.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <program.icon className="h-16 w-16 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
