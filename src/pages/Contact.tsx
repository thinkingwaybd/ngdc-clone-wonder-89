import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Globe, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Address',
      details: [
        'New Government Degree College',
        'Rajshahi-6000, Bangladesh'
      ]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone Numbers',
      details: [
        'Office: +880-721-750051',
        'Principal: +880-721-750052',
        'Admission: +880-721-750053'
      ]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Addresses',
      details: [
        'info@ngdc.ac.bd',
        'principal@ngdc.ac.bd',
        'admission@ngdc.ac.bd'
      ]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Office Hours',
      details: [
        'Sunday - Thursday: 9:00 AM - 5:00 PM',
        'Friday: 9:00 AM - 12:00 PM',
        'Saturday: Closed'
      ]
    }
  ];

  const departments = [
    {
      name: 'Admission Office',
      phone: '+880-721-750053',
      email: 'admission@ngdc.ac.bd',
      location: 'Ground Floor, Academic Building'
    },
    {
      name: 'Examination Office',
      phone: '+880-721-750054',
      email: 'exam@ngdc.ac.bd',
      location: 'First Floor, Administrative Building'
    },
    {
      name: 'Accounts Office',
      phone: '+880-721-750055',
      email: 'accounts@ngdc.ac.bd',
      location: 'Ground Floor, Administrative Building'
    },
    {
      name: 'Library',
      phone: '+880-721-750056',
      email: 'library@ngdc.ac.bd',
      location: 'Central Library Building'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with New Government Degree College</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>How to reach us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>Stay connected on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook Page
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube Channel
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-2" />
                    Official Website
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                  Emergency Contacts
                </Button>
                <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                  Campus Map
                </Button>
                <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                  Transportation
                </Button>
                <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                  Accommodation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter message subject" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message here..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Department Contacts</CardTitle>
                <CardDescription>Direct contact information for specific departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">{dept.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{dept.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Map</CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
                    <p className="text-muted-foreground">Interactive map will be embedded here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      New Government Degree College<br />
                      Rajshahi-6000, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    View in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;