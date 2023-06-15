// import React, { useState } from 'react';
// import Card from './slider/Card';


// import { projects } from './slider/projects';

// const projectCardSlider = () => {

//     const [translateX, setTranslateX] = useState(0);
//     const [activeCardIndex, setActiveCardIndex] = useState(0);

//     const handlePrevClick = () => {
//         if (activeCardIndex === 0) {
//             return;
//         }
//         setActiveCardIndex(activeCardIndex - 1);
//         setTranslateX(translateX + 400);
//     };

//     const handleNextClick = () => {
//         if (activeCardIndex === projects.length - 1) {
//             return;
//         }

//         setActiveCardIndex(activeCardIndex + 1);
//         setTranslateX(translateX - 400);
//     };

//     return (
//         <section className='work-container'>

//             <div className="card-slider-container">
//                 <div
//                     className="card-slider"
//                     style={{ transform: `translateX(${translateX}px)` }}
//                 >
//                     {projects?.map((card, index) => (
//                         <div
//                             key={index}
//                             className={`card${index === activeCardIndex ? " active" : ""}`}
//                             onClick={() => setActiveCardIndex(index)}
//                         >
//                             <Card
//                                 title={card.title}
//                                 image={card.imgUrl}
//                                 description={card.description}
//                                 techStack={card.techStack}
//                                 liveLink={card.liveLink}
//                                 codeLink={card.codeLink}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 <div className="slider-controls">
//                     <div className="prev-btn" onClick={handlePrevClick}>
//                         <img
//                             src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg"
//                             alt="arrow left"
//                         />
//                     </div>
//                     <div className="next-btn" onClick={handleNextClick}>
//                         <img
//                             src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg"
//                             alt="arrow right"
//                         />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default projectCardSlider;



//2nd version of project slider




// import React, { useState } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const [translateX, setTranslateX] = useState(
//     -((projects.length - 1) / 2) * 400
//   );

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//     setTranslateX(translateX + 400);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//     setTranslateX(translateX - 400);
//   };

//   return (
//     <section className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container'>
//           <div
//             className='card-slider'
//             style={{ transform: `translateX(${translateX}px)` }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='prev-btn' onClick={handlePrevClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg'
//                 alt='arrow left'
//               />
//             </div>
//             <div className='next-btn' onClick={handleNextClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg'
//                 alt='arrow right'
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;



//3rd version of project slider
//works better than the 2nd version

// import React, { useState } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const [translateX, setTranslateX] = useState(0);

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//     setTranslateX(translateX + 1);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//     setTranslateX(translateX - 1);
//   };

//   return (
//     <section className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container'>
//           <div
//             className='card-slider'
//             style={{
//               transform: `translateX(calc(50% + ${translateX * 30}vw))`,
//             }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='prev-btn' onClick={handlePrevClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg'
//                 alt='arrow left'
//               />
//             </div>
//             <div className='next-btn' onClick={handleNextClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg'
//                 alt='arrow right'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;


//4th version of project slider

// import React, { useState } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const initialActiveCardIndex = Math.floor(projects.length / 2);
//   const [activeCardIndex, setActiveCardIndex] = useState(initialActiveCardIndex);
//   const [translateX, setTranslateX] = useState(0);

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//     setTranslateX(translateX + 100);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//     setTranslateX(translateX - 100);
//   };

//   return (
//     <section className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container'>
//           <div
//             className='card-slider'
//             style={{ transform: `translateX(${translateX}%)` }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='prev-btn' onClick={handlePrevClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg'
//                 alt='arrow left'
//               />
//             </div>
//             <div className='next-btn' onClick={handleNextClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg'
//                 alt='arrow right'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;


//5th version of project slider


// import React, { useState, useRef, useEffect } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const initialActiveCardIndex = Math.floor(projects.length / 2);
//   const [activeCardIndex, setActiveCardIndex] = useState(initialActiveCardIndex);
//   const cardContainerRef = useRef(null);
//   const [cardWidth, setCardWidth] = useState(0);

//   useEffect(() => {
//     const cardContainer = cardContainerRef.current;
//     const card = cardContainer.querySelector('.card');
//     setCardWidth(card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight));
//   }, []);

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//   };

//   const getTranslateX = () => {
//     return -activeCardIndex * cardWidth;
//   };

//   return (
//     <section className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container' ref={cardContainerRef}>
//           <div
//             className='card-slider'
//             style={{ transform: `translateX(${getTranslateX()}px)` }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='prev-btn' onClick={handlePrevClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg'
//                 alt='arrow left'
//               />
//             </div>
//             <div className='next-btn' onClick={handleNextClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg'
//                 alt='arrow right'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;


//6th version of project slider


// import React, { useState, useRef, useEffect } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const initialActiveCardIndex = Math.floor((projects.length - 1) / 2);
//   const [activeCardIndex, setActiveCardIndex] = useState(initialActiveCardIndex);
//   const cardContainerRef = useRef(null);
//   const [cardWidth, setCardWidth] = useState(0);

//   useEffect(() => {
//     const cardContainer = cardContainerRef.current;
//     const card = cardContainer.querySelector('.card');
//     setCardWidth(card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight));
//   }, []);

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//   };

//   const getTranslateX = () => {
//     return -activeCardIndex * cardWidth;
//   };

//   return (
//     <section className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container' ref={cardContainerRef}>
//           <div
//             className='card-slider'
//             style={{ transform: `translateX(${getTranslateX()}px)` }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='prev-btn' onClick={handlePrevClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg'
//                 alt='arrow left'
//               />
//             </div>
//             <div className='next-btn' onClick={handleNextClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg'
//                 alt='arrow right'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;



//7th version of project slider



// import React, { useState, useRef, useEffect } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const initialActiveCardIndex = Math.floor((projects.length - 1) / 2);
//   const [activeCardIndex, setActiveCardIndex] = useState(initialActiveCardIndex);
//   const cardContainerRef = useRef(null);
//   const [cardWidth, setCardWidth] = useState(0);
//   const [translateX, setTranslateX] = useState(0);

//   useEffect(() => {
//     const cardContainer = cardContainerRef.current;
//     const card = cardContainer.querySelector('.card');
//     setCardWidth(card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight));

//     // Calculate initial translateX value
//     const initialTranslateX = -initialActiveCardIndex * cardWidth;
//     setTranslateX(initialTranslateX);
//   }, [cardWidth, initialActiveCardIndex]);

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//     setTranslateX(translateX + cardWidth);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//     setTranslateX(translateX - cardWidth);
//   };

//   return (
//     <section className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container' ref={cardContainerRef}>
//           <div
//             className='card-slider'
//             style={{ transform: `translateX(${translateX}px)` }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='prev-btn' onClick={handlePrevClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg'
//                 alt='arrow left'
//               />
//             </div>
//             <div className='next-btn' onClick={handleNextClick}>
//               <img
//                 src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg'
//                 alt='arrow right'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;



// import React, { useState, useRef, useEffect } from 'react';
// import Card from './slider/Card';
// import { projects } from './slider/projects';

// const projectCardSlider = () => {
//   const activeIndex = projects.length / 2
//   const initialActiveCardIndex = projects.length >= 5 ? Math.ceil(projects.length / 2) : Math.round(projects.length / 2) - 1 // Set the initial active card index to the second card
//   const [activeCardIndex, setActiveCardIndex] = useState(initialActiveCardIndex);
//   const cardContainerRef = useRef(null);
//   const [cardWidth, setCardWidth] = useState(0);
//   const [translateX, setTranslateX] = useState(0);

//   useEffect(() => {
//     const cardContainer = cardContainerRef.current;
//     const card = cardContainer.querySelector('.card');
//     setCardWidth(card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight));

//     // Calculate initial translateX value
//     const containerWidth = cardContainer.offsetWidth;
//     const fullWidth = projects.length * cardWidth;
//     const initialTranslateX = (containerWidth - cardWidth) / 2 - initialActiveCardIndex * cardWidth + (containerWidth - fullWidth) / 2;
//     setTranslateX(initialTranslateX);
//   }, [cardWidth, initialActiveCardIndex]);

//   const handlePrevClick = () => {
//     if (activeCardIndex === 0) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex - 1);
//     setTranslateX(translateX + cardWidth);
//   };

//   const handleNextClick = () => {
//     if (activeCardIndex === projects.length - 1) {
//       return;
//     }
//     setActiveCardIndex(activeCardIndex + 1);
//     setTranslateX(translateX - cardWidth);
//   };

//   return (
//     <section id='projects' className='work-container'>
//       <div className='container'>
//         <div className='card-slider-container' ref={cardContainerRef}>

//           <div
//             className='card-slider'
//             style={{ transform: `translateX(${translateX}px)` }}
//           >
//             {projects?.map((card, index) => (
//               <div
//                 key={index}
//                 className={`card${index === activeCardIndex ? ' active' : ''}`}
//                 onClick={() => setActiveCardIndex(index)}
//               >
//                 <Card
//                   key={index}
//                   title={card.title}
//                   image={card.imgUrl}
//                   description={card.description}
//                   techStack={card.techStack}
//                   liveLink={card.liveLink}
//                   codeLink={card.codeLink}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className='slider-controls'>
//             <div className='circle-button prev-btn' onClick={handlePrevClick}>
//               <span className="arrow-right"></span>
//             </div>
//             <div className='circle-button next-btn' onClick={handleNextClick}>
//               <span className="arrow-left"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default projectCardSlider;




import React, { useState, useRef, useEffect } from 'react';
import Card from './slider/Card';
import { projects } from './slider/projects';

const projectCardSlider = () => {
  const activeIndex = projects.length / 2;
  const initialActiveCardIndex = projects.length >= 5 ? Math.ceil(projects.length / 2) : Math.round(projects.length / 2) - 1;
  const [activeCardIndex, setActiveCardIndex] = useState(initialActiveCardIndex);
  const cardContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    const card = cardContainer.querySelector('.card');
    setCardWidth(card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight));

    // Calculate initial translateX value
    const containerWidth = cardContainer.offsetWidth;
    const fullWidth = projects.length * cardWidth;
    const initialTranslateX = (containerWidth - cardWidth) / 2 - initialActiveCardIndex * cardWidth + (containerWidth - fullWidth) / 2;
    setTranslateX(initialTranslateX);
  }, [cardWidth, initialActiveCardIndex]);

  const handlePrevClick = () => {
    if (activeCardIndex === 0) {
      return;
    }
    setActiveCardIndex(activeCardIndex - 1);
    setTranslateX(translateX + cardWidth);
  };

  const handleNextClick = () => {
    if (activeCardIndex === projects.length - 1) {
      return;
    }
    setActiveCardIndex(activeCardIndex + 1);
    setTranslateX(translateX - cardWidth);
  };

  return (
    <section id='projects' className='work-container'>
      <div className='container'>
        <div className='card-slider-container' ref={cardContainerRef}>
          <div
            className='card-slider'
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {projects?.map((card, index) => (
              <div
                key={index}
                className={`card${index === activeCardIndex ? ' active' : ''}`}
                onClick={() => setActiveCardIndex(index)}
              >
                <Card
                  key={index}
                  title={card.title}
                  image={card.imgUrl}
                  description={card.description}
                  techStack={card.techStack}
                  liveLink={card.liveLink}
                  codeLink={card.codeLink}
                />
              </div>
            ))}
          </div>

          <div className='slider-controls'>
            <div className='circle-button prev-btn' onClick={handlePrevClick}>
              <span className='arrow-right'></span>
            </div>
            <div className='circle-button next-btn' onClick={handleNextClick}>
              <span className='arrow-left'></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projectCardSlider;
