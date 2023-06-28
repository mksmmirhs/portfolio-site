import img from '../../assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AboutMe = () => {
  return (
    <section id="aboutMe" className="grid sm:grid-cols-2 gap-4 my-4 mx-4">
      <div>
        <p className="py-2">
          Hello! My name is Mohammed Merajul Islam, and I am a passionate MERN
          stack developer. With a solid foundation in electrical and electronics
          engineering, I have successfully transitioned into the exciting world
          of web development.
        </p>
        <p className="py-2">
          During my journey, I honed my skills through the comprehensive web
          development course offered by Programming Hero. This immersive program
          provided me with a deep understanding of essential technologies such
          as HTML, CSS, and JavaScript, enabling me to craft captivating and
          interactive web experiences. Additionally, I have hands-on experience
          working with Firebase, leveraging its powerful features to create
          robust backends and real-time applications.
        </p>
        <p className="py-2">
          Constantly driven by a desire to learn and grow, I stay up-to-date
          with the latest industry trends and continuously expand my skill set.
          With my solid foundation in electrical and electronics engineering, I
          possess a unique blend of analytical thinking and creativity, allowing
          me to approach web development from a holistic perspective.
        </p>
        <p className="py-2">
          In addition to my technical skills, I am an excellent communicator and
          enjoy working in teams to achieve shared goals. I believe in effective
          collaboration, transparent communication, and the power of diverse
          perspectives to create exceptional outcomes.
        </p>

        <p className="py-2">
          I am excited to contribute my expertise to projects that push the
          boundaries of innovation, usability, and user experience. If you are
          looking for a dedicated MERN stack developer, I would love to connect
          and explore opportunities to collaborate.
        </p>
        <p className="py-2">
          Thank you for visiting my portfolio, and I look forward to creating
          remarkable digital experiences together.
        </p>
      </div>
      <div>
        <img src={img} alt="" className="sm:h-[600px]" />
      </div>
    </section>
  );
};

export default AboutMe;
