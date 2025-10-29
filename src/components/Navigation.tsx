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
    <nav className="bg-cream/95 border-b border-cream-dark sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <svg 
                className="h-8 w-auto text-navy transition-all duration-300 group-hover:text-navy-light" 
                viewBox="0 0 310 102" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1,0,0,1,-787.019,-645.628)">
                  <g transform="matrix(1.01891,0,0,1.03226,-18.7851,154.666)">
                    <path d="M875.524,529.386L790.847,529.386L790.847,519.504L875.524,519.504L875.524,491.912C875.524,482.92 882.92,475.62 892.03,475.62L993.448,475.62C1002.56,475.62 1009.95,482.92 1009.95,491.912L1009.95,519.504L1094.63,519.504L1094.63,529.386L1009.95,529.386L1009.95,557.845C1009.95,566.837 1002.56,574.138 993.448,574.138L892.03,574.138C882.92,574.138 875.524,566.837 875.524,557.845L875.524,529.386ZM1000.77,491.912C1000.77,487.923 997.489,484.685 993.448,484.685L892.03,484.685C887.989,484.685 884.708,487.923 884.708,491.912L884.708,557.845C884.708,561.834 887.989,565.072 892.03,565.072L993.448,565.072C997.489,565.072 1000.77,561.834 1000.77,557.845L1000.77,491.912ZM914.78,536.116L914.78,552.78L906.87,552.78L906.87,497.791L925.249,497.791C930.081,497.791 934.23,498.555 937.694,500.084C941.159,501.612 943.822,503.812 945.685,506.683C947.548,509.552 948.479,512.987 948.479,516.987C948.479,520.934 947.548,524.345 945.685,527.219C943.822,530.093 941.159,532.294 937.694,533.824C934.23,535.352 930.081,536.116 925.249,536.116L914.78,536.116ZM914.78,529.316L925.005,529.316C930.098,529.316 933.954,528.239 936.574,526.085C939.194,523.929 940.503,520.897 940.503,516.987C940.503,513.024 939.194,509.967 936.574,507.817C933.954,505.666 930.098,504.591 925.005,504.591L914.78,504.591L914.78,529.316ZM970.697,552.78L970.697,497.791L978.607,497.791L978.607,552.78L970.697,552.78Z" fill="currentColor"/>
                  </g>
                </g>
              </svg>
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
                          ? "text-navy"
                          : "text-navy-lighter hover:text-navy"
                      }`}
                    >
                      {item.name}
                      <svg className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`absolute bottom-0 left-0 w-full h-px bg-navy transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                    
                    {servicesOpen && (
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
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-navy text-cream text-sm font-normal hover:bg-navy-light transition-all rounded-sm"
            >
              Get Started
            </Link>
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
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left px-4 py-3 text-base font-normal text-navy-lighter hover:text-navy hover:bg-cream-dark/30 rounded-sm transition-all flex items-center justify-between"
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
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 px-4 py-3 bg-navy text-cream text-center text-base font-normal hover:bg-navy-light transition-all rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

