import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: '২০২৪-২০২৫ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণিতে ভর্তি বিজ্ঞপ্তি',
      titleEn: 'Admission Notice for Honours 1st Year 2024-25',
      date: 'December 10, 2024',
      type: 'Admission',
      important: true,
    },
    {
      id: 2,
      title: 'আগাম ৩য় বর্ষের ২য় ইউনিট পরীক্ষা-২০২৪ এর সময়সূচি বিজ্ঞপ্তি',
      titleEn: 'Time Schedule for 3rd Year 2nd Unit Examination 2024',
      date: 'December 8, 2024',
      type: 'Examination',
      important: false,
    },
    {
      id: 3,
      title: '০৬ ডিসেম্বর ২০২৪, ঈদ-ই-মিলাদুন্নবীর উদযাপনের বিজ্ঞপ্তি',
      titleEn: 'Eid-e-Milad-un-Nabi Celebration Notice - December 6, 2024',
      date: 'December 5, 2024',
      type: 'Event',
      important: false,
    },
    {
      id: 4,
      title: '২০২৪-২০২৫ শিক্ষাবর্ষের একাডেমিক ক্যালেন্ডার প্রকাশ বিজ্ঞপ্তি',
      titleEn: 'Academic Calendar Publication for 2024-25 Session',
      date: 'December 1, 2024',
      type: 'Academic',
      important: true,
    },
    {
      id: 5,
      title: 'আধার প্রেরণে ব্যাংক নির্বাচনী পরীক্ষা-২০২৪ এর সময়সূচি',
      titleEn: 'Bank Selection Exam Schedule 2024',
      date: 'November 28, 2024',
      type: 'Exam',
      important: false,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'admission':
        return 'bg-primary text-primary-foreground';
      case 'examination':
      case 'exam':
        return 'bg-academic-blue text-white';
      case 'event':
        return 'bg-academic-gold text-white';
      case 'academic':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-12 bg-notice-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notice Board */}
          <div className="lg:col-span-2">
            <Card className="bg-card-gradient shadow-medium border-border/50">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                    <FileText className="w-6 h-6" />
                    Notice Board
                    <span className="text-lg text-muted-foreground">নোটিশ বোর্ড</span>
                  </CardTitle>
                  <Link to="/notices">
                    <Button variant="outline" size="sm">
                      View All
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {notices.map((notice) => (
                    <Link key={notice.id} to={`/notice/${notice.id}`}>
                      <div
                        className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-soft cursor-pointer ${
                          notice.important
                            ? 'border-primary/30 bg-primary/5 hover:bg-primary/10'
                            : 'border-border hover:border-primary/20'
                        }`}
                      >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded ${getTypeColor(
                                notice.type
                              )}`}
                            >
                              {notice.type}
                            </span>
                            {notice.important && (
                              <span className="px-2 py-1 text-xs font-medium bg-destructive text-destructive-foreground rounded">
                                Important
                              </span>
                            )}
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {notice.date}
                            </div>
                          </div>
                          <h3 className="font-semibold text-foreground mb-1 leading-relaxed">
                            {notice.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {notice.titleEn}
                          </p>
                        </div>
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <Card className="bg-card-gradient shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/academic">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Academic Calendar
                  </Button>
                </Link>
                <Link to="/academic">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Exam Routine
                  </Button>
                </Link>
                <Link to="/results">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Results
                  </Button>
                </Link>
                <Link to="/form-fillup">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Forms & Applications
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Important Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  University of Rajshahi
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  UGC Bangladesh
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Ministry of Education
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;