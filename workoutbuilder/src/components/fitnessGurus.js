import React, { Component } from "react";
import gravity from "../pics/gravityGuy2.png";
import pernilla from "../pics/pernillaPic2.png";
import powerabs from "../pics/powerabs2.png";
import meta from "../pics/metaLogo.png";
import youTube from "../pics/youtubeLogo.png";
import instaLogo from "../pics/instaLogo.png";
import james from "../pics/jamesSmith2.png";
import background12 from "../pics/background14.jpeg";
import { pageview } from "../constants/analytics";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

let gurus = [
  {
    name: "James Smith",
    description:
      "I learned about sustainable calorie deficits through his Live sessions. He is constantly debunking fitness myths and exposes bullshit marketing tactics around the fitness industry. I recommend women follow James because of his understanding of hormonal changes and training.",
    image: james,
    youTube: "https://www.youtube.com/c/JamesSmithPT/videos",
    fb: "https://www.facebook.com/JamesSmithPT",
    insta: "https://www.instagram.com/jamessmithpt/?hl=en",
  },
  {
    name: "Gravity Transformation",
    description:
      "I learned about Calorie Cycling and the do's and don't on what to do before and after working out. His YouTube videos taught me the negative effects alcohol has on traning and weight loss. He also recommends a great variety of low calorie snacks to keep you healthy.",
    image: gravity,
    youTube: "https://www.youtube.com/user/GravityTrainingSol/videos",
    fb: "https://www.facebook.com/gravitytransformation",
    insta: "https://www.instagram.com/gravitytransformation/?hl=en",
  },
  {
    name: "Pernilla Stryker",
    description:
      "I learned how to make my favorite healthy high protein desserts and snacks on her YouTube channel. I've made several protein cakes and pizzas and they are great. I've also done protein cookies, pancakes, and ice cream.",
    image: pernilla,
    youTube: "https://www.youtube.com/c/Pernillaschannel/videos",
    insta: "https://www.instagram.com/pernillastryker/?hl=en",
  },
  {
    name: "Kari Pearce",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!",
    image: powerabs,
    youTube:
      "https://www.youtube.com/results?search_query=kari+pearce+power+abs",
    fb: "https://www.facebook.com/KariPearceCrossFitGamesAthlete",
    insta: "https://www.instagram.com/karipearcecrossfit/?hl=en",
  },
];

class FitnessGurusComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      gurus: gurus,
    };
  }
  render() {
    let { gurus } = this.state;
    window.scrollTo(0, 0);
    pageview("Fitness Gurus", window.location.pathname + "#/fitnessGurus");
    return (
      <React.Fragment>
        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br></br>
              <br></br>
            </div>
          </div>
          <div class="parallax">
            <img
              src={background12}
              alt="Unsplashed background img 1"
              style={styles}
            />
          </div>
        </div>
        <div className="container">
          <br></br>
          <div className="row center paddingBottom">
            <h1 className="center header teal-text text-lighten-2">
              Fitness and Nutrition Experts
            </h1>
            <br></br>
            <br></br>
          </div>
        </div>
        {gurus.map((guru) => (
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col s12 m4 customWorkoutImg">
                  <div class="icon-block">
                    <h5 class="center"></h5>
                  </div>
                  <div class="s4 m5 center">
                    <div class="light">
                      <a href={guru.insta}>
                        <img
                          class="adviceImg circlePic"
                          src={guru.image}
                          alt="Unsplashed background img 1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6">
                  <div class="row center">
                    <h3 class="black-text">{guru.name}</h3>
                    <h5 class="black-text">{guru.description}</h5>
                  </div>
                  <div class="row">
                    {guru.fb && (
                      <div class="col s4 m4 center">
                        <div class="light">
                          <a href={guru.fb}>
                            <img
                              className="metaLogo"
                              src={meta}
                              alt="Unsplashed background img 1"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    )}
                    <div class="col s4 m4 center">
                      <div class="light">
                        <a href={guru.youTube}>
                          <img
                            className="youTubeLogo"
                            src={youTube}
                            alt="Unsplashed background img 1"
                            href={guru.youTube}
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col s4 m4 center ">
                      <div class="light">
                        <a href={guru.insta}>
                          <img
                            className="instaLogo"
                            src={instaLogo}
                            alt="Unsplashed background img 1"
                            href={guru.insta}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default FitnessGurusComponent;
