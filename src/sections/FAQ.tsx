import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you take insurance?',
    answer:
      'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. I recommend contacting your insurance provider to understand your out-of-network mental health benefits.',
  },
  {
    question: 'What are your rates?',
    answer:
      'My standard session rate is $250 for a 50-minute individual therapy session. I also offer a limited number of sliding scale slots for those with financial need. Please contact me to discuss your specific situation.',
  },
  {
    question: 'Do you have any openings?',
    answer:
      'My availability varies throughout the year. Please reach out via phone or email to inquire about current openings. I typically have both daytime and evening appointments available.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'I require 24 hours notice for cancellations. Sessions cancelled with less than 24 hours notice will be charged the full session fee, except in cases of emergency.',
  },
  {
    question: 'How long does therapy typically last?',
    answer:
      'The length of therapy varies depending on your individual needs and goals. Some clients find relief in just a few sessions, while others benefit from longer-term support. We will regularly assess your progress and adjust our approach as needed.',
  },
  {
    question: 'Do you offer teletherapy?',
    answer:
      'Yes, I offer secure video sessions for clients who prefer to meet remotely or are unable to come to the office. Teletherapy can be just as effective as in-person sessions for many concerns.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    if (accordionRef.current) observer.observe(accordionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding bg-[hsl(var(--warm-sand))]/30 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[hsl(var(--sage))]/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="container-padding max-w-4xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-[hsl(var(--terracotta))] mb-4">
            Common Questions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[hsl(var(--charcoal))] mb-4">
            FAQs
          </h2>
          <p className="text-lg text-[hsl(var(--charcoal-light))]">
            Have questions? Here are some answers to the most common inquiries.
          </p>
        </div>

        {/* Accordion */}
        <div
          ref={accordionRef}
          className="space-y-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium text-[hsl(var(--charcoal))] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-[hsl(var(--sage))] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-[hsl(var(--charcoal-light))] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
