import HoverImage from "../components/HoverImage";
const MenuSection = () => {
  const imageList = [
    {
      heading: "Continental",
      subheading: "Explore our exquisite Continental cuisine",
      imgSrc: "/imgs/continental-menu.jpg",
      href: "#",
    },
    {
      heading: "Chinese",
      subheading: "Indulge in the flavors of authentic Chinese dishes",
      imgSrc: "/imgs/chinese-menu.jpg",
      href: "#",
    },
    {
      heading: "Italian",
      subheading: "Savor the taste of Italy with our Italian specialties",
      imgSrc: "/imgs/italian-menu.jpg",
      href: "#",
    },
    {
      heading: "Mexican",
      subheading: "Spice up your palate with our vibrant Mexican menu",
      imgSrc: "/imgs/mexican-menu.jpg",
      href: "#",
    },
    {
      heading: "Vegetarian",
      subheading: "Delight in our diverse and delicious vegetarian options",
      imgSrc: "/imgs/vegetarian-menu.jpg",
      href: "#",
    },
  ];
  return (
    <section id="menu" className="bg-neutral-950 p-4 md:p-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Menu</h2>
          <p className="text-base sm:text-lg lg:text-xl">Choose YOur Taste</p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        {imageList.map((item, index) => (
          <HoverImage
            key={index}
            heading={item.heading}
            subheading={item.subheading}
            imgSrc={item.imgSrc}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};
export default MenuSection;
