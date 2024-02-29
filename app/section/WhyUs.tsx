"use client"
import { Card, CardBody } from "@nextui-org/react";
import { m } from "framer-motion";

const WhyUsSection = () => {
  const list = [
    {
      no: "01",
      title: "Lorem Ipsum",
      paragraph:
        "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat",
    },
    {
      no: "02",
      title: "Repellat Nihil",
      paragraph:
        "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest",
    },
    {
      no: "03",
      title: "Ad ad velit qui",
      paragraph:
        "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis",
    },
  ];

  return (
    <section id="why-us" className="py-8 md:py-12">
      <div
       
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why Us</h2>
          <p className="text-base sm:text-lg lg:text-xl">
            Why Choose Our Restaurant
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center md:flex-row md:items-stretch lg:mx-4 xl:mx-8">
          {list.map((item) => (
            <div
              key={item.no}
              className="flex-shrink-0 w-full md:w-1/3 lg:w-4/12 mb-4 md:mb-8"
            >
              <Card
                isHoverable
                radius="lg"
                data-aos="zoom-in"
                data-aos-delay={item.no}
              >
                <CardBody>
                  <span>{item.no}</span>
                  <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl">
                    {item.paragraph}
                  </p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
