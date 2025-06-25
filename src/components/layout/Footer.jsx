import { Code, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Website UMKM',
    'Toko Online',
    'Landing Page',
    'Company Profile',
    'Web App',
    'Maintenance & Support'
  ];

  const quickLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Kontak', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-poppins font-bold">
                  Hexanest
                </span>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                Hexanest Web Solutions adalah partner terpercaya untuk transformasi digital 
                bisnis Anda. Kami menghadirkan website berkualitas tinggi dengan teknologi modern.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span className="text-gray-300 font-inter text-sm">hexanest@hexanest.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span className="text-gray-300 font-inter text-sm">+62 882-9062-4271</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span className="text-gray-300 font-inter text-sm">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-6">
                Layanan Kami
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection('#services')}
                      className="text-gray-300 hover:text-indigo-400 font-inter text-sm transition-colors duration-200"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-indigo-400 font-inter text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-6">
                Stay Connected
              </h3>
              <p className="text-gray-300 font-inter text-sm mb-4">
                Dapatkan update terbaru tentang teknologi web dan tips digital marketing.
              </p>
              
              {/* Newsletter */}
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-inter text-sm"
                  />
                  <Button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-gray-300 font-inter text-sm mb-4">
                  Follow us on social media:
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-inter text-sm">
              © {currentYear} Hexanest Web Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white font-inter text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white font-inter text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white font-inter text-sm transition-colors duration-200">
                Sitemap
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6288290624271"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-pulse"
          aria-label="Chat WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

