// src/app/components/sections/CorePillars.tsx

import FadeInSection from '../FadeInSection';

export default function CorePillars() {
  return (
    <FadeInSection>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Pillars</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Building Vibrant Relationships</h3>
              <p>We foster strong connections between colleagues and customers, creating a supportive and collaborative educational ecosystem.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Teamwork for Outstanding Results</h3>
              <p>Our approach emphasizes collective effort and shared goals, driving excellence in teaching and learning outcomes.</p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

  