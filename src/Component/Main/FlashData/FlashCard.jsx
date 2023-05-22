import Card from "../../../Common/Card";
import Data from "../../../Data";
import Reviews from "./Reviews";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AddToCart from "./AddToCart";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function FlashCard() {
  return (
    <>
      <h3 className="section-title">
        <i className="fa-solid fa-check"></i> Flash Deals
      </h3>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Data.map((d) => (
          <Card className="flash-card" key={d.id}>
            <img src={d.cover} alt="flash img" />
            <div className="flash-text">
              <p>{d.name}</p>
              <Reviews />
              <p className="d-price">${d.price}</p>
              <p className="discount">{d.discount}% off</p>
              <AddToCart />
            </div>
          </Card>
        ))}
      </Carousel>
    </>
  );
}

export default FlashCard;
