import Image from 'next/image';

interface ProfileImageProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24', 
  lg: 'w-32 h-32',
  xl: 'w-48 h-48'
};

export default function ProfileImage({ 
  src = '/M-removebg-preview.png', 
  alt, 
  size = 'lg', 
  className = '', 
  priority = false 
}: ProfileImageProps) {
  return (
    <div className={`${sizeClasses[size]} relative overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 ${className}`}>
      {src !== '/placeholder-profile.jpg' ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2"
          priority={priority}
          sizes={`${size === 'xl' ? '192px' : size === 'lg' ? '128px' : size === 'md' ? '96px' : '64px'}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/10">
          <div className="text-center p-2">
            <div className="w-8 h-8 mx-auto mb-1 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-xs font-bold">ML</span>
            </div>
            <p className="text-xs text-neutral-500 font-medium">Add Photo</p>
          </div>
        </div>
      )}
    </div>
  );
}