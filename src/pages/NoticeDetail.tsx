import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, FileText, Download } from 'lucide-react';

const NoticeDetail = () => {
  const { id } = useParams();

  // Sample notice data - in real app, fetch from API/database
  const notices = {
    '1': {
      id: '1',
      title: '২০২৪-২০২৫ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণিতে ভর্তি বিজ্ঞপ্তি',
      titleEn: 'Admission Notice for Honours 1st Year 2024-25',
      date: 'December 10, 2024',
      type: 'Admission',
      content: `নিউ গভর্নমেন্ট ডিগ্রি কলেজ, রাজশাহী-তে ২০২৪-২০২৫ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণিতে ভর্তির জন্য আবেদন আহ্বান করা হচ্ছে।

ভর্তির যোগ্যতা:
- এইচএসসি বা সমমানের পরীক্ষায় উত্তীর্ণ
- সংশ্লিষ্ট বিষয়ে নূন্যতম জিপিএ ৩.৫০
- বয়সসীমা: সর্বোচ্চ ২১ বছর

আবেদনের নিয়মাবলী:
১. অনলাইনে আবেদন করতে হবে
২. আবেদন ফি: ৫০০ টাকা
৩. প্রয়োজনীয় কাগজপত্র স্ক্যান করে আপলোড করতে হবে

আবেদনের শেষ তারিখ: ২৫ ডিসেম্বর, ২০২৪

বিস্তারিত তথ্যের জন্য কলেজের অফিসে যোগাযোগ করুন।`,
      attachments: [
        { name: 'Admission Form.pdf', url: '#' },
        { name: 'Guidelines.pdf', url: '#' }
      ]
    },
    '2': {
      id: '2',
      title: 'আগাম ৩য় বর্ষের ২য় ইউনিট পরীক্ষা-২০২৪ এর সময়সূচি বিজ্ঞপ্তি',
      titleEn: 'Time Schedule for 3rd Year 2nd Unit Examination 2024',
      date: 'December 8, 2024',
      type: 'Examination',
      content: `৩য় বর্ষের ২য় ইউনিট পরীক্ষা-২০২৪ এর সময়সূচি প্রকাশ করা হলো।

পরীক্ষার তারিখ: ১৫ ডিসেম্বর - ২৫ ডিসেম্বর, ২০২৪
সময়: সকাল ১০:০০ - দুপুর ১:০০
পরীক্ষা কেন্দ্র: নিউ গভর্নমেন্ট ডিগ্রি কলেজ

বিষয়ভিত্তিক সময়সূচি:
- বাংলা: ১৫ ডিসেম্বর
- ইংরেজি: ১৭ ডিসেম্বর
- গণিত: ১৯ ডিসেম্বর
- পদার্থবিজ্ঞান: ২১ ডিসেম্বর
- রসায়ন: ২৩ ডিসেম্বর
- জীববিজ্ঞান: ২৫ ডিসেম্বর

শিক্ষার্থীদের প্রবেশপত্র পরীক্ষার ৩ দিন পূর্বে সংগ্রহ করতে হবে।`,
      attachments: [
        { name: 'Exam Routine.pdf', url: '#' }
      ]
    }
  };

  const notice = notices[id as keyof typeof notices];

  if (!notice) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Notice Not Found</h2>
              <p className="text-muted-foreground mb-4">The requested notice could not be found.</p>
              <Link to="/notices">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Notices
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/notices">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Notices
            </Button>
          </Link>
        </div>

        <Card className="bg-card-gradient shadow-strong">
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded">
                {notice.type}
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {notice.date}
              </div>
            </div>
            <CardTitle className="text-2xl text-primary mb-2">
              {notice.title}
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              {notice.titleEn}
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {notice.content}
              </div>
            </div>

            {notice.attachments && notice.attachments.length > 0 && (
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Attachments
                </h3>
                <div className="space-y-2">
                  {notice.attachments.map((attachment, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        {attachment.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default NoticeDetail;