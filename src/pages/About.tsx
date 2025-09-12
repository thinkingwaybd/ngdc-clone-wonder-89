import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import principalImage from '@/assets/principal.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">About New Government Degree College</h1>
          <p className="text-xl text-muted-foreground">Excellence in Education Since 1964</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>College History</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  New Government Degree College, Rajshahi was established in 1964 with the vision to provide quality higher education 
                  to the students of Rajshahi and surrounding areas. Over the decades, the college has grown into one of the premier 
                  educational institutions in the region.
                </p>
                <p>
                  The college offers Higher Secondary, Bachelor's, and Master's degree programs under the National University of Bangladesh. 
                  With a strong commitment to academic excellence and character development, the institution has produced thousands of 
                  successful graduates who have made significant contributions to society.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                    <p>To be a center of excellence in higher education that nurtures critical thinking, innovation, and social responsibility.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                    <p>To provide quality education, foster research, and develop skilled human resources for national development.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">60+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Faculty Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Departments</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Principal's Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <img 
                    src={principalImage} 
                    alt="Principal" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold">Prof. Dr. Mohammad Abdul Hai</h4>
                  <p className="text-sm text-muted-foreground">Principal</p>
                </div>
                <p className="text-sm">
                  "We are committed to providing world-class education and nurturing the next generation of leaders 
                  who will contribute to the development of our nation."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/academic" className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="font-medium">Academic Programs</div>
                    <div className="text-sm text-muted-foreground">Explore our degree programs</div>
                  </a>
                  <a href="/admission" className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="font-medium">Admission</div>
                    <div className="text-sm text-muted-foreground">Apply for admission</div>
                  </a>
                  <a href="/faculty" className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="font-medium">Faculty</div>
                    <div className="text-sm text-muted-foreground">Meet our teachers</div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start">
                    🏆 Best College Award 2023
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start">
                    📚 Digital Library Excellence
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start">
                    🎓 100% Graduation Rate
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start">
                    🌟 Quality Education Certification
                  </Badge>
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

export default About;