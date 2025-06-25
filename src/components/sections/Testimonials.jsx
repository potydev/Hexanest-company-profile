import React, { useRef, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Owner Warung Makan Sederhana',
      company: 'Warung Makan Sederhana',
      rating: 5,
      text: 'Website yang dibuat Hexanest sangat membantu bisnis saya. Sekarang pelanggan bisa lihat menu dan pesan online. Orderan meningkat 40% sejak website diluncurkan!',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Sarah Putri',
      role: 'Founder Fashion Store',
      company: 'Bella Fashion',
      rating: 5,
      text: 'Tim Hexanest sangat profesional dan responsif. Toko online kami sekarang terlihat modern dan mudah digunakan. Penjualan online meningkat drastis!',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Ahmad Rizki',
      role: 'CEO',
      company: 'PT. Teknologi Maju',
      rating: 5,
      text: 'Company profile yang dibuat sangat elegan dan profesional. Klien kami sering memuji tampilan website. Kredibilitas perusahaan meningkat signifikan.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Dr. Maya Sari',
      role: 'Dokter',
      company: 'Klinik Kesehatan Prima',
      rating: 5,
      text: 'Website klinik kami sekarang memiliki sistem appointment online yang sangat memudahkan pasien. Antrian lebih teratur dan efisien.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Joko Widodo',
      role: 'Marketing Manager',
      company: 'Digital Solutions',
      rating: 5,
      text: 'Landing page yang dibuat Hexanest conversion rate-nya luar biasa. Lead generation meningkat 60% dalam 3 bulan pertama. Highly recommended!',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Siti Nurhaliza',
      role: 'Owner',
      company: 'Elektronik Store',
      rating: 5,
      text: 'E-commerce yang dibuat sangat user-friendly. Fitur-fiturnya lengkap dan mudah dikelola. Customer satisfaction meningkat karena pengalaman berbelanja yang baik.',
      image: '/api/placeholder/80/80'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

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
        carouselRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-4">
            <Star className="w-4 h-4 mr-2" />
            Testimoni Klien
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy-dark mb-6">
            Apa Kata 
            <span className="text-gradient-purple"> Klien Kami</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan 
            tentang layanan dan hasil kerja tim Hexanest Web Solutions.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div ref={carouselRef} className="relative max-w-4xl mx-auto mb-12">
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-20 h-20 text-indigo-600" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed text-center mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-poppins font-semibold text-navy-dark text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 font-inter text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-indigo-600 font-inter text-sm font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-indigo-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-indigo-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-indigo-50 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-indigo-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? 'bg-indigo-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-700 font-inter text-sm leading-relaxed mb-4">
                "{testimonial.text.substring(0, 120)}..."
              </p>

              {/* Client */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-navy-dark text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 font-inter text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-poppins font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600 font-inter">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600 font-inter">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-inter">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600 font-inter">Project Success</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-poppins font-bold text-navy-dark mb-4">
            Bergabunglah dengan Klien yang Puas
          </h3>
          <p className="text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
            Ratusan klien telah mempercayakan kebutuhan website mereka kepada kami. 
            Saatnya giliran Anda merasakan pelayanan terbaik dari tim profesional kami.
          </p>
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Konsultasi Gratis Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

