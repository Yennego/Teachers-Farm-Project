// src/app/components/sections/Services.tsx

import FadeInSection from '../FadeInSection';
import Link from 'next/link';
import { BookOpen, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <FadeInSection>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Teacher's Professional Development</h3>
              <p className="mb-4">Comprehensive training programs to enhance teaching, classroom management, and educational technology skills.</p>
              <Link href="/contact" className="text-green-600 hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Hiring Services</h3>
              <p className="mb-4">Recruitment services for top-tier teaching talent to meet the needs of educational institutions.</p>
              <Link href="/contact" className="text-green-600 hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Educational Consultancy</h3>
              <p className="mb-4">Expert consultancy services, offering advice on curriculum development, technology integration, and school improvement.</p>
              <Link href="/contact" className="text-green-600 hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}