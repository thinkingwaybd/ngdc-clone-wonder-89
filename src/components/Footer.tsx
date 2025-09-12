import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Globe, Facebook, Youtube, Calendar, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* College Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">New Government Degree College</h3>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                নিউ গভর্নমেন্ট ডিগ্রি কলেজ, রাজশাহী - একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান যা ১৯৬৪ সাল থেকে মানসম্পন্ন উচ্চশিক্ষা প্রদান করে আসছে।
              </p>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Calendar className="w-4 h-4" />
                <span>Established: 1964</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80 mt-2">
                <Users className="w-4 h-4" />
                <span>Students: 3000+</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  'About College',
                  'Academic Programs',
                  'Admission Process',
                  'Faculty Members',
                  'Campus Facilities',
                  'Student Services',
                  'Alumni Network',
                  'Career Guidance'
                ].map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20 p-0 h-auto font-normal justify-start"
                  >
                    {link}
                  </Button>
                ))}
              </div>
            </div>

            {/* Academic */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Academic</h4>
              <div className="space-y-2">
                {[
                  'Honours Programs',
                  'Master\'s Programs',
                  'Examination Schedule',
                  'Academic Calendar',
                  'Results',
                  'Course Curriculum',
                  'Research Activities',
                  'Library Resources'
                ].map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-light/20 p-0 h-auto font-normal justify-start"
                  >
                    {link}
                  </Button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-academic-gold mt-1 flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p>New Government Degree College</p>
                    <p>College Road, Rajpara</p>
                    <p>Rajshahi-6000, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-academic-gold flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p>+880-721-750460</p>
                    <p>+880-721-750461</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-academic-gold flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p>info@ngdc.ac.bd</p>
                    <p>principal@ngdc.ac.bd</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-academic-gold flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p>www.ngdc.ac.bd</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h5 className="text-sm font-medium mb-3">Follow Us</h5>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-light/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 New Government Degree College, Rajshahi. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-primary-foreground/80">
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                Privacy Policy
              </Button>
              <span>|</span>
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                Terms & Conditions
              </Button>
              <span>|</span>
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                Accessibility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;