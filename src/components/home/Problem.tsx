'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaExclamationTriangle, FaClock, FaMoneyBillWave, FaChartLine, FaArrowRight, FaLaptopCode, FaRocket, FaBolt } from 'react-icons/fa';

interface ProblemOption {
  id: string;
  icon: any;
  color: string;
  bgColor: string;
  recommendation: string;
}

export default function Problem() {
  const t = useTranslations('problem');
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  
  const problems: ProblemOption[] = [
    {
      id: 'slow-development',
      icon: FaClock,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      recommendation: 'landing'
    },
    {
      id: 'technical-costs',
      icon: FaMoneyBillWave,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      recommendation: 'optimization'
    },
    {
      id: 'performance-bottlenecks',
      icon: FaChartLine,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      recommendation: 'mvp'
    }
  ];

  const recommendations = {
    landing: { icon: FaLaptopCode, service: t('recommendationLP') },
    mvp: { icon: FaRocket, service: t('recommendationWeb') },
    optimization: { icon: FaBolt, service: t('recommendationPerformance') }
  };

  const handleProblemSelect = (problemId: string) => {
    setSelectedProblem(problemId);
    setShowRecommendation(false);
    
    // Show recommendation after a brief delay
    setTimeout(() => {
      setShowRecommendation(true);
    }, 300);
  };

  return (
    <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaExclamationTriangle className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('interactiveHeading')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            {t('interactiveSubheading')}
          </p>
        </div>

        {/* Interactive Problems Selector */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isSelected = selectedProblem === problem.id;
            return (
              <button
                key={problem.id}
                onClick={() => handleProblemSelect(problem.id)}
                className={`text-left bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-transparent hover:border-blue-200'
                }`}
              >
                <div className={`inline-flex p-4 rounded-full ${problem.bgColor} mb-6 ${isSelected ? 'ring-2 ring-blue-300' : ''}`}>
                  <Icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  {t(`problem${index + 1}.title`)}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {t(`problem${index + 1}.description`)}
                </p>
                
                {isSelected && (
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Selected</span>
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Recommendation Panel */}
        {selectedProblem && (
          <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-16 transition-all duration-500 ${
            showRecommendation ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ {t('recommendation')}
              </div>
              
              {(() => {
                const selectedProblemData = problems.find(p => p.id === selectedProblem);
                const recommendation = selectedProblemData ? recommendations[selectedProblemData.recommendation as keyof typeof recommendations] : null;
                const RecommendationIcon = recommendation?.icon;
                
                return (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t('recommendationHeading')} {recommendation?.service}
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      {t('recommendationParagraph')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="#services"
                        className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        {RecommendationIcon && <RecommendationIcon className="w-5 h-5" />}
                        {t('recommendationDetail')}
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                      >
                        {t('recommendationCTA')}
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            {t('conclusion')}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}