import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, FileText, Calendar, Clock, AlertCircle } from 'lucide-react';

const FormFillup = () => {
  const formCategories = [
    {
      title: 'National University Forms',
      description: 'Official forms for NU students',
      forms: [
        {
          name: 'Bachelor (Pass) Form Fill-up',
          description: 'For 1st, 2nd, and 3rd year students',
          link: 'http://nubd.info/degree-pass/',
          deadline: '30 September 2024',
          status: 'active',
          external: true
        },
        {
          name: 'Bachelor (Honours) Form Fill-up',
          description: 'For Honours students (All years)',
          link: 'http://nubd.info/honours/',
          deadline: '25 September 2024',
          status: 'active',
          external: true
        },
        {
          name: 'Masters 1st Part Form Fill-up',
          description: 'For Masters 1st year students',
          link: 'http://www.nubd.info/mf/index_exm.php',
          deadline: '20 September 2024',
          status: 'active',
          external: true
        },
        {
          name: 'Masters Final Part Form Fill-up',
          description: 'For Masters final year students',
          link: 'http://www.nubd.info/mf/index_exm.php',
          deadline: '20 September 2024',
          status: 'active',
          external: true
        }
      ]
    },
    {
      title: 'College Internal Forms',
      description: 'Internal college examination forms',
      forms: [
        {
          name: 'HSC Internal Exam Form',
          description: 'For HSC students internal examinations',
          link: '#hsc-internal',
          deadline: '15 October 2024',
          status: 'upcoming',
          external: false
        },
        {
          name: 'Re-admission Form',
          description: 'For students seeking re-admission',
          link: '#readmission',
          deadline: 'Ongoing',
          status: 'active',
          external: false
        },
        {
          name: 'Certificate Verification Form',
          description: 'For certificate and transcript verification',
          link: '#verification',
          deadline: 'Ongoing',
          status: 'active',
          external: false
        }
      ]
    },
    {
      title: 'Government Forms',
      description: 'Government department forms and applications',
      forms: [
        {
          name: 'DSHE Forms',
          description: 'Directorate of Secondary and Higher Education',
          link: 'http://www.dshe.gov.bd/',
          deadline: 'Various',
          status: 'active',
          external: true
        },
        {
          name: 'NOC Application Form',
          description: 'No Objection Certificate application',
          link: 'http://www.dip.gov.bd/site/forms/826f6ebe-9fbc-4e86-8629-e3336e070dec/-',
          deadline: 'Ongoing',
          status: 'active',
          external: true
        }
      ]
    }
  ];

  const importantDates = [
    {
      date: '15 Sep - 30 Sep 2024',
      event: 'NU Form Fill-up (Bachelor Pass)',
      status: 'active'
    },
    {
      date: '10 Sep - 25 Sep 2024',
      event: 'NU Form Fill-up (Honours)',
      status: 'active'
    },
    {
      date: '01 Oct - 15 Oct 2024',
      event: 'HSC Internal Exam Forms',
      status: 'upcoming'
    },
    {
      date: '20 Oct - 30 Oct 2024',
      event: 'Masters Form Fill-up',
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'upcoming': return 'secondary';
      case 'closed': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Calendar className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'closed': return <AlertCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Form Fill-up</h1>
          <p className="text-xl text-muted-foreground">Complete your examination and application forms</p>
        </div>

        {/* Important Notice */}
        <div className="mb-8">
          <Card className="border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-destructive mb-2">Important Notice</h3>
                  <p className="text-sm">
                    Please ensure to fill up your forms before the deadline. Late submissions may not be accepted. 
                    For any technical issues, contact the respective offices immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {formCategories.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-primary mb-2">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="space-y-4">
                  {category.forms.map((form, formIndex) => (
                    <Card key={formIndex} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge 
                                variant={getStatusColor(form.status) as any}
                                className="flex items-center gap-1"
                              >
                                {getStatusIcon(form.status)}
                                {form.status.toUpperCase()}
                              </Badge>
                              {form.external && (
                                <Badge variant="outline" className="text-xs">
                                  External Link
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg">{form.name}</CardTitle>
                            <CardDescription>{form.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">Deadline:</div>
                            <div className="text-sm text-muted-foreground">{form.deadline}</div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant={form.status === 'active' ? 'default' : 'outline'}
                              onClick={() => {
                                if (form.external) {
                                  window.open(form.link, '_blank');
                                } else {
                                  // Handle internal forms
                                  console.log('Opening internal form:', form.name);
                                }
                              }}
                            >
                              {form.external ? (
                                <>
                                  Visit Website
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </>
                              ) : (
                                <>
                                  Fill Form
                                  <FileText className="w-4 h-4 ml-2" />
                                </>
                              )}
                            </Button>
                            <Button variant="outline" size="icon">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}

            {/* Form Fill-up Guidelines */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">Form Fill-up Guidelines</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Important Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">📝 Before You Start:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Have your student ID and registration number ready</li>
                        <li>Ensure you have a recent passport-size photograph (digital copy)</li>
                        <li>Keep your previous mark sheets available</li>
                        <li>Check the exact deadline for your form category</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">💳 Payment Information:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Most NU forms require online payment via mobile banking</li>
                        <li>Keep your transaction ID safe after payment</li>
                        <li>Payment confirmation may take 24-48 hours</li>
                        <li>Contact the accounts office for payment issues</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">⚠️ Common Issues:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Browser compatibility issues - use Chrome or Firefox</li>
                        <li>Photo size must be less than 100KB</li>
                        <li>Clear browser cache if forms don't load properly</li>
                        <li>Take a screenshot of your completed form as backup</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {importantDates.map((date, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <Badge 
                          variant={getStatusColor(date.status) as any}
                          className="text-xs"
                        >
                          {date.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium">{date.event}</div>
                      <div className="text-xs text-muted-foreground">{date.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Examination Office</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For form fill-up assistance and technical support
                  </p>
                  <p className="text-xs text-muted-foreground">
                    📞 +880-721-750054<br />
                    📧 exam@ngdc.ac.bd
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Accounts Office</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For payment related queries
                  </p>
                  <p className="text-xs text-muted-foreground">
                    📞 +880-721-750055<br />
                    📧 accounts@ngdc.ac.bd
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Quick Downloads */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Form Fill-up Manual
                  </Button>
                  <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Payment Guidelines
                  </Button>
                  <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Sample Forms
                  </Button>
                  <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Fee Structure
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

export default FormFillup;