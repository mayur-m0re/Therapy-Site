import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[hsl(var(--warm-sand))] rounded-full opacity-50 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(var(--terracotta))]/10 rounded-full opacity-50 blur-3xl -z-10" />

      <div className="container-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className="order-2 lg:order-1 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta))] mb-4">
              Licensed Clinical Psychologist
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--charcoal))] leading-tight mb-6">
              Find Your Path
              <br />
              <span className="text-[hsl(var(--sage))]">to Wellness</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--charcoal-light))] leading-relaxed mb-8 max-w-lg">
              Therapy for adults in Santa Monica, CA. A safe space to explore,
              heal, and grow toward the life you envision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-center"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="btn-secondary text-center"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[hsl(var(--terracotta))] rounded-[200px_200px_20px_20px] -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--sage))]/10 rounded-full -z-10" />

              {/* Main Image */}
              <div className="arch-image shadow-2xl">
                <img
                  src="/assets/hero-image.jpg"
                  alt="Peaceful therapy environment"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-[hsl(var(--sage))]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[hsl(var(--sage))] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
