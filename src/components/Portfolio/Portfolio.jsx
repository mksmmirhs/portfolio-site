import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import musicSchool from '../../assets/Melody Music School.png';
import toy from '../../assets/toy.png';
import chefs from '../../assets/chefs.png';

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid sm:grid-cols-3 gap-4 mx-4 my-8">
      <div data-aos="flip-up">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={musicSchool} className="h-[400px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Melody Music School</h2>
            <p>
              Its a summer music school. Student can enroll to classes and
              instructor post classes.
            </p>
            <p>
              <span className="text-2xl"> Technology used: </span> HTML, CSS,
              Tailwind, JavaScript, React, Node.js, MongoDB, Express.js,
              Firebase, Tanstack Query, React Hook Form
            </p>
            <div className="card-actions">
              <a href="https://music-school-a61d8.web.app/">
                <button className="btn bg-green-500">Live link</button>
              </a>
              <a href="https://github.com/mksmmirhs/melody-music-school-client">
                <button className="btn bg-green-500">Client code </button>
              </a>
              <a href="https://github.com/mksmmirhs/melody-music-school-server">
                <button className="btn bg-green-500">Server code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={toy} className="h-[400px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car Toy City</h2>
            <p>Its a toy store. Shop owner can ad toy for sale or remove it.</p>
            <p>
              <span className="text-2xl"> Technology used: </span>HTML, CSS,
              Tailwind, JavaScript, React, Node.js, MongoDB, Express.js,
              Firebase
            </p>
            <div className="card-actions">
              <a href="https://toy-store-c5606.web.app/">
                <button className="btn bg-green-500">Live link</button>
              </a>
              <a href="https://github.com/mksmmirhs/toy-hub-client">
                <button className="btn bg-green-500">Client code </button>
              </a>
              <a href="https://github.com/mksmmirhs/toy-hub-server">
                <button className="btn bg-green-500">Server code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={chefs} className="h-[400px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Korean odyssey</h2>
            <p>
              Its a chefs recipe site. It displays various kinds of recipe from
              chefs.
            </p>
            <p>
              <span className="text-2xl"> Technology used: </span> HTML, CSS,
              Tailwind, JavaScript, React, Node.js, Express.js, Firebase
            </p>
            <div className="card-actions">
              <a href="https://korean-cheaf.web.app/">
                <button className="btn bg-green-500">Live link</button>
              </a>
              <a href="https://github.com/mksmmirhs/master-chef-client">
                <button className="btn bg-green-500">Client code </button>
              </a>
              <a href="https://github.com/mksmmirhs/master-chef-server">
                <button className="btn bg-green-500">Server code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
