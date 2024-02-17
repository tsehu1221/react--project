import React from 'react';
import './Home.css'
function Home(props) {
  const { image } = props;

  return (
    
      <div >

<div className='row py-5 px-5 '  id="About">
    <div className="col-sm-4">
      <div className="card text-dark">
      <img src={image} alt="Image Description" />
      <div className="text-dark">
          <h2 className="card-title ">Social Media Marketing</h2>
          <p className="card-text">We help companies increase brand 
          in technologies and designed to your specific needs.
  </p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
      <img src={image} alt="Image Description" />
        <div className="text-dark">
          <h2 className="card-title">Branding & Graphic </h2>
          <p className="card-text">A great brand identity   Your company logo, business card, a website all should tell the story about your brand. At krinfud, get your high-quality branding needs fulfilled, which would create an everlasting image 
     <br /> eyes.</p>
        </div>
      </div>
    </div>
   
    <div className="col-sm-4">
      <div className="card">
      <img src={image} alt="Image Description" />
        <div className="text-dark">
          <h2 className="card-title">Service 3</h2>
          <p className="card-text">If you have an idea that can  ve a digital solution that have a digital solution that can be realized by a web or a mobile application software, We provide custom website and app development for our clients that is backed with the latest cutting edge technologies  and designed to your specific needs.</p>
        </div>
      </div>
    </div>








</div>

    </div>

  );
}

export default Home;