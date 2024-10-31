// src/app/components/ActivitiesCard.tsx
"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const activities = [
  {
    title: "Teacher Training Workshop",
    description: "Intensive 3-day workshop on modern teaching methodologies and classroom management techniques.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Educational Technology Seminar",
    description: "Learn about the latest educational technologies and how to integrate them into your curriculum.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Leadership in Education Conference",
    description: "Annual conference bringing together educational leaders to discuss the future of education in Liberia.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Student-Centered Learning Webinar",
    description: "Online session focusing on strategies to promote student engagement and active learning.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Curriculum Development Workshop",
    description: "Collaborative session on designing and implementing effective curricula for diverse learning needs.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Education Policy Forum",
    description: "Open discussion on current educational policies and their impact on teachers and students.",
    image: "/placeholder.svg?height=200&width=300"
  }
];

export default function Card() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const handleScrollEvent = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScrollEvent);
      return () => container.removeEventListener('scroll', handleScrollEvent);
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {activities.map((activity, index) => (
              <div key={index} className="flex-none w-80 snap-start mr-6 last:mr-0">
                <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                  <Image 
                    src={activity.image} 
                    alt={activity.title} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-opacity duration-300 ease-in-out"
            style={{ opacity: scrollPosition > 0 ? 1 : 0 }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-opacity duration-300 ease-in-out"
            style={{ opacity: scrollPosition < (activities.length - 3) * 300 ? 1 : 0 }}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
