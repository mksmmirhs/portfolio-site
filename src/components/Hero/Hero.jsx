import ReactTextTransition, { presets } from 'react-text-transition';
import heroImg from '../../assets/hero.jpg';
import { useEffect, useState } from 'react';
import getRandomInt from '../../utils/randomnumbers';

const texts = ['MERN', 'Full'];

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
    <div className="sm:grid sm:grid-cols-2 gap-4 m-4">
      <div>
        <img src={heroImg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl text-center">
          Hi! I am <br />
          Mohammed Merajul Islam
        </p>
        <p className="text-3xl text-center">
          I am
          <span className="text-green-600">
            <ReactTextTransition
              springConfig={presets.gentle}
              style={{ margin: '0 4px' }}
              inline
            >
              {texts[textIndex]}
            </ReactTextTransition>
          </span>
          stack developer.
        </p>
      </div>
    </div>
  );
};

export default Hero;
