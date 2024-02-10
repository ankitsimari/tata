import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sunil Gupta',
    designation: 'Chartered Accountant',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet turpis mauris, id sollicitudin tortor tempus non. Nullam fermentum est ut enim laoreet congue.',
  },
  {
    name: 'Priya Sharma',
    designation: 'Marketing Manager',
    message: 'Sed fringilla, enim vel pulvinar lacinia, metus justo lacinia neque, ut varius nisi justo non velit. Donec auctor posuere libero, in condimentum ante laoreet quis.',
  },
  {
    name: 'Rahul Kapoor',
    designation: 'Creative Director',
    message: 'Fusce nec feugiat nulla. Fusce tristique placerat dui, id euismod dolor vehicula ac. Integer efficitur posuere massa, nec eleifend ante pulvinar id.',
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % testimonials.length;
      setCurrentSlide(nextSlide);
    }, 1500); 

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonial-slider">
      <div className="slides-container" style={{ overflow: "hidden", position: "relative" }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="slide"
            style={{
              display: index === currentSlide ? "block" : "none",
              padding: "20px",
              borderRadius: "5px",
              marginBottom: "10px"
            }}
          >
            <h3 className="text-uppercase fw-semibold fs-4">{testimonial.name}</h3>
            <p className="fs-6 fw-semibold">{testimonial.designation}</p>
            <p className="text-black opacity-75">{testimonial.message}</p>
          </div>
        ))}
      </div>
      <div className="indicators ps-3">
        {testimonials.map((testimonial, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'indicator active' : 'indicator'}
            style={{
              display: "inline-block",
              width: index === currentSlide ? "50px" : "6px",
              height: "4px",
              borderRadius: "4px",
              backgroundColor: index === currentSlide ? "#333" : "#ccc",
              margin: "0 5px",
              cursor: "pointer"
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
