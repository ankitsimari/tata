import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";

function Accordion() {
  const accordionItems = [
    { id: 1, title: ' Lorem ipsum dolor', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, ' },
    { id: 2,title: ' Lorem ipsum dolor', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, '  },
    { id: 3, title: ' Lorem ipsum dolor', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, '  },
    { id: 4, title: ' Lorem ipsum dolor', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, '  },
    { id: 5, title: ' Lorem ipsum dolor', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, '  },
    { id: 6, title: ' Lorem ipsum dolor', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, '  },
    { id: 7, title: ' Lorem ipsum ', content: '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque molestias qui voluptatibus alias libero ex earum laudantium, '  },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  return (
    <div className="container">
      {accordionItems.map((item) => (
        <div key={item.id} className={` ${activeItem === item.id ? 'themeBg fw-semibold' : ''}`}>
          <div className={`d-flex justify-content-between px-3 py-2 accordion ${activeItem === item.id ? 'themeBg' : ''}`} onClick={() => toggleItem(item.id)}>
            <span className='fw-semibold' style={{fontSize:'18px'}}>{item.id}. {item.title}</span>  
            <span className='fs-4'>{activeItem === item.id ? <FaMinus /> :<FaPlus />}</span>
          </div>
          {activeItem === item.id && (
            <div className="fw-normal px-3 pb-3 themeBg">{item.content}</div>
          )}
        </div>

    
      ))}
    </div>
  );
}

export default Accordion;
