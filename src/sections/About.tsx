import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-[hsl(var(--sage))] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--terracotta))]/10 rounded-full blur-3xl -z-0" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-white/20 rounded-[200px_200px_20px_20px] -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--terracotta))]/20 rounded-full -z-10" />

              <div className="arch-image shadow-2xl">
                <img
                  src="/assets/dr-maya-reynolds.jpg"
                  alt="Dr. Maya Reynolds, PsyD"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta-light))] mb-4">
              About Me
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Hi, I'm
              <br />
              <span className="italic">Dr. Maya Reynolds</span>
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                I'm a Licensed Clinical Psychologist (PsyD) committed to providing
                a safe and supportive environment where we can explore your
                thoughts, feelings, and behaviors. With empathy and professional
                guidance, we'll work together to navigate the challenges life
                throws your way.
              </p>
              <p>
                My approach combines evidence-based techniques with a warm,
                person-centered philosophy. I believe that every individual has
                the capacity for growth and healing, and my role is to help you
                discover and nurture that potential within yourself.
              </p>
              <p>
                Whether you're dealing with anxiety, depression, relationship
                issues, or simply seeking personal growth, I'm here to support
                you on your journey toward a more fulfilling life.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <span className="block text-3xl font-serif text-white mb-1">10+</span>
                <span className="text-sm text-white/70">Years Experience</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <span className="block text-3xl font-serif text-white mb-1">500+</span>
                <span className="text-sm text-white/70">Clients Helped</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <span className="block text-3xl font-serif text-white mb-1">PsyD</span>
                <span className="text-sm text-white/70">Doctorate Degree</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
