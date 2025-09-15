import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationData = [
    {
      name: 'Home',
      href: '/',
      items: []
    },
    {
      name: 'About',
      href: '/about',
      items: [
        { name: 'Our History', href: '/about/history', description: 'Learn about our institution\'s rich heritage' },
        { name: 'Vision & Mission', href: '/about/vision', description: 'Our goals and aspirations' },
        { name: 'Infrastructure', href: '/about/infrastructure', description: 'Campus facilities and resources' },
        { name: 'Faculty', href: '/about/faculty', description: 'Meet our teaching staff' }
      ]
    },
    {
      name: 'Information', 
      href: '/information',
      items: [
        { name: 'General Information', href: '/information/general', description: 'Essential college information' },
        { name: 'Rules & Regulations', href: '/information/rules', description: 'Student guidelines and policies' },
        { name: 'Academic Calendar', href: '/information/calendar', description: 'Important academic dates' },
        { name: 'Fee Structure', href: '/information/fees', description: 'Course fees and payment details' }
      ]
    },
    {
      name: 'Activities',
      href: '/activities', 
      items: [
        { name: 'Cultural Events', href: '/activities/cultural', description: 'Festivals and cultural programs' },
        { name: 'Sports', href: '/activities/sports', description: 'Athletic events and competitions' },
        { name: 'Clubs & Societies', href: '/activities/clubs', description: 'Student organizations' },
        { name: 'Community Service', href: '/activities/service', description: 'Social outreach programs' }
      ]
    },
    {
      name: 'Academic',
      href: '/academic',
      items: [
        { name: 'Courses Offered', href: '/academic/courses', description: 'Available degree programs' },
        { name: 'Syllabus', href: '/academic/syllabus', description: 'Course curriculum details' },
        { name: 'Examination', href: '/academic/examination', description: 'Exam schedules and procedures' },
        { name: 'Research', href: '/academic/research', description: 'Research opportunities and projects' }
      ]
    },
    {
      name: 'Notices',
      href: '/notices',
      items: [
        { name: 'Latest Notices', href: '/notices/latest', description: 'Recent announcements' },
        { name: 'Exam Notices', href: '/notices/exam', description: 'Examination related updates' },
        { name: 'Event Notices', href: '/notices/events', description: 'Upcoming events and activities' },
        { name: 'Administrative', href: '/notices/admin', description: 'Official administrative notices' }
      ]
    },
    {
      name: 'Admission',
      href: '/admission',
      items: [
        { name: 'Admission Process', href: '/admission/process', description: 'Step-by-step admission guide' },
        { name: 'Eligibility Criteria', href: '/admission/eligibility', description: 'Requirements for admission' },
        { name: 'Application Form', href: '/admission/application', description: 'Online admission form' },
        { name: 'Merit List', href: '/admission/merit', description: 'Selection results and rankings' }
      ]
    },
    {
      name: 'Form Fillup',
      href: '/form-fillup',
      items: [
        { name: 'Admission Form', href: '/form-fillup/admission', description: 'New student registration' },
        { name: 'Examination Form', href: '/form-fillup/exam', description: 'Exam registration form' },
        { name: 'Scholarship Form', href: '/form-fillup/scholarship', description: 'Financial aid application' },
        { name: 'Transfer Certificate', href: '/form-fillup/transfer', description: 'TC application form' }
      ]
    },
    {
      name: 'Results',
      href: '/results',
      items: [
        { name: 'Semester Results', href: '/results/semester', description: 'Current semester grades' },
        { name: 'Annual Results', href: '/results/annual', description: 'Yearly examination results' },
        { name: 'Supplementary Results', href: '/results/supplementary', description: 'Reexam and improvement results' },
        { name: 'Result Analysis', href: '/results/analysis', description: 'Academic performance statistics' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      items: []
    }
  ];

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & {
      title: string;
      children: React.ReactNode;
    }
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={props.href || '#'}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  });

  return (
    <nav className="bg-hero-gradient text-primary-foreground shadow-medium sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.items.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="text-primary-foreground bg-transparent hover:bg-primary-light/20 data-[state=open]:bg-primary-light/20">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                          {item.items.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              title={subItem.name}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link to={item.href}>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors text-primary-foreground hover:bg-primary-light/20 focus:bg-primary-light/20 focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
              {navigationData.map((item, index) => (
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