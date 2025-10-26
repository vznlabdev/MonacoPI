"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white/95 border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-normal tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Monaco
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.dropdown && item.dropdown.some(sub => pathname === sub.href));
              
              if (item.dropdown) {
                return (
                  <div 
                    key={item.name}
                    className="relative group/dropdown"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`text-sm font-normal transition-colors relative group ${
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {item.name}
                      <svg className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`absolute bottom-0 left-0 w-full h-px bg-neutral-900 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                    
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="w-56 bg-white border border-neutral-200 shadow-xl rounded-sm overflow-hidden">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-6 py-3 text-sm font-normal transition-all ${
                                pathname === subItem.href
                                  ? "bg-neutral-100 text-neutral-900"
                                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                              } ${index > 0 ? 'border-t border-neutral-100' : ''}`}
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
                      ? "text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-neutral-900 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-neutral-900 text-white text-sm font-normal hover:bg-neutral-700 transition-all rounded-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
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
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left px-4 py-3 text-base font-normal text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-sm transition-all flex items-center justify-between"
                    >
                      {item.name}
                      <svg className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 text-sm font-normal rounded-sm transition-all ${
                              pathname === subItem.href
                                ? "bg-neutral-100 text-neutral-900"
                                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
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
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 px-4 py-3 bg-neutral-900 text-white text-center text-base font-normal hover:bg-neutral-700 transition-all rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

