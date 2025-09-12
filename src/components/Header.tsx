import React from 'react';
import govLogo from '@/assets/gov-logo.png';
import collegeLogo from '@/assets/college-logo.png';

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Government Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20">
              <img
                src={govLogo}
                alt="Government of Bangladesh"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* College Logo and Title */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-1">
                New Government Degree College
              </h1>
              <p className="text-xl md:text-2xl text-primary-light mb-1">
                নিউ গভর্নমেন্ট ডিগ্রি কলেজ, রাজশাহী
              </p>
              <p className="text-sm text-muted-foreground">
                Established in 1964 • Rajshahi, Bangladesh
              </p>
            </div>
            <div className="w-20 h-20">
              <img
                src={collegeLogo}
                alt="New Government Degree College"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-right text-sm text-muted-foreground hidden lg:block">
            <div className="mb-1">EIIN: 121945</div>
            <div className="mb-1">College Code: 1234</div>
            <div className="text-xs text-primary">Est. 1964</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;