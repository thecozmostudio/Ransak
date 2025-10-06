/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cosmo from "../Images/cosmo.jpg"
import cosmo1 from "../Images/cosmo 1.jpg"
import cosmo2 from "../Images/cosmo 2.jpg"
import cosmo3 from "../Images/cosmo 3.jpg"

// If images are inside public/Images
const images = [cosmo, cosmo1,cosmo2,cosmo3];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPosition = (i) => {
    if (i === index) return "center";
    // if (i === (index - 1 + images.length) % images.length) return "left";
    // if (i === (index + 1) % images.length) return "right";
    return "hidden";
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Images */}
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((img, i) => {
          const position = getPosition(i);

          return (
            <AnimatePresence key={i}>
              {position !== "hidden" && (
                <motion.img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className={`absolute  object-cover transition-all duration-500 ${
                    position === "center"
                      ? "z-20 shadow-2xl"
                      : "z-10 opacity-70"
                  }`}
                  //set image size
                  style={{
                    width: position === "center" ? "100%" : "40%",
                    height: position === "center" ? "100%" : "55%",
                    // Secondary images slightly lower than center
                    top: position === "center" ? "7%" : "25%",
                    left:
                    //set position
                      position === "left"
                        ? "0%" // shift left
                        : position === "right"
                        ? "60%" // shift right
                        : "0%",
                    transform: "translate(-50%, -50%)",
                    // borderRadius: "1rem",
                    clipPath:
                      position === "center"
                        ? "none"
                        : "inset(0 0 0 0)", // hide bottom quarter
                  }}
                  initial={{ opacity: 0, y: 0, scale: 1 }}
                  animate={{
                    opacity: 1,
                    y: 10,
                    scale: position === "center" ? 1 : 1,
                  }}
                  exit={{ opacity: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute z-25 left-6 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextImage}
        className="absolute z-25 right-6 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default Carousel;
