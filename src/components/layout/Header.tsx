import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Blocks, Users2, Gift, MessageSquare } from 'lucide-react';
import { NavLink } from './NavLink';
import { ContactFormModal } from '../ui/ContactFormModal';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features', icon: Blocks },
    { href: '#about', label: 'About Us', icon: Users2 },
    { href: '#promotions', label: 'Promotional Offer', icon: Gift },
    { href: '#contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-emerald-400" />
            <span className="ml-2 text-xl font-bold text-white">
              IntelliSync Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} tooltip={link.label}>
                <link.icon className="h-5 w-5" />
              </NavLink>
            ))}

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
             
            </div>
          </div>
        )}
        <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </header>
  );
}
