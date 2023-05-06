import React, { useState } from 'react';
import Card from './slider/Card';


import { projects } from './slider/projects';

const projectCardSlider = () => {
    
    const [translateX, setTranslateX] = useState(0);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handlePrevClick = () => {
        if (activeCardIndex === 0) {
            return;
        }
        setActiveCardIndex(activeCardIndex - 1);
        setTranslateX(translateX + 400);
    };

    const handleNextClick = () => {
        if (activeCardIndex === projects.length - 1) {
            return;
        }

        setActiveCardIndex(activeCardIndex + 1);
        setTranslateX(translateX - 400);
    };

    return (
        <section className='work-container'>

            <div className="card-slider-container">
                <div
                    className="card-slider"
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {projects?.map((card, index) => (
                        <div
                            key={index}
                            className={`card${index === activeCardIndex ? " active" : ""}`}
                            onClick={() => setActiveCardIndex(index)}
                        >
                            <Card
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

                <div className="slider-controls">
                    <div className="prev-btn" onClick={handlePrevClick}>
                        <img
                            src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_right_fkwkax.svg"
                            alt="arrow left"
                        />
                    </div>
                    <div className="next-btn" onClick={handleNextClick}>
                        <img
                            src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674849913/svg/arrow_left_zjwj3g.svg"
                            alt="arrow right"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default projectCardSlider;

