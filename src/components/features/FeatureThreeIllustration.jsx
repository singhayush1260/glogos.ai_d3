import classes from "../../../styles/components/features/FeatureThreeIllustration.module.scss";
import Image from "next/image";
import FEATURE2_SVG1 from "../../../public/assests/images/f3_svg1.svg";
import { useEffect, useState } from "react";

const FeatureThreeIllustration = () => {
 
  // const data=["Hashtags Analysis","Post Analysis","Followers Gain and Loss","Daily Reports","Weekly Reports","Monthly Reports"];
  // const[current, setCurrent]=useState(0);
  // useEffect(()=>{
  //   setInterval(()=>{
  //        setCurrent((c)=>{
  //         if(c<data.length){return c+1}
  //         else return 0;
  //        })
  //   },2000)
  // },[])
  return (
    <div className={classes.feature_three_illustration}>
      <div className={classes.div_one}>
        <Image src={FEATURE2_SVG1} alt="Feature 3 svg 1" />
      </div>
      <div className={classes.div_two}>
        <h6>Comprehensive Social Media Analytics Suite</h6>
         {/* <p>{data[current]}</p> */}
         <p>Hashtags Analysis</p>
        <p>Post Analysis</p>
        <p>Daily Reports</p>
        <p>Weekly Reports</p>
        <p>Monthly Reports</p>
      </div>
    </div>
  );
};
export default FeatureThreeIllustration;
{/* <p>1. Hashtags Analysis</p>
        <p>2. Post Analysis</p>
        <p>3. Followers Gain and Loss</p>
        <p>4. Daily Reports</p>
        <p>5. Weekly Reports</p>
        <p>6. Monthly Reports</p> */}
