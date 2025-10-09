
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt?: string;
}

export default function ImageGallery({ images, alt = 'Gallery image' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover hover-scale transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <i className="ri-zoom-in-line text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage]}
              alt={`${alt} ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain animate-fade-in"
            />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover-lift cursor-pointer"
              aria-label="Close lightbox"
            >
              <i className="ri-close-line text-xl"></i>
            </button>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover-lift cursor-pointer"
                  aria-label="Previous image"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover-lift cursor-pointer"
                  aria-label="Next image"
                >
                  <i className="ri-arrow-right-line text-xl"></i>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
