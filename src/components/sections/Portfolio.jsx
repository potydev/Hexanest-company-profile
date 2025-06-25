import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Eye, Filter, Store, Briefcase, Megaphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const cardRefs = useRef([]);

  const categories = [
    { id: 'all', name: 'Semua Project', icon: <Filter className="w-4 h-4" /> },
    { id: 'umkm', name: 'Website UMKM', icon: <Store className="w-4 h-4" /> },
    { id: 'ecommerce', name: 'Toko Online', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'landing', name: 'Landing Page', icon: <Megaphone className="w-4 h-4" /> },
    { id: 'company', name: 'Company Profile', icon: <Globe className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: 'Warung Makan Sederhana',
      category: 'umkm',
      description: 'Website untuk warung makan dengan menu online dan sistem pemesanan.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      url: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Fashion Store Online',
      category: 'ecommerce',
      description: 'E-commerce fashion dengan payment gateway dan inventory management.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Express.js', 'MongoDB'],
      url: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Digital Marketing Agency',
      category: 'landing',
      description: 'Landing page untuk agensi digital marketing dengan lead generation.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      url: '#',
      featured: false
    },
    {
      id: 4,
      title: 'PT. Teknologi Maju',
      category: 'company',
      description: 'Company profile untuk perusahaan teknologi dengan portfolio showcase.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      url: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Klinik Kesehatan Prima',
      category: 'umkm',
      description: 'Website klinik dengan sistem appointment dan informasi layanan.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Firebase', 'Material-UI'],
      url: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Elektronik Store',
      category: 'ecommerce',
      description: 'Toko online elektronik dengan fitur compare produk dan review.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      url: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Startup Fintech',
      category: 'landing',
      description: 'Landing page untuk startup fintech dengan animasi modern.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'GSAP', 'Tailwind CSS'],
      url: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Konsultan Hukum',
      category: 'company',
      description: 'Website firma hukum dengan blog dan consultation booking.',
      image: '/api/placeholder/400/300',
      technologies: ['WordPress', 'Custom Theme', 'PHP'],
      url: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        filterRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        cardRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
        '-=0.2'
      );
  }, [activeFilter]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Portfolio Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy-dark mb-6">
            Project Yang Telah 
            <span className="text-gradient-purple"> Kami Selesaikan</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Lihat berbagai project website yang telah kami kerjakan untuk klien dari 
            berbagai industri dengan hasil yang memuaskan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-inter font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              ref={el => (cardRefs.current[idx] = el)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-white opacity-50" />
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-inter font-semibold">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-navy-dark mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-inter font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Button 
                  variant="outline"
                  className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                >
                  Lihat Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">100+</div>
              <div className="font-inter opacity-90">Project Selesai</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">50+</div>
              <div className="font-inter opacity-90">Klien Puas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">99%</div>
              <div className="font-inter opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">24/7</div>
              <div className="font-inter opacity-90">Support</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-poppins font-bold text-navy-dark mb-4">
            Siap Memulai Project Anda?
          </h3>
          <p className="text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan website Anda dan wujudkan visi digital 
            bisnis Anda bersama tim profesional kami.
          </p>
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Mulai Project Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

