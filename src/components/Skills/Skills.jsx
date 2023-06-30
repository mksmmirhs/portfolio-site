//import ProgressBar from '@ramonak/react-progress-bar';
import ProgressBar from 'react-animated-progress-bar';

const Skills = () => {
  return (
    <section className="my-8 mx-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="90" />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="80" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="90" />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="90" />
          <p>React.js</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="50" />
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="80" />
          <p>Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="70" />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="60" />
          <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="90" />
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="60" />
          <p>Firebase</p>
        </div>
        <div className="flex flex-col items-center">
          <ProgressBar width="230" trackWidth="13" percentage="90" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
