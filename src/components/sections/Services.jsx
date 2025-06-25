import React, { useRef, useEffect } from 'react';
import { Store, Briefcase, Megaphone, Globe, Smartphone, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Services = () => {
  const services = [
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Website UMKM',
      description: 'Website profesional untuk usaha kecil dan menengah dengan fitur lengkap dan mudah dikelola.',
      features: [
        'Desain Modern & Responsif',
        'Content Management System',
        'SEO Optimized',
        'Google Analytics Integration',
        'Contact Form & WhatsApp',
        'Social Media Integration'
      ],
      price: 'Mulai dari Rp 2.500.000',
      popular: false,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Toko Online',
      description: 'E-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.',
      features: [
        'Katalog Produk Unlimited',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Tracking System',
        'Customer Dashboard',
        'Multi-Payment Methods'
      ],
      price: 'Mulai dari Rp 5.000.000',
      popular: true,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Landing Page',
      description: 'Halaman landing yang conversion-focused untuk campaign marketing dan lead generation.',
      features: [
        'High Conversion Design',
        'A/B Testing Ready',
        'Lead Capture Forms',
        'Analytics Integration',
        'Mobile Optimized',
        'Fast Loading Speed'
      ],
      price: 'Mulai dari Rp 1.500.000',
      popular: false,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Company Profile',
      description: 'Website perusahaan yang profesional untuk membangun kredibilitas dan trust.',
      features: [
        'Professional Design',
        'About & Team Pages',
        'Service Showcase',
        'Portfolio Gallery',
        'Contact Information',
        'Blog/News Section'
      ],
      price: 'Mulai dari Rp 3.000.000',
      popular: false,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Web App',
      description: 'Aplikasi web custom sesuai kebutuhan bisnis dengan fitur advanced.',
      features: [
        'Custom Functionality',
        'User Authentication',
        'Database Integration',
        'API Development',
        'Admin Dashboard',
        'Scalable Architecture'
      ],
      price: 'Mulai dari Rp 8.000.000',
      popular: false,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Layanan pemeliharaan dan dukungan teknis untuk menjaga performa website.',
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Backup & Recovery',
        'Performance Optimization',
        'Technical Support',
        'Content Updates'
      ],
      price: 'Mulai dari Rp 500.000/bulan',
      popular: false,
      gradient: 'from-gray-500 to-slate-600'
    }
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        cardRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.13 },
        '-=0.3'
      );
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy-dark mb-6">
            Solusi Website 
            <span className="text-gradient-purple"> Untuk Setiap Kebutuhan</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Dari website sederhana hingga aplikasi web kompleks, kami menyediakan solusi 
            digital yang tepat untuk mengembangkan bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => (cardRefs.current[index] = el)}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-inter font-semibold">
                    POPULER
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 font-inter text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-inter text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="text-2xl font-poppins font-bold text-navy-dark">
                    {service.price}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-inter font-semibold py-3 rounded-xl transition-all duration-200 group-hover:scale-105`}
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-navy-dark mb-4">
              Tidak Menemukan Yang Anda Cari?
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Kami juga menyediakan layanan custom development sesuai dengan kebutuhan 
              spesifik bisnis Anda. Konsultasikan kebutuhan Anda dengan tim kami.
            </p>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-inter font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Konsultasi Custom Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

