import React, { useRef, useEffect } from 'react';
import { Target, Users, Award, Lightbulb, Heart, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const valueRefs = useRef([]);
  const teamRefs = useRef([]);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Fokus pada Kualitas',
      description: 'Setiap website yang kami buat selalu mengutamakan kualitas tinggi dan performa optimal untuk memberikan pengalaman terbaik bagi pengguna.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim developer dan designer berpengalaman yang selalu mengikuti perkembangan teknologi web terkini.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Inovasi Berkelanjutan',
      description: 'Kami selalu mencari solusi inovatif dan teknologi terbaru untuk memberikan hasil yang melampaui ekspektasi klien.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pelayanan Terbaik',
      description: 'Komitmen kami adalah memberikan pelayanan terbaik dengan komunikasi yang jelas dan support yang responsif.'
    }
  ];

  const team = [
    {
      name: 'Ahmad Rizki',
      role: 'Founder & Lead Developer',
      image: '/api/placeholder/150/150',
      description: 'Full-stack developer dengan 5+ tahun pengalaman dalam pengembangan web modern.'
    },
    {
      name: 'Sarah Putri',
      role: 'UI/UX Designer',
      image: '/api/placeholder/150/150',
      description: 'Designer kreatif yang ahli dalam menciptakan desain yang user-friendly dan menarik.'
    },
    {
      name: 'Budi Santoso',
      role: 'Backend Developer',
      image: '/api/placeholder/150/150',
      description: 'Spesialis backend dengan keahlian dalam database optimization dan API development.'
    }
  ];

  const achievements = [
    { number: '100+', label: 'Project Selesai' },
    { number: '50+', label: 'Klien Puas' },
    { number: '3+', label: 'Tahun Pengalaman' },
    { number: '24/7', label: 'Support' }
  ];

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
        valueRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
        '-=0.3'
      )
      .fromTo(
        teamRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
        '-=0.3'
      );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-inter font-medium text-sm mb-4">
            <Award className="w-4 h-4 mr-2" />
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy-dark mb-6">
            Membangun Website 
            <span className="text-gradient-purple"> Berkualitas Tinggi</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Hexanest Web Solutions adalah agensi pengembangan website yang berdedikasi untuk 
            membantu bisnis berkembang melalui solusi digital yang inovatif dan berkualitas tinggi.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-navy-dark mb-6">
              Cerita Kami
            </h3>
            <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
              <p>
                Didirikan pada tahun 2021, Hexanest Web Solutions lahir dari passion untuk 
                membantu bisnis lokal Indonesia berkembang di era digital. Kami memahami 
                bahwa setiap bisnis memiliki keunikan dan tantangan tersendiri.
              </p>
              <p>
                Dengan pengalaman yang terus berkembang, kami telah membantu lebih dari 50 
                klien dari berbagai industri untuk memiliki presence online yang kuat dan 
                efektif. Dari UMKM hingga perusahaan menengah, kami selalu berkomitmen 
                memberikan solusi terbaik.
              </p>
              <p>
                Visi kami adalah menjadi partner terpercaya dalam transformasi digital 
                bisnis Indonesia, dengan misi menghadirkan website berkualitas tinggi 
                yang dapat meningkatkan performa dan kredibilitas bisnis klien.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-inter opacity-90">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-navy-dark mb-4">
              Nilai-Nilai Kami
            </h3>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap project yang kami kerjakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                ref={el => (valueRefs.current[index] = el)}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h4 className="text-xl font-poppins font-semibold text-navy-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-navy-dark mb-4">
              Tim Profesional Kami
            </h3>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Bertemu dengan tim ahli yang siap mewujudkan visi digital Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                ref={el => (teamRefs.current[index] = el)}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200 border border-gray-100"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-poppins font-semibold text-navy-dark mb-2">
                  {member.name}
                </h4>
                <p className="text-indigo-600 font-inter font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

