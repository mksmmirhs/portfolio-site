import ReactTextTransition, { presets } from 'react-text-transition';
import heroImg from '../../assets/hero.jpg';
import { useEffect, useState } from 'react';
import getRandomInt from '../../utils/randomnumbers';

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
        <p className="text-3xl text-center">
          I am a
          <span className="text-green-600">
            <ReactTextTransition
              springConfig={presets.gentle}
              style={{ margin: '0 4px' }}
              inline
            >
              {texts[textIndex]}
            </ReactTextTransition>
          </span>
          developer.
        </p>
        <a
          className="my-4"
          href="../../../public/Mohammed Merajul Islam cv.pdf"
        >
          <button className="btn bg-green-500">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
