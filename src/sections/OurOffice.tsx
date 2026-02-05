import { useEffect, useRef, useState } from 'react';
import { MapPin, Shield, Heart, Video, Users } from 'lucide-react';
import office1 from '../assets/office-image.jpg';
import office2 from '../assets/office-waiting.jpg';
import office3 from '../assets/office-detail.jpg';

const officeImages = [
  {
    src: office1,
    alt: 'Main therapy room with comfortable seating',
  },
  {
    src: office2,
    alt: 'Peaceful waiting area',
  },
  {
    src: office3,
    alt: 'Cozy corner with warm details',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Complete Privacy',
    description: 'Sound-insulated rooms for confidential sessions',
  },
  {
    icon: Heart,
    title: 'Comfort First',
    description: 'Thoughtfully designed spaces that feel like home',
  },
  {
    icon: Video,
    title: 'Hybrid Options',
    description: 'In-person or secure video sessions available',
  },
  {
    icon: Users,
    title: 'Welcoming Environment',
    description: 'A judgment-free zone for your healing journey',
  },
];

const OurOffice = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

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
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % officeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="office"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--warm-sand))] rounded-full opacity-60 blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--sage))]/5 rounded-full opacity-50 blur-3xl translate-x-1/3 translate-y-1/3 -z-10" />

      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta))] mb-4">
            A Space for Healing
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--charcoal))] mb-6 leading-tight">
            Our Office
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--charcoal-light))] max-w-2xl mx-auto leading-relaxed">
            A calm, confidential sanctuary in the heart of Santa Monica where you can
            feel safe to explore, heal, and grow.
          </p>
        </div>

        {/* Image Gallery & Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Image Gallery */}
          <div
            ref={galleryRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[hsl(var(--terracotta))]/30 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--sage))]/10 rounded-full -z-10" />

              {/* Main Image Display */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                {officeImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === activeImage ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-sm font-medium">
                    {officeImages[activeImage].alt}
                  </p>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-3 mt-6">
                {officeImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${index === activeImage
                      ? 'ring-2 ring-[hsl(var(--sage))] ring-offset-2 scale-105'
                      : 'opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
          >
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--sage))]/10 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-[hsl(var(--sage))]" />
              <span className="text-sm font-medium text-[hsl(var(--sage))]">
                Santa Monica, CA
              </span>
            </div>

            <div className="space-y-6 text-[hsl(var(--charcoal-light))] leading-relaxed">
              <p className="text-lg">
                Nestled in a quiet corner of Santa Monica at{' '}
                <span className="font-medium text-[hsl(var(--charcoal))]">
                  123th Street 45 W
                </span>
                , my office is designed to be a refuge from the outside world—a place
                where you can exhale and simply be.
              </p>
              <p>
                From the moment you step through the door, you'll notice the difference.
                Soft natural light fills the space. Comfortable seating invites you to relax.
                Plants and natural elements bring a sense of calm. Every detail has been
                thoughtfully chosen to create an atmosphere of warmth, safety, and tranquility.
              </p>
              <p>
                Whether you prefer in-person sessions or the flexibility of teletherapy,
                the environment remains consistent: a judgment-free space where your
                well-being is the only priority.
              </p>
            </div>

            {/* Session Types */}
            <div className="mt-8 p-6 bg-[hsl(var(--warm-sand))]/50 rounded-2xl border border-[hsl(var(--warm-sand))]">
              <h4 className="font-serif text-xl text-[hsl(var(--charcoal))] mb-4">
                Session Options
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--sage))]" />
                  <span className="text-[hsl(var(--charcoal-light))]">
                    <strong className="text-[hsl(var(--charcoal))]">In-Person:</strong> Experience the full warmth of our space
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--terracotta))]" />
                  <span className="text-[hsl(var(--charcoal-light))]">
                    <strong className="text-[hsl(var(--charcoal))]">Video Sessions:</strong> Secure, HIPAA-compliant teletherapy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--sage-light))]" />
                  <span className="text-[hsl(var(--charcoal-light))]">
                    <strong className="text-[hsl(var(--charcoal))]">Hybrid:</strong> Mix of in-person and virtual as needed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[hsl(var(--warm-sand))] hover:border-[hsl(var(--sage))]/20"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--sage))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--sage))] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[hsl(var(--sage))] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif text-lg text-[hsl(var(--charcoal))] mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-[hsl(var(--charcoal-light))] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
