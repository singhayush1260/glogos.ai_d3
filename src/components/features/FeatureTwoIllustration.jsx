import classes from "../../../styles/components/features/FeatureTwoIllustration.module.scss";
import Image from "next/image";
import FEATURE2_SVG1 from "../../../public/assests/images/f2_svg1.svg";

const FeatureTwoIllustration = () => {
  return (
    <div className={classes.feature_two_illustration}>
      <div className={classes.div_one}>
        <Image src={FEATURE2_SVG1} alt="Feature 2 svg 1" />
      </div>
      <div className={classes.div_two}>
        <p>
          Access <span>powerful tools</span> to analyze and interpret trends.
        </p>
        <p>
          Gain insights into <span>market behavior</span> and consumer
          preferences.
        </p>
        <p>
          Make <span>informed business</span> and marketing strategie
        </p>
      </div>
    </div>
  );
};
export default FeatureTwoIllustration;
