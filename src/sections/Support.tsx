import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const challenges = [
  'Persistent feelings of sadness or hopelessness',
  'Trouble focusing or making decisions',
  'Difficulty maintaining relationships',
  'Feeling constantly exhausted or unmotivated',
  'A pervasive sense of being overwhelmed',
];

const Support = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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
    if (listRef.current) observer.observe(listRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--terracotta))]/10 rounded-full blur-3xl -z-10" />

      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta))] mb-4">
              You're Not Alone
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(var(--charcoal))] mb-6 leading-tight">
              You Don't Have to Do
              <br />
              <span className="italic text-[hsl(var(--sage))]">This All Alone</span>
            </h2>
            <p className="text-lg text-[hsl(var(--charcoal-light))] leading-relaxed mb-8">
              If you are facing any of these challenges, there is hope. With
              empathy and guidance, we'll work together to navigate the
              difficulties life throws your way.
            </p>
            <button onClick={scrollToContact} className="btn-primary">
              Reach Out Today
            </button>
          </div>

          {/* Challenges List */}
          <div
            ref={listRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[hsl(var(--warm-sand))]">
              <h3 className="font-serif text-2xl text-[hsl(var(--charcoal))] mb-6">
                Common Challenges I Help With
              </h3>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--sage))]/10 flex items-center justify-center mt-0.5 group-hover:bg-[hsl(var(--sage))] transition-colors duration-300">
                      <Check className="w-4 h-4 text-[hsl(var(--sage))] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[hsl(var(--charcoal-light))] leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
