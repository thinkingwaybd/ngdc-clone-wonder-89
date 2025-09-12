import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import principalImage from '@/assets/principal.jpg';

const PrincipalDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Principal Profile */}
          <div className="lg:col-span-1">
            <Card className="bg-card-gradient shadow-strong border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-medium mb-4">
                    <img
                      src={principalImage}
                      alt="Principal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Prof. Dr. Mohammad Rahman
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Principal & Professor of Physics
                  </p>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium inline-block">
                    Principal
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+880-721-750460</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>principal@ngdc.ac.bd</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Principal Office, NGDC</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Office Hours: Sun-Thu, 9:00 AM - 5:00 PM</span>
                  </div>
                </div>

                <Button className="w-full mt-6">
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card className="bg-card-gradient shadow-strong border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">About the Principal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed">
                    Prof. Dr. Mohammad Rahman has been serving as the Principal of New Government 
                    Degree College, Rajshahi since 2018. With over 25 years of experience in 
                    education and administration, he has been instrumental in transforming the 
                    college into one of the leading educational institutions in the region.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Under his leadership, the college has achieved significant milestones in 
                    academic excellence, infrastructure development, and student welfare programs. 
                    His vision is to create a world-class educational environment that nurtures 
                    both academic and personal growth of students.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education & Qualifications */}
            <Card className="bg-card-gradient shadow-strong border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Education & Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">Ph.D in Physics</h3>
                    <p className="text-muted-foreground">University of Dhaka (2005)</p>
                    <p className="text-sm text-muted-foreground">Specialization: Condensed Matter Physics</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">M.Sc in Physics</h3>
                    <p className="text-muted-foreground">University of Rajshahi (1998)</p>
                    <p className="text-sm text-muted-foreground">First Class, Gold Medalist</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">B.Sc (Hons) in Physics</h3>
                    <p className="text-muted-foreground">University of Rajshahi (1996)</p>
                    <p className="text-sm text-muted-foreground">First Class</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience & Achievements */}
            <Card className="bg-card-gradient shadow-strong border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Experience & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professional Experience</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Principal, New Government Degree College (2018 - Present)</li>
                      <li>• Professor of Physics, NGDC (2010 - Present)</li>
                      <li>• Associate Professor of Physics, NGDC (2005 - 2010)</li>
                      <li>• Assistant Professor of Physics, NGDC (2000 - 2005)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Key Achievements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Published 45+ research papers in international journals</li>
                      <li>• Awarded "Best Principal" by University of Rajshahi (2022)</li>
                      <li>• Led digital transformation of college administration</li>
                      <li>• Established modern science laboratories</li>
                      <li>• Increased college admission rate by 150%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision & Mission */}
            <Card className="bg-card-gradient shadow-strong border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Vision & Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-medium italic leading-relaxed">
                    "Education is not just about acquiring knowledge; it's about developing 
                    character, critical thinking, and social responsibility. At NGDC, we are 
                    committed to providing holistic education that prepares our students to 
                    become leaders and change-makers in society."
                  </p>
                  <p className="text-right text-sm text-muted-foreground mt-4">
                    - Prof. Dr. Mohammad Rahman
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrincipalDetails;