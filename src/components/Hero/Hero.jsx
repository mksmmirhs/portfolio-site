import ReactTextTransition, { presets } from 'react-text-transition';
import heroImg from '../../assets/hero.jpg';
import { useEffect, useState } from 'react';
import getRandomInt from '../../utils/randomnumbers';
import { SocialIcon } from 'react-social-icons';
import { TypeAnimation } from 'react-type-animation';

const texts = ['MERN stack', 'Full stack'];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex(getRandomInt(0, texts.length));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div id="home" className="sm:grid sm:grid-cols-2 gap-4 m-8">
      <div>
        <img src={heroImg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl text-center">
          Hi! I am <br />
          Mohammed Merajul Islam
        </p>
        <p className="text-2xl text-center my-4 text-green-500">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am a web developer.',
              2500,
              'I am a MERN stack developer.',
              2500,
            ]}
            wrapper="span"
            speed={30}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </p>
        <div>
          <SocialIcon url="https://www.linkedin.com/in/mksmmirhs/"></SocialIcon>
          <span className="ml-4">
            <SocialIcon url="https://github.com/mksmmirhs"></SocialIcon>
          </span>
        </div>
        <a className="my-4" href="Mohammed Merajul Islam cv.pdf">
          <button className="btn bg-green-500">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
