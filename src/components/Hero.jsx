import classes from '../../styles/components/Hero.module.scss';
import Image from 'next/image';
import HERO_IMAGE from '../../public/assests/images/hero_image.svg';
const Hero = () => {
    return (
        <section className={classes.hero}>
        <div className={classes.hero_text}>
            <h1>AI-Powered</h1>
            <h1> <span>Social Media</span> Insights</h1>
            <p>Uncover Trends and Sentiments with AI Driven Social Media Analysis</p>
            <button>Try Free Demo</button>
        </div>
        <div className={classes.hero_image}>
            <Image src={HERO_IMAGE} alt="hero_image" />
        </div>
    </section>
    )
}
export default Hero;
