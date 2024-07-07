import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  const galleryItems = [
    { src: '/assets/img/gallery/gallery (1).jpg', alt: 'Gallery 1' },
    { src: '/assets/img/gallery/gallery (2).jpg', alt: 'Gallery 2' },
    { src: '/assets/img/gallery/gallery (3).jpg', alt: 'Gallery 3' },
    { src: '/assets/img/gallery/gallery (4).jpg', alt: 'Gallery 4' },
    { src: '/assets/img/gallery/gallery (5).jpg', alt: 'Gallery 5' },
    { src: '/assets/img/gallery/gallery (6).jpg', alt: 'Gallery 6' },
    { src: '/assets/img/gallery/gallery (7).jpg', alt: 'Gallery 7' },
    { src: '/assets/img/gallery/gallery.jpg', alt: 'Gallery 8' },
  ];

  return (
    <section id='gallery-us' className="bg-neutral-950 py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Gallery</h2>
          <div className="text-base sm:text-lg lg:text-xl">Some photos from Our Restaurant</div>
        </div>

        <div className="flex flex-wrap -mx-2">
          {galleryItems.map((item, index) => (
            <div key={index} className="md:w-1/4 lg:w-1/4 px-2 mb-1">
              <div className="gallery-item">
                <a href={item.src} className="gallery-lightbox" data-gall="gallery-item">
                  <Image src={item.src} alt={item.alt} width={200} height={200} className="w-full h-auto" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
