import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academic', href: '/academic' },
    { name: 'Notices', href: '/notices' },
    { name: 'Admission', href: '/admission' },
    { name: 'Form Fillup', href: '/form-fillup' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-hero-gradient text-primary-foreground shadow-medium sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.href}>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-light/20"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Student Portal
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Library
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.href}>
                  <Button
                    variant="ghost"
                    className="text-left justify-start text-primary-foreground hover:bg-primary-light/20 w-full"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;