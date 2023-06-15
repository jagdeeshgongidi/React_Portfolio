import React from "react";
const Card = ({ title, image, description, isActive, techStack, liveLink, codeLink }) => {
    return (
        <>
            <img src={image} alt={title} className="project-img" />
            <div className="work-item-data">
                <h1>{title}</h1>
                <div className="tech-stack">
                    {techStack?.map(each => <span className="lang">{each}</span>)}
                </div>
                <p>{description}</p>

            </div>
            <div className="work-item-btn-container">
                <div className="work-item-btn-code">
                    <button disabled={codeLink ? false : true}><a pointerEvents={codeLink ? "" : 'none'} target="_blank" href={codeLink}>Code </a></button>
                </div>
                <div className="work-item-btn-live">
                    <button disabled={liveLink ? false : true} > <a pointerEvents={codeLink ? "" : 'none'} target="_blank" href={liveLink} >Live now</a></button>
                </div>
            </div>
        </>
    );
};

export default Card;
