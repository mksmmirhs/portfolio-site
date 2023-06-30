import { Slide } from 'react-awesome-reveal';

const Heading = ({ heading, id }) => {
  return (
    <div id={id} className="flex justify-center">
      <Slide>
        <h2 className="border-b-2 border-green-500 text-4xl my-8 mx-auto py-4 ">
          {heading}
        </h2>
      </Slide>
    </div>
  );
};

export default Heading;
