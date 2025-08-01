'use client';
import { useTranslations } from 'next-intl';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      image: "/api/placeholder/60/60",
      text: "Mateus delivered our e-commerce platform ahead of schedule. The performance improvements were remarkable - our conversion rate increased by 150%!",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      company: "Digital Solutions",
      role: "CTO",
      image: "/api/placeholder/60/60",
      text: "The AI integration project exceeded our expectations. Our team productivity increased by 3x and customer satisfaction scores hit an all-time high.",
      rating: 5
    },
    {
      name: "Emma Davis",
      company: "StartupLab",
      role: "Founder",
      image: "/api/placeholder/60/60",
      text: "Working with M&L Software was a game-changer. They understood our vision and delivered a product that perfectly matched our needs.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5" />
                    ))}
                  </div>
                </div>
                
                <FaQuoteLeft className="text-3xl text-primary mb-4 opacity-50" />
                
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-neutral-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-neutral-300 dark:bg-neutral-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const t = useTranslations('socialProof');
  
  return (
    <section id="social-proof" className="px-5 py-20 bg-neutral-50 dark:bg-neutral-900">
      {/* Stats Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('statsHeading')}</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedCounter end={15} suffix="+" />
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t('stat1')}</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedCounter end={5000} suffix="+" />
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t('stat2')}</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedCounter end={3} suffix="x" />
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t('stat3')}</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedCounter end={4.8} suffix="/5" />
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t('stat4')}</p>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What Clients Say</h3>
        <TestimonialCarousel />
      </div>

      {/* Results Showcase */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">{t('resultsHeading')}</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl font-bold text-primary mb-4">
                {t(`result${index}.metric`)}
              </div>
              
              <h4 className="text-xl font-semibold mb-4">
                {t(`result${index}.title`)}
              </h4>
              
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t(`result${index}.description`)}
              </p>
              
              <div className="mt-4 text-sm text-neutral-500">
                {t(`result${index}.context`)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          {t('ctaText')}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
        >
          {t('ctaButton')}
        </a>
      </div>
    </section>
  );
}