import classes from "../../../styles/components/features/Feature0neIllustration.module.scss";
import Image from "next/image";
import ACCOUNT_ANALYSIS_RESULT from "../../../public/assests/images/feature_one_svg1.svg";
import MAN_AVATAR from "../../../public/assests/images/man.jpg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AiFillHeart } from 'react-icons/ai';
import { BiSolidMessage } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Feature0neIllustration = ({ score = 10 }) => {
 
//  const[accountScore, setAccountScore]=useState(score);

//  useEffect(()=>{
//   setAccountScore(score);
//  },[accountScore])

  return (
    <div className={classes.feature_one_illustration}>
      <div className={classes.div_one}>
        <Image src={MAN_AVATAR} />
        <SkeletonTheme baseColor="#acacac" highlightColor="#444">
          <p>
            <Skeleton count={4} />
          </p>
        </SkeletonTheme>
      </div>
      <div className={classes.div_two}>
        {/* <CircularProgressbarWithChildren value={score}>
          <motion.strong>Analysing...</motion.strong>
        </CircularProgressbarWithChildren> */}
        <div className={classes.progress_bar} style={{background: `
      radial-gradient(closest-side, #01031a 79%, transparent 80% 100%),
      conic-gradient(#816dee ${score}%, #acacac 0)
    `,}}></div>
      </div>
      <div className={classes.div_three}>
        <div className={classes.meter}>
          <span>
            <i>positive</i>
            <meter value={score/10} min="0" max="10" />
          </span>
          <span>
            <i>neutral</i>
            <meter value={(score/10)-1} min="0" max="10" />
          </span>
          <span>
            <i>negative</i>
            <meter value={((score/10)-1)-2} min="0" max="10" />
          </span>
        </div>
        <div className={classes.score}>
          <strong>{`${score}`}%</strong>
          <strong>Score</strong>
          <span>
            <AiFillHeart />
            <BiSolidMessage />
            <FaLocationArrow />
          </span>
        </div>
      </div>
      <div className={classes.div_four}>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
        <Image style={{opacity:`${score/99}`}}
          src={ACCOUNT_ANALYSIS_RESULT}
          alt="ACCOUNT_ANALYSIS_RESULT_SVG"
        />
        </motion.div>
      </div>
    </div>
  );
};
export default Feature0neIllustration;
