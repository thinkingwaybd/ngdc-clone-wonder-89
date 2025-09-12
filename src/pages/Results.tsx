import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Download, ExternalLink, Award, Calendar } from 'lucide-react';

const Results = () => {
  const resultCategories = [
    {
      title: 'HSC Results',
      description: 'Higher Secondary Certificate examination results',
      link: 'http://www.rajshahieducationboard.gov.bd/',
      internal: false,
      icon: '🎓'
    },
    {
      title: 'University Results',
      description: 'Bachelor\'s and Master\'s degree results (National University)',
      link: 'https://www.nu.ac.bd/results/',
      internal: false,
      icon: '🎯'
    },
    {
      title: 'Internal Exam Results',
      description: 'College internal examination results',
      link: '#internal',
      internal: true,
      icon: '📝'
    }
  ];

  const internalResults = [
    {
      level: 'HSC (Higher Secondary)',
      exams: ['1st Year Final', '2nd Year Pre-Test', '2nd Year Final']
    },
    {
      level: 'Bachelor (Pass)',
      exams: ['1st Year Final', '2nd Year Final', '3rd Year Final']
    },
    {
      level: 'Bachelor (Honours)',
      exams: ['1st Year Final', '2nd Year Final', '3rd Year Final', '4th Year Final']
    },
    {
      level: 'Master\'s',
      exams: ['1st Part', 'Final Part']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Examination Results</h1>
          <p className="text-xl text-muted-foreground">Access your academic results and certificates</p>
        </div>

        {/* Quick Result Search */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-6 h-6" />
                Quick Result Search
              </CardTitle>
              <CardDescription>Search for your examination results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="examType">Examination Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hsc">HSC</SelectItem>
                      <SelectItem value="bachelor-pass">Bachelor (Pass)</SelectItem>
                      <SelectItem value="bachelor-honours">Bachelor (Honours)</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input id="rollNumber" placeholder="Enter roll number" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Search Result
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Result Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Result Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resultCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{category.icon}</span>
                    {!category.internal && (
                      <ExternalLink className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      if (category.internal) {
                        document.getElementById('internal-results')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.open(category.link, '_blank');
                      }
                    }}
                  >
                    {category.internal ? 'View Results' : 'Visit Website'}
                    {!category.internal && <ExternalLink className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Internal Results */}
          <div className="lg:col-span-2">
            <section id="internal-results">
              <h2 className="text-2xl font-semibold text-primary mb-6">Internal Examination Results</h2>
              <div className="space-y-6">
                {internalResults.map((result, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {result.level}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {result.exams.map((exam, examIndex) => (
                          <Button key={examIndex} variant="outline" className="justify-between">
                            <span>{exam}</span>
                            <Download className="w-4 h-4" />
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Result Statistics */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">Result Statistics</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Pass Rate 2024</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">First Division</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">150+</div>
                      <div className="text-sm text-muted-foreground">A+ Grades</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Graduation Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Important Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  <span>Rajshahi Education Board</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>National University</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Education Ministry</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Result Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Having trouble finding your result?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Contact the examination office for assistance.
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Need a certificate?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Apply for official transcripts and certificates.
                  </p>
                  <Button variant="outline" size="sm">
                    Apply for Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 mt-0.5 text-primary" />
                    <div>
                      <div className="font-medium">HSC Results 2024</div>
                      <div className="text-muted-foreground">Published on 15 Sep 2024</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 mt-0.5 text-primary" />
                    <div>
                      <div className="font-medium">Honours 3rd Year Results</div>
                      <div className="text-muted-foreground">Published on 10 Sep 2024</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 mt-0.5 text-primary" />
                    <div>
                      <div className="font-medium">Masters Final Results</div>
                      <div className="text-muted-foreground">Published on 05 Sep 2024</div>
                    </div>
                  </div>
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

export default Results;