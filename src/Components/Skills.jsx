import React from 'react';
import image from "../assets/img/jagadeesh.png"
function Skills() {
  return (
    <section id='skills' className="skills">
      <div className='container d-flex'>
        <div className='skill-header col flex_b-25'>
          <h2>Here are my skills</h2>
        </div>
        <div className='col flex_b-75 grid-center pl-2'>
          <div className="orbit">
            <div className="center-image">
              <img src={image} alt="center-img" />
            </div>
            <ul>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835115/svg/ReactColor_wdwff5.svg" alt="" /></div>
                <p>React</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835114/svg/nodejscolor_zw1r5j.svg" alt="" /></div>
                <p>Node js</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835113/svg/js_qj2sv0.svg" alt="" /></div>
                <p>JavaScript</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835111/svg/html_oomobx.svg" alt="" /></div>
                <p>Html5</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835110/svg/css3_ljhohu.svg" alt="" /></div>
                <p>css3</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835115/svg/sass_kvsgt8.svg" alt="" /></div>
                <p>Scss</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835114/svg/pythoncolor_qbtjro.svg" alt="" /></div>
                <p>python</p>
              </li>
              <li>
                <div className=""><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835113/svg/mongodb_mroz9j.svg" alt="" /></div>
                <p>mongodb</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Skills;