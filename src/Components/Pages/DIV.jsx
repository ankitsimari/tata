import React, { useEffect, useState } from 'react';

const CircleDiv = () => {
  const [backgroundWidth, setBackgroundWidth] = useState(20); // Initial width is 20%

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundWidth((prevWidth) => {
        // Increment the width by 20% until it reaches 100%
        return prevWidth < 100 ? prevWidth + 20 : 100;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ width: '400px', height: '10px', position: 'relative' }}>
      <div style={{ width: `${backgroundWidth}%`, height: '100%', backgroundColor: 'red', position: 'absolute', top: 0, left: 0 }}></div>
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        {[20, 40, 60, 80, 100].map((position, index) => (
          <div
            key={index}
            style={{
              width: `${position}%`,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {index % 2 === 0 && <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: 'black' }}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleDiv;
