'use client';

import Container from '@/components/shared/container';
import { Icon } from '@/components/ui/icon';
import Image from 'next/image';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import type { StaticImageData } from 'next/image';

export interface CarouselImage {
  src: string | StaticImageData;
  alt?: string;
}

export interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
  height?: string | number;
}

function Carousel({
  images,
  autoPlay = true,
  autoPlayInterval = 6000,
  showDots = true,
  className = '',
  imageClassName = '',
  containerClassName = '',
  height = '400px',
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance function
  const autoAdvance = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Start timer function
  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (autoPlay && images.length > 1) {
      intervalRef.current = setInterval(
        autoAdvance,
        autoPlayInterval
      );
    }
  }, [autoAdvance, autoPlay, autoPlayInterval, images.length]);

  // Timer management
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    startTimer();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    startTimer();
  };

  if (!images.length) {
    return null;
  }

  return (
    <section className={`mt-12 rounded-2xl ${className}`}>
      <Container
        className={`rounded-2xl overflow-hidden ${containerClassName}`}>
        <div className="w-full relative" style={{ height }}>
          <div className="relative overflow-hidden h-full">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt || `Carousel image ${index + 1}`}
                    fill
                    className={`object-cover object-center rounded-2xl ${imageClassName}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/40 bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 z-10 backdrop-blur-sm"
                  aria-label="Previous image">
                  <Icon name="ChevronLeft" size={24} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/40 bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 z-10 backdrop-blur-sm"
                  aria-label="Next image">
                  <Icon name="ChevronRight" size={24} />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {showDots && images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 bg-white/10 rounded-full p-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-white shadow-lg'
                      : 'bg-white/50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Carousel;
