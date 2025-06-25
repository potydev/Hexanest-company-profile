import React, { useRef, useEffect } from 'react';
import { Check, X, Star, Zap, Crown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="w-6 h-6" />,
      price: '2.500.000',
      originalPrice: '3.000.000',
      description: 'Perfect untuk UMKM dan bisnis kecil yang baru memulai online presence',
      features: [
        { name: 'Website Responsif', included: true },
        { name: 'Hingga 5 Halaman', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Analytics', included: true },
        { name: 'SEO Basic', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'WhatsApp Integration', included: true },
        { name: 'Content Management', included: false },
        { name: 'E-commerce Features', included: false },
        { name: 'Advanced SEO', included: false },
        { name: 'Custom Functionality', included: false }
      ],
      support: '3 Bulan Support',
      delivery: '7-10 Hari Kerja',
      popular: false,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Professional',
      icon: <Star className="w-6 h-6" />,
      price: '5.000.000',
      originalPrice: '6.500.000',
      description: 'Ideal untuk bisnis menengah yang membutuhkan fitur lebih lengkap',
      features: [
        { name: 'Website Responsif', included: true },
        { name: 'Hingga 10 Halaman', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Analytics', included: true },
        { name: 'SEO Basic', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'WhatsApp Integration', included: true },
        { name: 'Content Management', included: true },
        { name: 'E-commerce Features', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Custom Functionality', included: false }
      ],
      support: '6 Bulan Support',
      delivery: '10-14 Hari Kerja',
      popular: true,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6" />,
      price: '10.000.000',
      originalPrice: '15.000.000',
      description: 'Solusi lengkap untuk perusahaan besar dengan kebutuhan khusus',
      features: [
        { name: 'Website Responsif', included: true },
        { name: 'Unlimited Halaman', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Analytics', included: true },
        { name: 'SEO Basic', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'WhatsApp Integration', included: true },
        { name: 'Content Management', included: true },
        { name: 'E-commerce Features', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Custom Functionality', included: true }
      ],
      support: '12 Bulan Support',
      delivery: '14-21 Hari Kerja',
      popular: false,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const addOns = [
    {
      name: 'Maintenance & Support',
      price: '500.000/bulan',
      description: 'Update konten, backup, security monitoring'
    },
    {
      name: 'Digital Marketing Setup',
      price: '2.000.000',
      description: 'Google Ads, Facebook Ads, SEO optimization'
    },
    {
      name: 'Mobile App Development',
      price: '15.000.000',
      description: 'Native mobile app untuk iOS dan Android'
    },
    {
      name: 'Advanced Analytics',
      price: '1.000.000',
      description: 'Detailed reporting dan conversion tracking'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Paket Harga
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy-dark mb-6">
            Pilih Paket Yang 
            <span className="text-gradient-purple"> Sesuai Kebutuhan</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai paket dengan harga transparan dan fitur yang jelas. 
            Tidak ada biaya tersembunyi, semua sudah termasuk dalam paket.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              ref={el => (cardRefs.current[idx] = el)}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50 transform scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-inter font-semibold shadow-lg">
                    PALING POPULER
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${plan.gradient} p-6 text-white ${plan.popular ? 'pt-8' : ''}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold">
                    {plan.name}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl md:text-4xl font-poppins font-bold">
                      Rp {plan.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-white/70 line-through text-sm">
                      Rp {plan.originalPrice}
                    </span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">
                      HEMAT {Math.round(((parseInt(plan.originalPrice.replace(/\./g, '')) - parseInt(plan.price.replace(/\./g, ''))) / parseInt(plan.originalPrice.replace(/\./g, ''))) * 100)}%
                    </span>
                  </div>
                </div>
                
                <p className="text-white/90 font-inter text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={`font-inter text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Plan Details */}
                <div className="border-t border-gray-100 pt-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-inter">Support:</span>
                    <span className="font-inter font-medium text-gray-900">{plan.support}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-inter">Delivery:</span>
                    <span className="font-inter font-medium text-gray-900">{plan.delivery}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white font-inter font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-105`}
                >
                  Pilih Paket Ini
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-navy-dark mb-4">
              Layanan Tambahan
            </h3>
            <p className="text-gray-600 font-inter">
              Tingkatkan website Anda dengan layanan tambahan yang tersedia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h4 className="font-poppins font-semibold text-navy-dark mb-2">
                  {addon.name}
                </h4>
                <div className="text-indigo-600 font-poppins font-bold text-lg mb-3">
                  Rp {addon.price}
                </div>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-poppins font-bold text-navy-dark mb-8">
            Pertanyaan yang Sering Diajukan
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-poppins font-semibold text-navy-dark mb-2">
                Apakah ada biaya tersembunyi?
              </h4>
              <p className="text-gray-600 font-inter text-sm">
                Tidak ada biaya tersembunyi. Semua biaya sudah termasuk dalam paket yang dipilih.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-poppins font-semibold text-navy-dark mb-2">
                Bagaimana sistem pembayaran?
              </h4>
              <p className="text-gray-600 font-inter text-sm">
                Pembayaran dapat dilakukan secara bertahap: 50% di awal, 50% setelah website selesai.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-poppins font-semibold text-navy-dark mb-2">
                Apakah bisa custom fitur?
              </h4>
              <p className="text-gray-600 font-inter text-sm">
                Ya, kami menyediakan layanan custom development sesuai kebutuhan spesifik Anda.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-poppins font-semibold text-navy-dark mb-2">
                Berapa lama proses pembuatan?
              </h4>
              <p className="text-gray-600 font-inter text-sm">
                Waktu pengerjaan bervariasi sesuai paket, mulai dari 7 hari hingga 21 hari kerja.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
              Masih Bingung Memilih Paket?
            </h3>
            <p className="font-inter mb-6 opacity-90 max-w-2xl mx-auto">
              Konsultasikan kebutuhan website Anda dengan tim ahli kami. 
              Kami akan membantu menentukan paket yang paling sesuai dengan bisnis Anda.
            </p>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Konsultasi Gratis Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

