import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide
        autoplay={true}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
        duration={2000} // Adjust the duration in milliseconds (e.g., 2000 for 2 seconds)
        arrows={false} // Hide the arrows
        lazyLoad={true}
      >
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage:
                "url(https://i.ytimg.com/vi/-VvaCU8muFA/maxresdefault.jpg)",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage:
                "url(https://lexrestaurant.com/wp-content/uploads/2022/08/IMG_2597-e1660766933357.jpg)",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage:
                "url(https://lexrestaurant.com/wp-content/uploads/2022/08/newcropmanhattan.jpg)",
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
