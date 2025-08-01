import Image from 'next/image';
import { FaCode, FaLaptop, FaMobile, FaRocket } from 'react-icons/fa';

interface ProjectImageProps {
  src?: string;
  alt: string;
  type?: 'development' | 'meeting' | 'mobile' | 'launch';
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}

const iconMap = {
  development: FaCode,
  meeting: FaLaptop,
  mobile: FaMobile,
  launch: FaRocket
};

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[3/2]'
};

export default function ProjectImage({ 
  src, 
  alt, 
  type = 'development',
  className = '',
  aspectRatio = 'video'
}: ProjectImageProps) {
  const Icon = iconMap[type];
  
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 ${aspectClasses[aspectRatio]} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
            {type === 'development' && 'Development Photo'}
            {type === 'meeting' && 'Client Meeting Photo'}
            {type === 'mobile' && 'Mobile App Screenshot'}
            {type === 'launch' && 'Project Launch Photo'}
          </h4>
          <p className="text-xs text-neutral-500">
            Add image to showcase your work
          </p>
        </div>
      )}
    </div>
  );
}