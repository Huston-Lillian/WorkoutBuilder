import React, { Component } from "react";
import background12 from "../pics/background6.jpeg";
import chipsIcon from "../pics/chipsIcon.png";
import proteinBar from "../pics/proteinBarIcon.png";
import proteinPowder from "../pics/proteinPowderIcon.png";
import musclePharm from "../pics/musclePharm.png";
import muscleMilk from "../pics/muscleMilk.png";
import pb2 from "../pics/pb2.png";
import powerCrunch from "../pics/powerCrunch.png";
import lenny from "../pics/lenny.png";
import zonePerfect from "../pics/zonePerfect.png";
import chicharrones from "../pics/chicharrones.png";
import questChips from "../pics/questChips.png";
import questChips2 from "../pics/proteinPuff.png";
import yogurt from "../pics/yogurt.png";
import yogurt1 from "../pics/lightnfit.png";
import yogurt2 from "../pics/oikos.png";
import yogurt3 from "../pics/chobani.png";
import lowCal from "../pics/lowCalorie.png";
import lowCal1 from "../pics/popcorn.png";
import lowCal2 from "../pics/drizz.png";
import lowCal3 from "../pics/ricecake.png";
import lowCal4 from "../pics/haloTop.png";
import lowCal5 from "../pics/fruit.png";
import { pageview } from "../constants/analytics";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

let gurus = [
  {
    name: "Protein Powders",
    description:
      "I need to consume approximately 150 grams of protein daily to maintain my muscle mass and burn fat. I supplement my diet with protein powders that are high in protein and low in calories, sugars, and carbs. I prefer a serving to be under 130 calories with 25 grams of protein and less than 3 grams of sugars and carbs. Here are some that I buy frequently.",
    image: proteinPowder,
    products: [
      {
        image: musclePharm,
        link: "https://www.amazon.com/gp/product/B003BVI5FW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003BVI5FW&linkCode=as2&tag=ufitworkouts-20&linkId=8f1fadf3570c5d61486e61983198187d",
      },
      {
        image: muscleMilk,
        link: "https://www.amazon.com/gp/product/B0106ZJ4R8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0106ZJ4R8&linkCode=as2&tag=ufitworkouts-20&linkId=30ff1e65f0e72665b857e6b0dd0765df",
      },
      {
        image: pb2,
        imageClass: "pb2Icon2",
        link: "https://www.amazon.com/gp/product/B0098WV8F2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0098WV8F2&linkCode=as2&tag=ufitworkouts-20&linkId=b19d62430800e5cd37092d9606f0bb46",
      },
    ],
  },
  {
    name: "Protein Bars",
    description:
      "I rather not eat any. Typically the macros are never good enough and the taste is worse. I'd rather get a bottled protein drink than any protein bar. Having said that, if I'm on the run craving something sweet, these are my favorite because of their taste.",
    image: proteinBar,
    products: [
      {
        image: powerCrunch,
        link: "https://www.amazon.com/gp/product/B01DYFVV1O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01DYFVV1O&linkCode=as2&tag=ufitworkouts-20&linkId=c7a7453989de3e112514708a60265880",
      },
      {
        image: lenny,
        imageClass: "proteinBarsIcon",
        link: "https://www.amazon.com/gp/product/B00VUK59YQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00VUK59YQ&linkCode=as2&tag=ufitworkouts-20&linkId=9924cc1c02d0e884fac6226ccda98d64",
      },
      {
        image: zonePerfect,
        imageClass: "proteinBarsZoneP",
        link: "https://www.amazon.com/gp/product/B07VDRN1XF/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07VDRN1XF&linkCode=as2&tag=ufitworkouts-20&linkId=2a7113f3ebb9e416409f52d9df3cf4c9",
      },
    ],
  },
  {
    name: "Protein Chips",
    description:
      "These are great to have when I need to satisfy a craving. The macros on both the pork rinds and the Quest chips are amazing, and some of the flavors are delicious. Quest chips have about 140 calories per bag and 19 grams of protein.",
    image: chipsIcon,
    products: [
      {
        image: chicharrones,
        link: "https://www.amazon.com/gp/product/B07T76MN4L/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07T76MN4L&linkCode=as2&tag=ufitworkouts-20&linkId=b4991a32d542e19ca073de6402be091d",
      },

      {
        image: questChips,
        link: "https://www.amazon.com/gp/product/B09FCT5DVD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B09FCT5DVD&linkCode=as2&tag=ufitworkouts-20&linkId=e8e15ba19c128d00bfa1435e81dea13d",
      },
      {
        image: questChips2,
        imageClass: "proteinPuffs",
        link: "https://www.amazon.com/gp/product/B088WG6NHW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B088WG6NHW&linkCode=as2&tag=ufitworkouts-20&linkId=db9f6ccb94875a6236aad8b3a2e5e321",
      },
    ],
  },
  {
    name: "Greek Yogurt",
    description:
      "I love yogurt, it is so good for your digestion and has great macros. I tend to have a serving or two for dinner with granola and fruit. I use it to make protein ice cream too. Be mindful of the added sugars on these.",
    image: yogurt,
    products: [
      {
        image: yogurt1,
        link: "https://www.amazon.com/s?k=light+and+fit+greek+yogurt&ref=nb_sb_noss",
      },

      {
        image: yogurt2,
        link: "https://www.amazon.com/s?k=oikos+yogurt&ref=nb_sb_noss_2",
      },
      {
        image: yogurt3,
        link: "https://www.amazon.com/s?k=chobani+yogurt&ref=nb_sb_noss_1",
      },
    ],
  },
  {
    name: "Low Calorie Snacks",
    description:
      "These are my favorite snacks that help keep me sane, satisfied, and in a calorie deficit.",
    image: lowCal,
    products: [
      {
        image: lowCal1,
        link: "https://www.amazon.com/gp/product/B00PZ2DH6C/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00PZ2DH6C&linkCode=as2&tag=ufitworkouts-20&linkId=b66687d9372df04358607471ce3d9ce5",
      },

      {
        image: lowCal2,
        link: "https://www.amazon.com/gp/product/B076H9FY5M/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B076H9FY5M&linkCode=as2&tag=ufitworkouts-20&linkId=457867a52bd5ad1aad2288cbbc12c4ac",
      },
      {
        image: lowCal3,
        imageClass: "riceCakesImg",
        link: "https://www.amazon.com/gp/product/B0102UOPEO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0102UOPEO&linkCode=as2&tag=ufitworkouts-20&linkId=ce520f8e30a83a4798936d672f087814",
      },
    ],
  },
];

class ProteinProductsComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      gurus: gurus,
    };
  }
  render() {
    let { gurus } = this.state;
    window.scrollTo(0, 0);
    pageview(
      "Protein Products",
      window.location.pathname + "#/proteinProducts"
    );
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
              My Favorite Protein Products
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
                    {guru.products.map((product, i) => (
                      <div class="col s4 m4 center">
                        <div class="light">
                          <a href={product.link}>
                            <img
                              id={guru.name + "-" + i}
                              className={
                                product.imageClass
                                  ? product.imageClass
                                  : "pb2Icon"
                              }
                              src={product.image}
                              alt="Unsplashed background img 1"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    ))}
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

export default ProteinProductsComponent;
