import { useEffect, useRef } from 'react';
import office from '../assets/office-image.jpg';

const Welcome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[hsl(var(--terracotta))]/20 rounded-full -z-10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[hsl(var(--sage))]/20 rounded-full -z-10" />

              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={office}
                  alt="Dr. Reynolds' therapy office"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta))] mb-4">
              Welcome
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(var(--charcoal))] mb-6 leading-tight">
              Live a More
              <br />
              <span className="text-[hsl(var(--sage))]">Fulfilling Life</span>
            </h2>
            <div className="space-y-4 text-[hsl(var(--charcoal-light))] leading-relaxed">
              <p>
                Life can be challenging—especially when you're trying to balance
                your personal and professional life. It's easy to feel like you're
                alone in facing these challenges, but I want you to know that I'm
                here to help.
              </p>
              <p>
                Whether you're navigating difficult emotions, relationship
                struggles, or simply feeling stuck, therapy can provide the support
                and guidance you need to move forward with clarity and confidence.
              </p>
              <p>
                Together, we'll create a personalized approach that honors your
                unique experiences and helps you build the life you truly want.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#specialties"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#specialties')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-[hsl(var(--sage))] font-medium hover:text-[hsl(var(--terracotta))] transition-colors duration-300 group"
              >
                Explore My Specialties
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
