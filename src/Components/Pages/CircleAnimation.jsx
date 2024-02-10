import React, { useState, useEffect } from 'react';

const CircleAnimation = () => {
  const [width, setWidth] = useState(20);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4',"Text 5"]; // Example array of text

  useEffect(() => {
    const interval = setInterval(() => {
      if (width < 100) {
        setWidth(prevWidth => prevWidth + 20);
      } else {
        setWidth(20); // Reset width to start the animation again
      }
      
      // Change the text index every 2 seconds
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [width, texts.length]);

  return (
    <div className='w-75 '>
      <div className='rounded-4  border border-2 border-secondary-subtle' style={{ height: '15px', width: '100%', position: 'relative',borderRadius:"20px" }}>
        <div style={{ width: `${width}%`, height: '100%', backgroundColor: 'red', position: 'absolute', top: 0, left: 0 }}></div>
        <div style={{ position: 'absolute',zIndex:"2", top: "-3px", left: '20%', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'black' }}></div>
        <div style={{ position: 'absolute', top: "-3px", left: '40%', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'black' }}></div>
        <div style={{ position: 'absolute', top: "-3px", left: '60%', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'black' }}></div>
        <div style={{ position: 'absolute', top: "-3px", left: '80%', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'black' }}></div>
        <div style={{ position: 'absolute', top: "-3px", left: '100%', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'black' }}></div>
      </div>
      <div>{texts[textIndex]}</div>
    </div>
  );
};

export default CircleAnimation;
