import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, Calendar } from 'lucide-react';

const Academic = () => {
  const faculties = [
    {
      name: 'Faculty of Arts',
      departments: ['Bangla', 'English', 'Arabic', 'Islamic Studies', 'Philosophy', 'History'],
      icon: '📚',
      description: 'Humanities and language studies'
    },
    {
      name: 'Faculty of Social Science',
      departments: ['Political Science', 'Sociology', 'Economics', 'Social Work', 'Anthropology'],
      icon: '🏛️',
      description: 'Social sciences and governance studies'
    },
    {
      name: 'Faculty of Business Studies',
      departments: ['Management', 'Accounting', 'Finance', 'Marketing', 'Human Resource'],
      icon: '💼',
      description: 'Business and commerce education'
    },
    {
      name: 'Faculty of Science',
      departments: ['Mathematics', 'Physics', 'Chemistry', 'Statistics', 'Computer Science'],
      icon: '🔬',
      description: 'Science and technology studies'
    }
  ];

  const programs = [
    {
      level: 'Higher Secondary Certificate (HSC)',
      duration: '2 Years',
      streams: ['Science', 'Business Studies', 'Humanities'],
      eligibility: 'SSC Pass with minimum GPA 3.5'
    },
    {
      level: 'Bachelor (Pass)',
      duration: '3 Years',
      streams: ['BA', 'BSS', 'BSc', 'BBS'],
      eligibility: 'HSC Pass with minimum GPA 2.5'
    },
    {
      level: 'Bachelor (Honours)',
      duration: '4 Years',
      streams: ['All major subjects available'],
      eligibility: 'HSC Pass with minimum GPA 3.0'
    },
    {
      level: 'Master\'s Degree',
      duration: '1-2 Years',
      streams: ['MA', 'MSS', 'MSc', 'MBA'],
      eligibility: 'Bachelor\'s degree in relevant field'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Academic Programs</h1>
          <p className="text-xl text-muted-foreground">Comprehensive education from Higher Secondary to Master's level</p>
        </div>

        {/* Academic Programs Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Programs Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {program.level}
                  </CardTitle>
                  <CardDescription>Duration: {program.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm">Available Streams:</strong>
                      <p className="text-sm text-muted-foreground">{program.streams.join(', ')}</p>
                    </div>
                    <div>
                      <strong className="text-sm">Eligibility:</strong>
                      <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Faculties and Departments */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Faculties & Departments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faculties.map((faculty, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{faculty.icon}</span>
                    <div>
                      <h3>{faculty.name}</h3>
                      <CardDescription>{faculty.description}</CardDescription>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm mb-2 block">Departments:</strong>
                      <div className="flex flex-wrap gap-2">
                        {faculty.departments.map((dept, deptIndex) => (
                          <Badge key={deptIndex} variant="outline" className="text-xs">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Academic Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Experienced Faculty</h3>
                <p className="text-sm text-muted-foreground">
                  Highly qualified teachers with advanced degrees and research experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Quality Education</h3>
                <p className="text-sm text-muted-foreground">
                  Curriculum aligned with national standards and international best practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Flexible Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Morning and day shifts available to accommodate different student needs
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-secondary/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Academic Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto flex-col py-4">
              <BookOpen className="w-6 h-6 mb-2" />
              Syllabus
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4">
              <Calendar className="w-6 h-6 mb-2" />
              Class Routine
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4">
              <Users className="w-6 h-6 mb-2" />
              Faculty List
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4">
              <Award className="w-6 h-6 mb-2" />
              Course Plan
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academic;