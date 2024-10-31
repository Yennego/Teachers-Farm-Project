// src/app/components/layout/Header.tsx
"use client";

// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';  
// import { throttle } from 'lodash';


// const NavLink = React.memo(({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => (
//   <Link href={href} passHref prefetch={true}>
//     <motion.div
//       className={`text-white hover:text-green-200 transition-colors ${isActive ? "underline" : ""}`}
//       whileHover={{ scale: 1.05 }}
//       transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.2 }}
//     >
//       {label}
//     </motion.div>
//   </Link>
// ));

// NavLink.displayName = 'NavLink';

// export default function Header() {
//   const pathname = usePathname();
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isMobileNavOpen, setMobileNavOpen] = useState(false);  // State for mobile nav toggle

//   const handleScroll = useCallback(
//     throttle(() => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const currentScroll = window.scrollY;
//       const progress = (currentScroll / totalScroll) * 100;
//       setScrollProgress(progress);
//     }, 100), []
//   );

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);

//   const navLinks = useMemo(() => [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/contact", label: "Contact" }
//   ], []);

//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 z-50 bg-green-600 bg-opacity-80 backdrop-blur-sm"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.3 }}
//     >
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <Link href="/" className="flex items-center space-x-3">
//           <Image 
//             src="/logo/logo2.jpeg"
//             alt="Teacher's Farm Logo"
//             width={50}
//             height={50}
//             className="rounded-full"
//             priority
//           />
//           <span className="text-2xl font-bold text-white">Teacher's Farm</span>
//         </Link>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileNavOpen(!isMobileNavOpen)} className="text-white focus:outline-none">
//             {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Regular Nav for Desktop */}
//         <nav className="hidden md:flex">
//           <ul className="flex space-x-6">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <NavLink href={link.href} label={link.label} isActive={pathname === link.href} />
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mobile Nav Dropdown */}
//         {isMobileNavOpen && (
//           <motion.nav
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             className="absolute top-full left-0 w-full bg-green-600 md:hidden z-50"
//           >
//             <ul className="flex flex-col space-y-4 py-4 px-6">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <NavLink href={link.href} label={link.label} isActive={pathname === link.href} />
//                 </li>
//               ))}
//             </ul>
//           </motion.nav>
//         )}
//       </div>
//       <motion.div
//         className="h-1 bg-white"
//         style={{ width: `${scrollProgress}%` }}
//         initial={{ width: 0 }}
//         animate={{ width: `${scrollProgress}%` }}
//         transition={{ ease: "easeOut", duration: 0.2 }}
//       />
//     </motion.header>
//   );
// }




// src/components/Header.tsx

'use client';
import { useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Dynamically import MobileNav
const MobileNav = dynamic(() => import('../MobileNav'), { 
  ssr: false,
  loading: () => <div>...</div>
});

// Define types
type NavLink = {
  href: string;
  label: string;
};

// Constants
const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" }
];

// NavLink component
const NavLink = ({ href, label, isActive }: NavLink & { isActive: boolean }) => (
  <Link href={href} prefetch={false}>
    <motion.span
      className={`text-white hover:text-green-200 transition-colors ${isActive ? "underline" : ""}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.2 }}
    >
      {label}
    </motion.span>
  </Link>
);

// Header component
export default function Header() {
  const pathname = usePathname();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform scrollYProgress to a value that can be used with scaleX
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen(prev => !prev);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-green-600 bg-opacity-80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3" aria-label="Home">
          <Image 
            src="/logo/logo2.jpeg"
            alt="Teacher's Farm Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
            loading="eager"
          />
          <span className="text-2xl font-bold text-white">Teacher's Farm</span>
        </Link>

        <button 
          onClick={toggleMobileNav} 
          className="md:hidden text-white focus:outline-none"
          aria-expanded={isMobileNavOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink {...link} isActive={pathname === link.href} />
              </li>
            ))}
          </ul>
        </nav>

        {isMobileNavOpen && <MobileNav links={NAV_LINKS} currentPath={pathname} />}
      </div>
      
      {/* Scroll progress bar */}
      <motion.div
        className="h-1 bg-white origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
}
