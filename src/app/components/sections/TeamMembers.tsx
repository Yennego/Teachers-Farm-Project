// src/app/components/sections/TeamMembers.tsx

import Image from 'next/image'
import FadeInSection from '../FadeInSection'

const teamMembers = [
  {
    name: "Tarlee A. Nuahn",
    role: "Founder & CEO",
    image: "/teamphoto/tarlee.jpeg",
    bio: "With over 20 years of experience in education, Tarlee founded Teacher's Farm to revolutionize teacher training in Liberia."
  },
  {
    name: "Blessed Luah Nuahn",
    role: "Head of Professional Development",
    image: "/teamphoto/luah.jpg",
    bio: "Luah brings innovative teaching methodologies to our training programs, ensuring teachers are equipped with the latest skills."
  },
  {
    name: "John Smith",
    role: "Head of Professional Development",
    image: "/teamphoto/john.jpg",
    bio: "John brings innovative teaching methodologies to our training programs, ensuring teachers are equipped with the latest skills."
  },
  {
    name: "Paul Doe",
    role: "Head of Professional Development",
    image: "/teamphoto/paul.jpg",
    bio: "Paul brings innovative teaching methodologies to our training programs, ensuring teachers are equipped with the latest skills."
  },
]

export default function TeamMembers() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeInSection key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <div className="relative group">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={400} 
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 text-center"> 
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}