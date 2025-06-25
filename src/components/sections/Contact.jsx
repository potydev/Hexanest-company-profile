import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Website UMKM',
    'Toko Online',
    'Landing Page',
    'Company Profile',
    'Web App',
    'Maintenance & Support',
    'Custom Project'
  ];

  const budgetRanges = [
    'Di bawah Rp 2.500.000',
    'Rp 2.500.000 - Rp 5.000.000',
    'Rp 5.000.000 - Rp 10.000.000',
    'Di atas Rp 10.000.000',
    'Diskusi lebih lanjut'
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      info: '+62 812-3456-7890',
      description: 'Senin - Jumat, 09:00 - 18:00 WIB'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'hello@hexanestweb.com',
      description: 'Respon dalam 24 jam'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      info: 'Jakarta, Indonesia',
      description: 'Meeting by appointment'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      info: '+62 812-3456-7890',
      description: 'Chat langsung dengan tim'
    }
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRefs = useRef([]);

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
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        infoRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.13 },
        '-=0.3'
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo Hexanest Web Solutions! Saya tertarik untuk konsultasi tentang pembuatan website. 

Nama: ${formData.name || '[Nama]'}
Email: ${formData.email || '[Email]'}
Layanan: ${formData.service || '[Layanan yang diminati]'}
Budget: ${formData.budget || '[Budget]'}

Pesan: ${formData.message || 'Saya ingin konsultasi lebih lanjut tentang pembuatan website.'}`
    );
    window.open(`https://wa.me/6288290624271?text=${message}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-navy-dark mb-4">
              Pesan Terkirim!
            </h2>
            <p className="text-lg text-gray-600 font-inter mb-8">
              Terima kasih atas kepercayaan Anda. Tim kami akan menghubungi Anda dalam 24 jam.
            </p>
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-inter font-semibold transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy-dark mb-6">
            Mari Wujudkan 
            <span className="text-gradient-purple"> Website Impian Anda</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Siap memulai project website Anda? Tim profesional kami siap membantu 
            mewujudkan visi digital bisnis Anda dengan solusi terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-poppins font-bold text-navy-dark mb-6">
              Konsultasi Gratis
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="PT. Nama Perusahaan"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Layanan yang Diinginkan *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih range budget</option>
                    {budgetRanges.map((budget, index) => (
                      <option key={index} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Detail Project *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Ceritakan tentang project website yang Anda inginkan..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-inter font-semibold transition-all duration-200 hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-inter font-semibold transition-all duration-200 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={contact.title}
                  ref={el => (infoRefs.current[index] = el)}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-navy-dark mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-indigo-600 font-inter font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-gray-600 font-inter text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="font-poppins font-semibold text-lg">
                  Jam Operasional
                </h4>
              </div>
              <div className="space-y-2 font-inter">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-poppins font-semibold text-amber-800 mb-2">
                Response Time
              </h4>
              <p className="text-amber-700 font-inter text-sm leading-relaxed">
                Kami berkomitmen untuk merespon setiap inquiry dalam waktu maksimal 24 jam. 
                Untuk konsultasi urgent, silakan hubungi via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

