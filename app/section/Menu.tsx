import HoverImage from "../components/HoverImage";
const MenuSection = () => {
  const imageList = [
    {
      heading: "Continental",
      subheading: "Explore our exquisite Continental cuisine",
      imgSrc: "assets/img/menu/BUTTER GARLIC PRAWN SKEWER.png",
      href: "#",
    },
    {
      heading: "Chinese",
      subheading: "Indulge in the flavors of authentic Chinese dishes",
      imgSrc: "assets/img/menu/CHICKEN STROGANOFF.png",
      href: "#",
    },
    {
      heading: "Italian",
      subheading: "Savor the taste of Italy with our Italian specialties",
      imgSrc: "assets/img/menu/SPICY MEXICAN PASTA _1.png",
      href: "#",
    },
    {
      heading: "Mexican",
      subheading: "Spice up your palate with our vibrant Mexican menu",
      imgSrc: "assets/img/menu/MEXICAN CHICKEN SKEWER.png",
      href: "#",
    },
    {
      heading: "Vegetarian",
      subheading: "Delight in our diverse and delicious vegetarian options",
      imgSrc: "assets/img/menu/ROASTED CHICKEN STEAK WITH MUSHROOM ONION SAUCE.png",
      href: "#",
    },
  ];
  return (
    <section id="menu" className="bg-neutral-950 p-4 md:p-8 py-8 lg:py-12 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Menu</h2>
          <div className="text-base sm:text-lg lg:text-xl">Choose YOur Taste</div>
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
