import React, { Component } from "react";
import gravity from "../pics/gravityGuy2.png";
import pernilla from "../pics/pernillaPic2.png";
import powerabs from "../pics/powerabs2.png";
import meta from "../pics/metaLogo.png";
import youTube from "../pics/youtubeLogo.png";
import instaLogo from "../pics/instaLogo.png";
import james from "../pics/jamesSmith2.png";
import background12 from "../pics/background14.jpeg";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1
};

let gurus = [
  {
    name: "Active Childhood",
    year: "1988-2004",
    description:
      "I was only fifteen when my older brother started working out, he was eighteen. He bought a small bench, several dumbbells, and enough Men's Fitness Magazines for us to make solid full body workout routines. We worked out daily. I was impressed with his results, so I took the time to study the exercises and proper form. I started learning about super sets, negative reps, the importance of rest, etc."
  },
  {
    name: "Early Days of Weight Training",
    year: "2004-2007",
    description:
      "I learned about Calorie Cycling and the do's and don't on what to do before and after working out. His YouTube videos taught me the negative effects alcohol has on traning and weight loss. He also recommends a great variety of low calorie snacks to keep you healthy."
  },
  {
    name: "Joined Gold's Gym",
    year: "2007-2012",
    description:
      "I learned how to make my favorite healthy high protein desserts and snacks on her YouTube channel. I've made several protein cakes and pizzas and they are great. I've also done protein cookies, pancakes, and ice cream."
  },
  {
    name: "Disovered Insanity",
    year: "2012",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "College Roomate",
    year: "2012-2015",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Life Happened!",
    year: "2016-2017",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Bounced back!",
    year: "2017-2018",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Learned about Calorie Deficits",
    year: "2018",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Intermittent Fasting + Insanity",
    year: "2018-2021",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Texas Winter Storm!",
    year: "2021",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Bounced Back!",
    year: "2021",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  },
  {
    name: "Calorie Deficits + Low Impact Cardio + Insanity",
    year: "2021-Present",
    description:
      "I added Kari's 10 minute a day PowerAbs program to my workouts and it has given me the results I've been wanting to see. I am a part of the Power Abs community on Facebook for my own accountability and motivation. It is a very positive and supportive group. You can find some of her ab workouts free on YouTube!"
  }
];

class AboutMeComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      gurus: gurus
    };
  }
  render() {
    let { gurus } = this.state;
    window.scrollTo(0, 0);
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
              My Fitness Journey
            </h1>
            <br></br>
            <br></br>
          </div>
        </div>
        {gurus.map(guru => (
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col s12 m4 customWorkoutImg">
                  <div class="icon-block">
                    <h5 class="center"></h5>
                  </div>
                  <div class="s4 m5 center">
                    <div class="light">
                      {/* <img
                          class="adviceImg circlePic"
                          src={guru.image}
                          alt="Unsplashed background img 1"
                        /> */}
                      <h1 className="black-text">{guru.year}</h1>
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
