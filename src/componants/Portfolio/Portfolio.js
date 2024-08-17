import { useEffect, useState } from "react";
import axios from "axios";
import "./portfolio.css";

function Portfolio() {
  const [image, setImages] = useState([]);

  useEffect(() => {
     axios
      .get("js/data.json")
      .then(res => {setImages(res.data.portfolio)});
  }, []);

  const images = image.map((IM) => {
    return (
      <div key={IM.id}>
        <img src={IM.image} alt="" />
        <p className="overlay">
          <span>Show Image</span>
        </p>
      </div>
    );
  });

  return (
    <div id="Portfolio" className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

      <div className="box">
            {images}  
      </div>
  </div>
  );
}

export default Portfolio;
