import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { youTubeLinks } from "../constants/youtubelinks";

type Props = {
  id: number
};

class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   links: youtubeLinks[this.props.id]
      links: youTubeLinks[this.props.id]
    };
    document.querySelector(".demo-carousel");
  }

  render() {
    return (
      <Carousel>
        {this.state.links.map((link, index) => (
          <div className="paddingBottom" key={index}>
            <iframe
              showthumbs={"false"}
              width="480"
              height="300"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              className="responsive-iframe"
            ></iframe>
          </div>
        ))}
      </Carousel>
    );
  }
}
export default DemoCarousel;
//ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
