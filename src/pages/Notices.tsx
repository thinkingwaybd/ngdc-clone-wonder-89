import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Eye, Bell, FileText } from 'lucide-react';

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: '২০২৪-২০২৫ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণিতে ভর্তি বিজ্ঞপ্তি',
      date: '২০২৫-০৯-১০',
      category: 'Admission',
      priority: 'high',
      description: 'নতুন শিক্ষাবর্ষে স্নাতক সম্মান শ্রেণিতে ভর্তির জন্য বিস্তারিত নির্দেশনা।',
      isNew: true
    },
    {
      id: 2,
      title: 'অনার্স ৩য় বর্ষের ২য় ইনকোর্স পরীক্ষা-২০২৪ এর সময় পরিবর্তন',
      date: '২০২৫-০৯-০৮',
      category: 'Examination',
      priority: 'medium',
      description: 'পরীক্ষার সময়সূচি পরিবর্তন সম্পর্কিত গুরুত্বপূর্ণ বিজ্ঞপ্তি।',
      isNew: true
    },
    {
      id: 3,
      title: '০৬ সেপ্টেম্বর ২০২৫, ঈদ-ই-মিলাদুন্নবি উদযাপন',
      date: '২০২৫-০৯-০৫',
      category: 'Event',
      priority: 'low',
      description: 'পবিত্র ঈদ-ই-মিলাদুন্নবি উদযাপনের কর্মসূচি সম্পর্কে।',
      isNew: false
    },
    {
      id: 4,
      title: '২০২৫-২০২৬ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তির বিজ্ঞপ্তি',
      date: '২০২৫-০৯-০৩',
      category: 'Admission',
      priority: 'high',
      description: 'উচ্চ মাধ্যমিক শ্রেণিতে ভর্তির নিয়মাবলি এবং আবেদন প্রক্রিয়া।',
      isNew: false
    },
    {
      id: 5,
      title: 'দ্বাদশ শ্রেণির প্রাক-নির্বাচনী পরীক্ষা-২০২৫ এর সময়সূচি',
      date: '২০২৫-০৯-০১',
      category: 'Examination',
      priority: 'medium',
      description: 'HSC প্রাক-নির্বাচনী পরীক্ষার বিস্তারিত সময়সূচি প্রকাশ।',
      isNew: false
    }
  ];

  const categories = [
    { name: 'All', count: notices.length },
    { name: 'Admission', count: notices.filter(n => n.category === 'Admission').length },
    { name: 'Examination', count: notices.filter(n => n.category === 'Examination').length },
    { name: 'Event', count: notices.filter(n => n.category === 'Event').length }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Admission': return '🎓';
      case 'Examination': return '📝';
      case 'Event': return '🎉';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Notices & Announcements</h1>
          <p className="text-xl text-muted-foreground">Stay updated with latest college notices</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={index === 0 ? "default" : "ghost"}
                      className="w-full justify-between"
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-2">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Forms
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Office Orders
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Academic Calendar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {notices.map((notice) => (
                <Card key={notice.id} className="hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{getCategoryIcon(notice.category)}</span>
                          <Badge variant="outline" className="text-xs">
                            {notice.category}
                          </Badge>
                          <Badge 
                            variant={getPriorityColor(notice.priority) as any}
                            className="text-xs"
                          >
                            {notice.priority.toUpperCase()}
                          </Badge>
                          {notice.isNew && (
                            <Badge variant="destructive" className="text-xs animate-pulse">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight mb-2">
                          {notice.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {notice.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {notice.description}
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default">
                        <Eye className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notices;