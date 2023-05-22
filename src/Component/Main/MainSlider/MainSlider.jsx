import Sdata from "../../../Common/DData";

import Carousel from "react-material-ui-carousel";

function MainSlider() {
  return (
    <Carousel autoPlay animation="slide" transitionDuration={500}>
      {Sdata.map((data) => {
        return (
          <div className="main-slider-container" key={data.id}>
            <div className="left">
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <button className="btn">Visti Collection</button>
            </div>
            <div className="right">
              <img src={data.cover} alt="d-photo" />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default MainSlider;
