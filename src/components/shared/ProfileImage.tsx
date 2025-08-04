'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

interface ProfileImageProps {
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
  enableCoinFlip?: boolean;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24', 
  lg: 'w-32 h-32',
  xl: 'w-48 h-48'
};

export default function ProfileImage({ 
  alt, 
  size = 'lg', 
  className = '', 
  priority = false,
  enableCoinFlip = false
}: ProfileImageProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);
  
  useEffect(() => {
    if (!enableCoinFlip) return;
    
    // Only run on client-side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    const createInterval = () => {
      return setInterval(() => {
        if (Math.random() < 0.3) {
          handleFlip();
        }
      }, Math.random() * 5000 + 10000);
    };
    
    const flipInterval = createInterval();
    
    return () => clearInterval(flipInterval);
  }, [enableCoinFlip, handleFlip]);
  return (
    <div 
      className={`${sizeClasses[size]} ${className} relative cursor-pointer`}
      onClick={enableCoinFlip ? handleFlip : undefined}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="w-full h-full transition-transform duration-300 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front face - ML_SOFTWARE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-full border-4 border-neutral-300 dark:border-neutral-600 shadow-lg bg-transparent"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-full rounded-full overflow-hidden p-4 flex items-center justify-center">
            <div className="w-full h-full relative">
              <Image
                src="/ML_SOFTWARE.png"
                alt={alt}
                fill
                className="object-contain"
                priority={priority}
                sizes={`${size === 'xl' ? '192px' : size === 'lg' ? '128px' : size === 'md' ? '96px' : '64px'}`}
              />
            </div>
          </div>
        </div>

        {/* Back face - mateus.png */}
        <div 
          className="absolute inset-0 w-full h-full rounded-full border-4 border-neutral-300 dark:border-neutral-600 shadow-lg bg-transparent"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <div className="w-full h-full relative">
              <Image
                src="/mateus.png"
                alt={alt}
                fill
                className="object-cover rounded-full"
                priority={priority}
                sizes={`${size === 'xl' ? '192px' : size === 'lg' ? '128px' : size === 'md' ? '96px' : '64px'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}