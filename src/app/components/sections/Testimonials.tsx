// src/app/components/sections/Testimonials.tsx

import Image from 'next/image'
import FadeInSection from '../FadeInSection'

const testimonials = [
  {
    name: "Sarah K.",
    role: "High School Teacher",
    quote: "Teacher's Farm transformed my approach to teaching. I'm now more confident and effective in the classroom.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "David M.",
    role: "Primary School Principal",
    quote: "The impact of Teacher's Farm on our school has been remarkable. Our teachers are more engaged and our students are thriving.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Louis D.",
    role: "Elementary School Teacher",
    quote: "The impact of Teacher's Farm on our school has been remarkable. Our teachers are more engaged and our students are thriving.",
    image: "/placeholder.svg?height=100&width=100"
  },
  // {
  //   name: "Luther T.",
  //   role: "Tertiary School Teacher",
  //   quote: "The impact of Teacher's Farm on our school has been remarkable. Our teachers are more engaged and our students are thriving.",
  //   image: "/placeholder.svg?height=100&width=100"
  // },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-12">What People Say About Us</h2>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={50} 
                    height={50} 
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-green-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
