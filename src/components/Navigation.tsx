"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "All Services", href: "/services" },
      { name: "For Attorneys", href: "/for-attorneys" },
      { name: "For Individuals", href: "/for-individuals" },
      { name: "For Corporations", href: "/for-corporations" },
    ]
  },
  { 
    name: "Locations", 
    href: "/locations",
    dropdown: [
      { name: "All Locations", href: "/locations" },
      { name: "Colorado", href: "/locations/colorado" },
      { name: "Florida", href: "/locations/florida" },
      { name: "Texas", href: "/locations/texas" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-cream/95 border-b border-cream-dark sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Logo className="h-8 w-auto text-navy transition-all duration-300 group-hover:text-navy-light" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.dropdown && item.dropdown.some(sub => pathname === sub.href));
              
              if (item.dropdown) {
                const isDropdownOpen = item.name === 'Services' ? servicesOpen : locationsOpen;
                const setDropdownOpen = item.name === 'Services' ? setServicesOpen : setLocationsOpen;
                
                return (
                  <div 
                    key={item.name}
                    className="relative group/dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`text-sm font-normal transition-colors relative group ${
                        isActive
                          ? "text-navy"
                          : "text-navy-lighter hover:text-navy"
                      }`}
                    >
                      {item.name}
                      <svg className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`absolute bottom-0 left-0 w-full h-px bg-navy transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="w-56 bg-white border border-cream-dark shadow-xl rounded-sm overflow-hidden">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-6 py-3 text-sm font-normal transition-all ${
                                pathname === subItem.href
                                  ? "bg-cream-dark text-navy"
                                  : "text-navy-lighter hover:bg-cream-dark/30 hover:text-navy"
                              } ${index > 0 ? 'border-t border-cream-dark/50' : ''}`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-normal transition-colors relative group ${
                    isActive
                      ? "text-navy"
                      : "text-navy-lighter hover:text-navy"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-navy transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
            <a
              href="tel:+17205944441"
              className="ml-4 px-6 py-2.5 bg-navy text-cream text-sm font-normal hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-sm text-navy-lighter hover:text-navy hover:bg-cream-dark"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-cream-dark bg-white">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.dropdown) {
                const isDropdownOpen = item.name === 'Services' ? servicesOpen : locationsOpen;
                const setDropdownOpen = item.name === 'Services' ? setServicesOpen : setLocationsOpen;
                
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                      className="w-full text-left px-4 py-3 text-base font-normal text-navy-lighter hover:text-navy hover:bg-cream-dark/30 rounded-sm transition-all flex items-center justify-between"
                    >
                      {item.name}
                      <svg className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 text-sm font-normal rounded-sm transition-all ${
                              pathname === subItem.href
                                ? "bg-cream-dark text-navy"
                                : "text-navy-lighter/70 hover:text-navy hover:bg-cream-dark/30"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-sm text-base font-normal transition-all ${
                    isActive
                      ? "bg-cream-dark text-navy"
                      : "text-navy-lighter hover:text-navy hover:bg-cream-dark/30"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="tel:+17205944441"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 px-4 py-3 bg-navy text-cream text-center text-base font-normal hover:bg-navy-light hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

