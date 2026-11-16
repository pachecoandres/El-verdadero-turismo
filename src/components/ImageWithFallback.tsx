import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#153E35] via-[#1C544B] to-[#247C83] text-[#F8F6EF] p-6 text-center ${className}`}
      >
        <Mountain className="w-8 h-8 mb-2 opacity-80" aria-hidden="true" />
        {fallbackTitle && (
          <span className="text-sm font-medium tracking-tight opacity-90">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
