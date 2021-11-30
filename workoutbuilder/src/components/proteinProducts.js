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

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1
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
        link:
          "https://www.amazon.com/s?k=muscle+pharm+protein+powder&crid=1M4PDYMN8EMA4&sprefix=muscle+pharm%2Caps%2C375&ref=nb_sb_ss_ts-doa-p_1_12"
      },
      {
        image: muscleMilk,
        link:
          "https://www.amazon.com/s?k=muscle+milk+protein+powder&ref=nb_sb_noss"
      },
      {
        image: pb2,
        imageClass: "pb2Icon2",
        link:
          "https://www.amazon.com/s?k=pb2+powdered+peanut+butter&crid=AGNCN4WZUO8D&sprefix=pb2+%2Caps%2C208&ref=nb_sb_ss_ts-doa-p_1_4"
      }
    ]
  },
  {
    name: "Protein Bars",
    description:
      "I rather not eat any. Typically the macros are never good enough and the taste is worse. I'd rather get a bottled protein drink than any protein bar. Having said that, if I'm on the run craving something sweet, these are my favorite because of their taste.",
    image: proteinBar,
    products: [
      {
        image: powerCrunch,
        link:
          "https://www.amazon.com/s?k=power+crunch+protein+bars&ref=nb_sb_noss_1"
      },
      {
        image: lenny,
        imageClass: "proteinBarsIcon",
        link:
          "https://www.amazon.com/s?k=lenny+and+larrys+cookies&crid=NJV5NQTH3AKQ&sprefix=lenn%2Caps%2C212&ref=nb_sb_ss_ts-doa-p_1_4"
      },
      {
        image: zonePerfect,
        imageClass: "proteinBarsZoneP",
        link: "https://www.amazon.com/s?k=zone+perfect+bars&ref=nb_sb_noss_2"
      }
    ]
  },
  {
    name: "Protein Chips",
    description:
      "These are great to have when I need to satisfy a craving. The macros on both the pork rinds and the Quest chips are amazing, and some of the flavors are delicious. Quest chips have about 140 calories per bag and 19 grams of protein.",
    image: chipsIcon,
    products: [
      {
        image: chicharrones,
        link: "https://www.amazon.com/s?k=pork+rinds&ref=nb_sb_noss_1"
      },

      {
        image: questChips,
        link:
          "https://www.amazon.com/s?k=quest+protein+chips&crid=3OOY22ME48CV4&sprefix=quest+protein+%2Caps%2C209&ref=nb_sb_ss_ts-doa-p_3_14"
      },
      {
        image: questChips2,
        imageClass: "proteinPuffs",
        link:
          "https://www.amazon.com/s?k=iwon+organics+protein+puffs&i=hpc&ref=nb_sb_noss_2"
      }
    ]
  },
  {
    name: "Greek Yogurt",
    description:
      "I love yogurt, it is so good for your digestion and has great macros. I tend to have a serving or two for dinner with granola and fruit. I use it to make protein ice cream too. Be mindful of the added sugars on these.",
    image: yogurt,
    products: [
      {
        image: yogurt1,
        link:
          "https://www.amazon.com/s?k=light+and+fit+greek+yogurt&ref=nb_sb_noss"
      },

      {
        image: yogurt2,
        link: "https://www.amazon.com/s?k=oikos+yogurt&ref=nb_sb_noss_2"
      },
      {
        image: yogurt3,
        link: "https://www.amazon.com/s?k=chobani+yogurt&ref=nb_sb_noss_1"
      }
    ]
  }
  //   {
  //     name: "Low Calorie Snacks",
  //     description:
  //       "I strongly encourage you to find healthier, low calorie options for your preferred snacks and cravings. I eat a lot of fruit because it is sweet, easy to digest, and very low in calories. These are my favorite snacks that help keep me sane, satisfied, and in a calorie deficit.",
  //     image: lowCal,
  //     products: [
  //       {
  //         image: lowCal1,
  //         link:
  //           "https://www.amazon.com/s?k=act+2+popcorn+butter&crid=2BW2RQKH8RBCW&sprefix=act+2+pop%2Caps%2C204&ref=nb_sb_noss_2"
  //       },

  //       {
  //         image: lowCal2,
  //         link:
  //           "https://www.amazon.com/s?k=drizzilicious&crid=11J4N1LZ20OCU&sprefix=drizz%2Caps%2C224&ref=nb_sb_ss_ts-doa-p_1_5"
  //       },
  //       {
  //         image: lowCal3,
  //         imageClass: "riceCakesImg",
  //         link: "https://www.amazon.com/s?k=quaker+rice+cakes&ref=nb_sb_noss_1"
  //       },
  //       {
  //         image: lowCal4,
  //         link:
  //           "https://www.amazon.com/s?k=halo+top+ice+cream&crid=3KCITQDW6YH9H&sprefix=halo+top%2Caps%2C218&ref=nb_sb_ss_ts-doa-p_3_8"
  //       },
  //       {
  //         image: lowCal5,
  //         imageClass: "fruitImg",
  //         link:
  //           "https://www.amazon.com/s?k=halo+top+ice+cream&crid=3KCITQDW6YH9H&sprefix=halo+top%2Caps%2C218&ref=nb_sb_ss_ts-doa-p_3_8"
  //       }
  //     ]
  //   }
];

class ProteinProductsComponent extends Component<Props> {
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
              My Favorite Protein Products
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
