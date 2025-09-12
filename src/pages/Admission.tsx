import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Users, BookOpen, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Admission = () => {
  const admissionPrograms = [
    {
      program: 'Higher Secondary Certificate (HSC)',
      eligibility: 'SSC pass with minimum GPA 3.5',
      duration: '2 Years',
      subjects: ['Science', 'Business Studies', 'Humanities'],
      applicationStart: '01 October 2024',
      applicationEnd: '30 November 2024',
      status: 'ongoing'
    },
    {
      program: 'Bachelor (Pass Course)',
      eligibility: 'HSC pass with minimum GPA 2.5',
      duration: '3 Years',
      subjects: ['BA', 'BSS', 'BSc', 'BBS'],
      applicationStart: '15 September 2024',
      applicationEnd: '15 October 2024',
      status: 'ongoing'
    },
    {
      program: 'Bachelor (Honours)',
      eligibility: 'HSC pass with minimum GPA 3.0',
      duration: '4 Years',
      subjects: ['All major departments'],
      applicationStart: '01 September 2024',
      applicationEnd: '30 September 2024',
      status: 'upcoming'
    },
    {
      program: 'Master\'s Degree',
      eligibility: 'Bachelor\'s degree in relevant field',
      duration: '1-2 Years',
      subjects: ['MA', 'MSS', 'MSc', 'MBA'],
      applicationStart: '01 November 2024',
      applicationEnd: '30 November 2024',
      status: 'upcoming'
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill out the online admission form with required information',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit all required documents (originals and photocopies)',
      icon: '📄'
    },
    {
      step: 3,
      title: 'Merit List Publication',
      description: 'Check merit list publication on college website',
      icon: '📋'
    },
    {
      step: 4,
      title: 'Verification & Payment',
      description: 'Complete document verification and fee payment',
      icon: '✅'
    },
    {
      step: 5,
      title: 'Final Enrollment',
      description: 'Complete enrollment process and receive student ID',
      icon: '🎓'
    }
  ];

  const requiredDocuments = [
    'SSC/HSC Mark Sheet and Certificate (Original + 2 copies)',
    'Recent Passport Size Photographs (8 copies)',
    'National ID Card/Birth Certificate (Original + 2 copies)',
    'Guardian\'s National ID Card (2 copies)',
    'Transfer Certificate (if applicable)',
    'Character Certificate from previous institution',
    'Medical Certificate from registered doctor',
    'Bank Draft/Pay Order for admission fee'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'default';
      case 'upcoming': return 'secondary';
      case 'closed': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ongoing': return <CheckCircle className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'closed': return <AlertCircle className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Admission Information</h1>
          <p className="text-xl text-muted-foreground">Join New Government Degree College for quality education</p>
        </div>

        {/* Current Admission Status */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">🎯 Current Admission Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {admissionPrograms.map((program, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={getStatusColor(program.status) as any}
                        className="flex items-center gap-1"
                      >
                        {getStatusIcon(program.status)}
                        {program.status.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-sm">{program.program}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Application: {program.applicationStart} - {program.applicationEnd}</div>
                      <div>Duration: {program.duration}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Admission Programs */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">Available Programs</h2>
              <div className="space-y-4">
                {admissionPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="mb-2">{program.program}</CardTitle>
                          <CardDescription>Duration: {program.duration}</CardDescription>
                        </div>
                        <Badge 
                          variant={getStatusColor(program.status) as any}
                          className="flex items-center gap-1"
                        >
                          {getStatusIcon(program.status)}
                          {program.status.toUpperCase()}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <strong className="text-sm">Eligibility:</strong>
                          <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                        </div>
                        <div>
                          <strong className="text-sm">Available Subjects:</strong>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {program.subjects.map((subject, subIndex) => (
                              <Badge key={subIndex} variant="outline" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span><strong>Application Period:</strong> {program.applicationStart} - {program.applicationEnd}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Admission Process */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">Admission Process</h2>
              <div className="space-y-4">
                {admissionProcess.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{step.icon}</span>
                            <h3 className="font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  Apply Online
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Forms
                </Button>
                <Button variant="outline" className="w-full">
                  Check Merit List
                </Button>
                <Button variant="outline" className="w-full">
                  Fee Structure
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {requiredDocuments.slice(0, 6).map((doc, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                    View all documents →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong className="text-sm">Admission Office:</strong>
                  <p className="text-sm text-muted-foreground">Ground Floor, Academic Building</p>
                </div>
                <div>
                  <strong className="text-sm">Phone:</strong>
                  <p className="text-sm text-muted-foreground">+880-721-750051</p>
                </div>
                <div>
                  <strong className="text-sm">Email:</strong>
                  <p className="text-sm text-muted-foreground">admission@ngdc.ac.bd</p>
                </div>
                <div>
                  <strong className="text-sm">Office Hours:</strong>
                  <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM (Sun-Thu)</p>
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

export default Admission;