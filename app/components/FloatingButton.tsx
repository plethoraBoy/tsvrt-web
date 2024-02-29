// components/FloatingButton.tsx
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@nextui-org/react";

const FloatingButton: React.FC = () => {

  return (
    <Button
      className="fixed bottom-6 right-6 p-3 rounded-full"
      isIconOnly
      color="warning"
      variant="shadow"
      aria-label="Toggle Theme"
      style={{ zIndex: 9999 }}
    >
      {/* {theme === "light" ? <FiMoon /> : <FiSun />} */}
    </Button>
  );
};

export default FloatingButton;
