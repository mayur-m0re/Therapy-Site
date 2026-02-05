import { useEffect, useRef } from 'react';

const specialties = [
  {
    title: 'Self-Esteem',
    description:
      'Building a strong sense of self-worth is key to living a fulfilled life. Let\'s work together to bolster your confidence and develop a healthier relationship with yourself.',
    image: '/specialty-self-esteem.jpg',
  },
  {
    title: 'Relationships',
    description:
      'Navigating relationships can be complex. I\'m here to guide you through these complexities to help you form healthier, more meaningful connections.',
    image: '/specialty-relationships.jpg',
  },
  {
    title: 'Burnout & Stress',
    description:
      'Feeling overwhelmed by your career or daily life is more common than you think. Together, we\'ll identify strategies to manage stress and prevent burnout.',
    image: '/specialty-burnout.jpg',
  },
];

const Specialties = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="specialties"
      ref={sectionRef}
      className="section-padding bg-[hsl(var(--warm-sand))]/30 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[hsl(var(--sage))]/5 rounded-full blur-3xl -z-10" />

      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta))] mb-4">
            Areas of Focus
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[hsl(var(--charcoal))] mb-4">
            My Specialties
          </h2>
          <p className="text-lg text-[hsl(var(--charcoal-light))] max-w-2xl mx-auto">
            I offer specialized support in areas where many people seek guidance
            and healing.
          </p>
        </div>

        {/* Specialty Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="circle-image w-48 h-48 mx-auto mt-8 mb-4 border-4 border-[hsl(var(--warm-sand))]">
                    <img
                      src={specialty.image}
                      alt={specialty.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl text-[hsl(var(--charcoal))] mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-[hsl(var(--charcoal-light))] leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
