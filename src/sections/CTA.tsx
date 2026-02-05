import { useEffect, useRef } from 'react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-green-900"
    >
      {/* Decorative Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700/20 rounded-full blur-3xl -z-0" />

      <div className="container-padding max-w-4xl mx-auto relative z-10">
        <div
          ref={contentRef}
          className="text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-green-200 mb-4">
            Take the First Step
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Get Started Today
          </h2>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@drmayareynolds.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-900 rounded-full font-medium transition-all duration-300 hover:bg-green-100 hover:shadow-lg"
            >
              Schedule a Consultation
            </a>

            <a
              href="tel:3105550123"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"
            >
              Call (310) 555-0123
            </a>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            Free 15-minute phone consultation available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
