import { useEffect, useState } from "react";
import classes from "../../../styles/components/features/Features.module.scss";
import Feature0neIllustration from "./Feature0neIllustration";
import FeatureTwoIllustration from "./FeatureTwoIllustration";
import FeatureThreeIllustration from "./FeatureThreeIllustration";

const Features = () => {

  const[score, setScore]=useState(10);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setScore((s)=>{
        if(s>96)return 10;
        return s+1;
      })
    },200);
   // return () => clearInterval(interval);
  },[])
  return (
    <section className={classes.features}>
      <h1>
        Standout <span>Characteristics</span>
      </h1>
      <div className={`${classes.feature} ${classes.feature_one}`}>
        <div className={classes.feature__heading_illustration}>
          <h2 className={classes.long_heading}>
            Discover the Aggregate Sentiment of Every Post You Make
          </h2>
          <div className={classes.feature_illustration}>
             <Feature0neIllustration score={score}/> 
          </div>
        </div>
        <p className={classes.feature_description}>
          Analyzing user sentiment scores on a social media page provides
          valuable insights into how the audience perceives and engages with the
          content. By examining these s...
        </p>
        <button>Read More</button>
      </div>
      <div className={classes.feature}>
        <div className={classes.feature__heading_illustration}>
          <h2>Stay Ahead with Trend Discovery</h2>
          <div className={classes.feature_illustration}>
            <FeatureTwoIllustration/>
          </div>
        </div>

        <p className={classes.feature_description}>
          Analyzing user sentiment scores on a social media page provides
          valuable insights into how the audience perceives and engages with the
          content. By examining these s...
        </p>
        <button>Read More</button>
      </div>
      <div className={classes.feature}>
        <div className={classes.feature__heading_illustration}>
          <h2>Account Insights at Your Fingertips</h2>
          <div className={classes.feature_illustration}>
            <FeatureThreeIllustration/>
          </div>
        </div>
        <p className={classes.feature_description}>
          Analyzing user sentiment scores on a social media page provides
          valuable insights into how the audience perceives and engages with the
          content. By examining these s...
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
};
export default Features;
