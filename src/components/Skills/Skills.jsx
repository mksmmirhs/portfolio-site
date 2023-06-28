import ProgressBar from '@ramonak/react-progress-bar';

const Skills = () => {
  return (
    <section id="skills" className="my-8 mx-4">
      <h2 className="text-3xl my-4">HTML:</h2>
      <ProgressBar completed={90} width="50%" bgColor="#1b9a5a"></ProgressBar>

      <h2 className="text-3xl my-4">CSS:</h2>
      <ProgressBar completed={80} width="50%" bgColor="#1b9a5a"></ProgressBar>
      <h2 className="text-3xl my-4">JavaScript:</h2>
      <ProgressBar completed={90} width="50%" bgColor="#1b9a5a"></ProgressBar>
      <h2 className="text-3xl my-4">Tailwind CSS:</h2>
      <ProgressBar completed={70} width="50%" bgColor="#1b9a5a"></ProgressBar>
      <h2 className="text-3xl my-4">React:</h2>
      <ProgressBar completed={90} width="50%" bgColor="#1b9a5a"></ProgressBar>
      <h2 className="text-3xl my-4">Node:</h2>
      <ProgressBar completed={50} width="50%" bgColor="#1b9a5a"></ProgressBar>
      <h2 className="text-3xl my-4">Express:</h2>
      <ProgressBar completed={70} width="50%" bgColor="#1b9a5a"></ProgressBar>
      <h2 className="text-3xl my-4">MongoDB:</h2>
      <ProgressBar completed={70} width="50%" bgColor="#1b9a5a"></ProgressBar>
    </section>
  );
};

export default Skills;
