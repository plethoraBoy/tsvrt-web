// components/BanquetFeatures.tsx
import { motion } from "framer-motion";

const BanquetFeatures = () => {
  const featuresData = [
    {
      space: "Grand Ballroom",
      capacity: "100 guests",
      features: "Stage, Dance Floor, LED Lighting",
      size: "2000 sq.ft.",
    },
    {
      space: "Executive Boardroom",
      capacity: "40 guests",
      features: "4K Projector, Conference System",
      size: "800 sq.ft.",
    },
    {
      space: "Garden Terrace",
      capacity: "150 guests",
      features: "Open-air, City Views, Fireplace",
      size: "1500 sq.ft.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden"
    >
      {/* Desktop/Tablet View - Table Format */}
      <div className="hidden md:block">
        <div className="rounded-3xl overflow-hidden">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-[#d4a76a]/20 backdrop-blur-sm">
                <th className="py-4 px-6 text-left font-bold text-base rounded-tl-3xl">
                  Space
                </th>
                <th className="py-4 px-6 text-left font-bold text-base">
                  Capacity
                </th>
                <th className="py-4 px-6 text-left font-bold text-base">
                  Size
                </th>
                <th className="py-4 px-6 text-left font-bold text-base rounded-tr-3xl">
                  Features
                </th>
              </tr>
            </thead>
            <tbody>
              {featuresData.map((item, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(212, 167, 106, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                  className="backdrop-blur-sm hover:bg-white/5 transition-colors"
                >
                  <td
                    className={`py-4 px-6 font-medium flex items-center text-base ${idx === featuresData.length - 1 ? "rounded-bl-3xl" : ""}`}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#d4a76a] mr-3"></div>
                    {item.space}
                  </td>
                  <td className="py-4 px-6 text-base">{item.capacity}</td>
                  <td className="py-4 px-6 text-base">{item.size}</td>
                  <td className="py-4 px-6 text-base">{item.features}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 bg-[#d4a76a]/10 backdrop-blur-sm text-white/80 text-sm">
            <span className="flex-1">
              All spaces include premium sound systems, dedicated event staff,
              and customizable lighting
            </span>
          </div>
        </div>
      </div>

      {/* Mobile View - Card Format */}
      <div className="md:hidden space-y-4">
        {featuresData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              backgroundColor: "rgba(212, 167, 106, 0.1)",
              transition: { duration: 0.2 },
            }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-[#d4a76a] mr-3"></div>
                <h3 className="text-lg font-medium text-white">{item.space}</h3>
              </div>

              <div className="space-y-2 pl-6">
                <div className="flex justify-between">
                  <span className="text-white/70">Capacity:</span>
                  <span className="text-white font-medium">
                    {item.capacity}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Size:</span>
                  <span className="text-white font-medium">{item.size}</span>
                </div>
                <div>
                  <span className="text-white/70">Features:</span>
                  <p className="text-white mt-1">{item.features}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="p-3 rounded-3xl bg-[#d4a76a]/10 backdrop-blur-sm text-white/80 text-xs">
          All spaces include premium sound systems, dedicated event staff, and
          customizable lighting
        </div>
      </div>
    </motion.div>
  );
};

export default BanquetFeatures;
