import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import NoticeBoard from '@/components/NoticeBoard';
import PrincipalMessage from '@/components/PrincipalMessage';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <HeroCarousel />
      <NoticeBoard />
      <PrincipalMessage />
      <Footer />
    </div>
  );
};

export default Index;
