import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, User } from 'lucide-react';
import principalImage from '@/assets/principal.jpg';

const PrincipalMessage = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Principal's Photo and Info */}
          <div className="text-center lg:text-left">
            <Card className="bg-card-gradient shadow-strong border-0 max-w-md mx-auto lg:mx-0">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-medium">
                    <img
                      src={principalImage}
                      alt="Principal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Principal
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Prof. Dr. Mohammad Rahman
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Principal & Professor of Physics
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Ph.D in Physics (University of Dhaka)</p>
                    <p>M.Sc in Physics (University of Rajshahi)</p>
                    <p>25+ Years in Education</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-secondary/30 shadow-soft border-0 mt-6 max-w-md mx-auto lg:mx-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Contact Information
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Office:</strong> +880-721-750460</p>
                  <p><strong>Email:</strong> principal@ngdc.ac.bd</p>
                  <p><strong>Office Hours:</strong> Sun-Thu, 9:00 AM - 5:00 PM</p>
                </div>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Schedule Meeting
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Message Content */}
          <div>
            <Card className="bg-card-gradient shadow-strong border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary">Message from Principal</CardTitle>
                    <p className="text-muted-foreground">অধ্যক্ষের বাণী</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed">
                    Welcome to New Government Degree College, Rajshahi - an institution that has been
                    a beacon of quality education since 1964. For over six decades, we have been
                    committed to nurturing young minds and shaping future leaders who contribute
                    meaningfully to our society and nation.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    Our college stands as a testament to academic excellence, where traditional values
                    meet modern educational methodologies. We pride ourselves on our distinguished
                    faculty, comprehensive curriculum, and state-of-the-art facilities that create
                    an environment conducive to learning and personal growth.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    At NGDC, we believe that education extends beyond textbooks. We encourage our
                    students to participate in co-curricular activities, research initiatives, and
                    community service programs that develop their leadership skills, critical thinking,
                    and social responsibility.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-medium italic">
                    "Our mission is to provide affordable, accessible, and quality higher education
                    that empowers students to become responsible citizens and contribute to the
                    socio-economic development of Bangladesh."
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/principal-details">
                    <Button className="bg-primary hover:bg-primary-dark">
                      Read Full Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/principal-details">
                    <Button variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;