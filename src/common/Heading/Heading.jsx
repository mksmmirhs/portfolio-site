import { Slide } from 'react-awesome-reveal';

const Heading = ({ heading }) => {
  return (
    <div>
      <Slide>
        <h2 className="border-b-2 border-green-500 text-5xl my-8 mx-auto text-center p-4 w-1/4">
          {heading}
        </h2>
      </Slide>
    </div>
  );
};

export default Heading;
