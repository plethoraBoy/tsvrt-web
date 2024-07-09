import React from "react";
import Image from "next/image";

const GallerySection = () => {
  const galleryItems = [
    { type: "image", src: "/assets/img/gallerysection/rootop.jpg", alt: "Gallery 1" },
    { type: "image", src: "/assets/img/gallerysection/rootop2.jpg", alt: "Gallery 2" },
    { type: "image", src: "/assets/img/gallerysection/rootop3.jpg", alt: "Gallery 3" },
    { type: "video", src: "/assets/img/gallerysection/rootop4.mp4", alt: "Gallery 4" },
    { type: "image", src: "/assets/img/gallerysection/rootop5.jpg", alt: "Gallery 5" },
    { type: "image", src: "/assets/img/gallerysection/rootop5.jpg", alt: "Gallery 6" },
    { type: "image", src: "/assets/img/gallerysection/rootop2.jpg", alt: "Gallery 7" },
    { type: "video", src: "/assets/img/gallerysection/rootop.mp4", alt: "Video Gallery" },
  ];

  return (
    <section id="gallery-us" className="bg-neutral-950 py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Gallery</h2>
          <div className="text-base sm:text-lg lg:text-xl">Some photos and a video from Our Restaurant</div>
        </div>

        <div className="flex flex-wrap -mx-2">
          {galleryItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="gallery-item">
                {item.type === "image" && (
                  <div className="gallery-lightbox" data-gall="gallery-item">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}

                {item.type === "video" && (
                  <div className="relative">
                    <video width="100%" height="100%" autoPlay controls preload="auto" className="rounded-lg">
                      <source src={item.src} type="video/mp4" />
                      {/* Add <track> elements here for subtitles if needed */}
                    </video>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
