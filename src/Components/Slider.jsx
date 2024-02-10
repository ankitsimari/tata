import React, { useState, useEffect } from "react";

const slidesContent = [
  "Customer share basic details",
  "Pellentesque habitant morbi tristique senectus et netus",
  "Fusce nec feugiat nulla Fusce tristique placerat",
  "Sed fringilla enim vel pulvinar lacinia",
  "Vestibulum ante ipsum primis in faucibus",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesContent.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleProgressBarClick = (clickedIndex) => {
    setCurrentSlide(clickedIndex);
  };

  return (
    <div style={{ textAlign: "center", margin: "50px auto", width: "60%" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            height: "8px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
          onClick={(e) => {
            const clickedIndex = Math.floor(
              (e.nativeEvent.offsetX / e.target.offsetWidth) *
                slidesContent.length
            );
            handleProgressBarClick(clickedIndex);
          }}
        >
          <div
            style={{
              width: `${(currentSlide + 1) * (100 / slidesContent.length)}%`,
              backgroundColor: "#FF1680",
              height: "100%",
              borderRadius: "6px",
            }}
          ></div>
        </div>
        <div className="mt-4 fs-5 fw-semibold text-center">
          {slidesContent[currentSlide]}
        </div>
      </div>
    </div>
  );
};

export default Slider;
