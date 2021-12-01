import React, { Component, CSSProperties } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import $ from "jquery";
type Props = {
  allowMirror: Boolean
};

const musicPlaylist = [
  "https://music.amazon.com/embed/B09C21L3YP/?id=X46u7rIpns&marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
  "https://music.amazon.com/embed/B097ZQ9941/?id=D1fozxTHX5&marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
  "https://music.amazon.com/embed/B09HW5BN9R/?id=bDK7BT2sAd&marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
  "https://music.amazon.com/embed/B00KZPBWY8/?id=3p1WQYIxlw&marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
  "https://open.spotify.com/embed/playlist/37i9dQZF1DX9s3cYAeKW5d?utm_source=generator",
  "https://open.spotify.com/embed/playlist/5MiUNFzBc7Y1Ccq7iEtex5?utm_source=generator",
  "https://open.spotify.com/embed/playlist/0sWyckJ8KrH2HbdiRGliyl?utm_source=generator",
  "https://www.youtube.com/embed/dGM1KHI0xFc",
  "https://www.youtube.com/embed/JEuAYnjtJP0",
  "https://www.youtube.com/embed/d8OL6m0ZblA",
  "https://www.youtube.com/embed/CihmFK_vg_I",
  "https://www.youtube.com/embed/EQ2iPRkQxxk"
];

const styles = {
  opacity: "0.6"
};

class MusicPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   links: youtubeLinks[this.props.id]
      links: musicPlaylist
    };
    document.querySelector(".demo-carousel");
    $(document).ready(function() {
      $(".slider").height(450);
      $(".slides").height(450);
      $(".carousel").height(50);
      $(".carousel-slider").height(420);
    });
  }

  render() {
    let { allowMirror } = this.props;
    return (
      <div className="container">
        <div className="section">
          <div className="row s12 l12"></div>
          <div className="row maringUp paddingBottomPlayList">
            <div className="col s12 m4 marginUp">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s12 m5 center"></div>
            </div>
            <div className="col s12 m12 center">
              {/* <Carousel data-indicators="false">
                {musicPlaylist.map((link, index) => (
                  <div style={allowMirror ? styles : null} key={index}>
                    <iframe
                      src={link}
                      width="480"
                      height="180px"
                      frameBorder="0"
                      allowfullscreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                ))}
              </Carousel> */}
              <Carousel data-indicators="false">
                {musicPlaylist.map((link, index) => (
                  <div
                    id="musicPlaylist"
                    style={allowMirror ? styles : null}
                    key={index}
                  >
                    {index <= 2 && (
                      <iframe
                        id="AmazonMusicEmbedB09C21L3YP"
                        src={link}
                        width="100%"
                        height="410px"
                        style={{
                          border: "1px solid rgba(0, 0, 0, 0.12)",
                          "max-width": ""
                        }}
                      ></iframe>
                    )}

                    {index > 2 && (
                      <iframe
                        src={link}
                        width="100%"
                        height="410px"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      ></iframe>
                    )}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MusicPlayerComponent;
//ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
