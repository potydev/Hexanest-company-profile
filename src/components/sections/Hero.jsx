import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef([]);
  const buttonsRef = useRef([]);

  const features = [
    'Website Responsif & Modern',
    'SEO Optimized',
    'Loading Super Cepat',
    'Support 24/7'
  ];

  const stats = [
    { number: '100+', label: 'Website Dibuat' },
    { number: '50+', label: 'Klien Puas' },
    { number: '24/7', label: 'Support' },
    { number: '99%', label: 'Uptime' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        featuresRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
        '-=0.3'
      );
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              #1 Web Development Agency
            </div>

            {/* Main Heading */}
            <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-navy-dark leading-tight mb-6">
              Wujudkan Website 
              <span className="text-gradient-purple block">
                Impian Bisnis Anda
              </span>
            </h1>

            {/* Description */}
            <p ref={descRef} className="text-lg md:text-xl text-gray-600 font-inter mb-8 leading-relaxed">
              Hexanest Web Solutions menghadirkan website profesional, modern, dan responsif 
              yang membantu bisnis Anda berkembang pesat di era digital.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => (featuresRef.current[index] = el)}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-inter text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                ref={el => (buttonsRef.current[0] = el)}
                onClick={() => scrollToSection('#contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 group"
              >
                Mulai Project Sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                ref={el => (buttonsRef.current[1] = el)}
                onClick={() => scrollToSection('#portfolio')}
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-200 hover:shadow-lg"
              >
                Lihat Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-poppins font-bold text-indigo-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Browser Window */}
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-24 h-6 bg-indigo-200 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-32 h-8 bg-indigo-500 rounded"></div>
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="absolute -bottom-4 -right-4 w-20 h-36 bg-gray-900 rounded-lg p-1">
                <div className="w-full h-full bg-white rounded-md p-2">
                  <div className="w-full h-2 bg-indigo-200 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-12 h-4 bg-indigo-400 rounded mt-2"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
              <Star className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

