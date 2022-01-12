import React, { Component } from "react";
import gravity from "../pics/gravityGuy2.png";
import pernilla from "../pics/pernillaPic2.png";
import powerabs from "../pics/powerabs2.png";
import meta from "../pics/metaLogo.png";
import youTube from "../pics/youtubeLogo.png";
import lastAboutMePic from "../pics/lastAboutMePic3.png";
import me from "../pics/fitnessJourney.jpeg";
import bulked from "../pics/bulked2.png";
import collegeAbs from "../pics/collegeAbs2.png";
import bruceLeeStatus from "../pics/bruceLeeStatus2.png";
import fitToFat from "../pics/fitToFat3.png";
import background12 from "../pics/background16.jpeg";
import { pageview } from "../constants/analytics";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

const styleCollegeAbs = {
  height: "auto",
  width: "35%",
  "border-radius": "50%",
};

const styleFitToFat = {
  height: "50%",
  width: "50%",
};

let gurus = [
  {
    name: "Active Childhood",
    year: "1988- 2004",
    description:
      "I started working out when I was fifteen years old. I had a small bench, several dumbbells, and enough Men's Fitness Magazines to make solid full body workout routines. I started working out daily.",
  },
  {
    name: "Early Days of Weight Training",
    year: "2004- 2007",
    description:
      "Read Arnold's Encyclopedia of Modern Bodybuilding. Attempted and discovered the exercises that engage my muscles the most. Learned about super sets, negative reps, how to train for strength. I used the apartment complex's gym. At this point I did not know anything about nutrition nor was I consuming any supplements.",
  },
  {
    name: "Joined Gold's Gym",
    year: "2007- 2012",
    description:
      "Transitioned from the apartment complex's gym to Gold's. I adopted new exercises and started using new machines. My workout schedule was based on muscle groups.",
  },
  {
    name: "Introduced to Shaun-T's Insanity",
    year: "2012",
    description:
      "My sister in law introduced me to Insanity. I did not feel Insanity was right for me so I continued weight training. I got accepted to UT so I ditched Gold's.",
  },
  {
    name: "Nutrition + My College Roomate",
    year: "2012- 2015",
    description:
      "My college roommate had dated a nutritionist and was actively doing Insanity. He taught me to eat for function and not for pleasure. He opened my eyes to all the trash ingredients on the food at the grocery store and the importance of protein. He also shared his personal choice of not eating after 8 pm. I took a weight lifting class and learned the Olympic lifts, adopted a T-TH full body work out and did Insanity on M-W-F. I started consuming protein shakes and drinking a gallon of water a day. Abs finally showed up at 185 lbs!",
  },
  {
    name: "From Fit to Fat!",
    image: collegeAbs,
    styles: styleCollegeAbs,
    year: "2016- 2017",
    description:
      "Life happened and I stopped exercising for over six months and found myself at 220 lbs. I was obviously stressed and eating for pleasure.",
  },
  {
    name: "From Fat to Fit!",
    year: "2017- 2018",
    description:
      "I felt so heavy and uncomfortable, in fact, the biggest I've seen myself is at 220 lbs. I went back to single ingredient foods, the gallon of water, Insanity, and started Arnold's three day split routine. I got down to 190 lbs after 7 months of hard work and focus.",
  },
  {
    name: "Intermittent Fasting + Insanity",
    image: bulked,
    styles: styleCollegeAbs,
    year: "2018- 2021",
    description:
      "I learned the real purpose of Intermittent Fasting is to get to a calorie deficit. I learned about TEF, TDEE, calorie cycling, the energy balance equation, and protein intake. I estimated the calories in the foods I consumed and made slight adjustments to my diet. I got tired of driving to a crowded gym so I ditched the weights and stuck to Insanity. I got down to 170 lbs and I felt in the best shape of my life. I started an ongoing goal to always be fit on my birthday.",
  },
  {
    name: "From Fit to Fat - Texas Winter Storm Edition",
    image: bruceLeeStatus,
    styles: styleCollegeAbs,
    year: "2021",
    description:
      "I do Insanity outside but I didn't want to because it was so cold. I live on the third floor so I can't do it inside without bothering my neighbors. I didn't know how to keep active so I began developing my workout builder. My apartment then flooded. My cats and I moved in with my sister for a month and a half after we spent 5 days without power and water. I got carried away with the emotional aftermath of my apartment being ruined and the world ending (lol). I let go and I ended putting on 30 lbs in 2 months. Back to being 200 lbs.",
  },
  {
    name: "From Fat to Fit!",
    image: fitToFat,
    styles: styleFitToFat,
    year: "2021",
    description:
      "At this point I know the recipe for success, it just comes down to committing. I was 172 days away from my birthday and so I started a countdown. I made sure to maintain a calorie deficit, eat single ingredient foods, eat enough protein, drink a gallon of water a day, and exercise. I came across Team Body Project and adopted their awesome short routines as a second daily workout.",
  },
  {
    name: "Calorie Cycling + Protein + Water + Exercise",
    year: "2021-Present",
    image: lastAboutMePic,
    styles: styleCollegeAbs,
    description:
      "It took 90 days for me to get back to 170 lbs. I added Kari Pearce's 10 minute a day ab programs to my Insanity and Team Body Project workouts. I aim to be more resilient next time life happens. It is harder to eat right daily than to workout daily. Working smarter not harder means controlling our calories.",
  },
];

class AboutMeComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      gurus: gurus,
    };
  }
  render() {
    let { gurus } = this.state;
    window.scrollTo(0, 0);
    pageview("About Me", window.location.pathname + "#/aboutMe");
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
          <div className="row center">
            <h1 className="center header teal-text text-lighten-2">
              My Fitness Journey
            </h1>
            <br></br>
            <br></br>
          </div>
          <div class="s12 m12 center">
            <div class="light">
              <img
                class="circlePic aboutmePic aboutMeImages"
                src={me}
                alt="Unsplashed background img 1"
              />
            </div>
          </div>
        </div>
        {gurus.map((guru) => (
          <div class="container paddingBottom">
            <div class="section">
              <div className="row">
                <div class="col s12 m12 center">
                  {guru.image && (
                    <img
                      style={guru.styles ? guru.styles : null}
                      class="aboutMeImages"
                      src={guru.image}
                      alt="Unsplashed background img 1"
                    />
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col s12 m4 customWorkoutImg">
                  <div class="icon-block">
                    <h5 class="center"></h5>
                  </div>
                  <div class="s12 m12 center">
                    <div class="light">
                      {/* {guru.image && (
                        <img
                          class="adviceImg circlePic"
                          src={guru.image}
                          alt="Unsplashed background img 1"
                        />
                      )} */}
                      <h1 className="teal-text center">{guru.year}</h1>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6">
                  <div class="row center">
                    <h3 class="black-text">{guru.name}</h3>
                    <h5 class="black-text">{guru.description}</h5>
                  </div>
                  <div class="row"></div>
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

export default AboutMeComponent;
