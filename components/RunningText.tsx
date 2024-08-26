import React from 'react';
import Image from 'next/image';
import starsvg from '../public/images/star.svg';

const RunningText: React.FC = () => {
  return (
    <div className="running-text-container bg-dark-navy-blue">
      <div className="running-text flex items-center">
        <span className="text-[#ccffff] hrtxt md:text-3xl text-lg mr-2">
          Experience the Future of Gaming on the Stellar Chain!
        </span>
        <Image
          src={starsvg}
          alt="star"
          className="inline-block md:w-auto md:h-auto h-10 w-10 mr-2"
        />
        <span className="text-[#ccffff] hrtxt md:text-3xl text-lg mr-2">
          Dynamic Challenges Await – Are You Ready to Conquer?
        </span>
        <Image
          src={starsvg}
          alt="star"
          className="inline-block md:w-auto md:h-auto h-10 w-10 mr-2"
        />
        <span className="text-[#ccffff] hrtxt md:text-3xl text-lg mr-2">
          Join Now and Prove Your Skills!
        </span>
        <Image
          src={starsvg}
          alt="star"
          className="inline-block md:w-auto md:h-auto h-10 w-10 mr-2"
        />
        <span className="text-[#ccffff] hrtxt md:text-3xl text-lg mr-2">
          Experience the Future of Gaming on the Stellar Chain!
        </span>
        <Image
          src={starsvg}
          alt="star"
          className="inline-block md:w-auto md:h-auto h-10 w-10 mr-2"
        />
        <span className="text-[#ccffff] hrtxt md:text-3xl text-lg mr-2">
          Dynamic Challenges Await – Are You Ready to Conquer?
        </span>
        <Image
          src={starsvg}
          alt="star"
          className="inline-block md:w-auto md:h-auto h-10 w-10 mr-2"
        />
        <span className="text-[#ccffff] hrtxt md:text-3xl text-lg mr-2">
          Join Now and Prove Your Skills!
        </span>
        <Image
          src={starsvg}
          alt="star"
          className="inline-block md:w-auto md:h-auto h-10 w-10 mr-2"
        />
      </div>
    </div>
  );
};

export default RunningText;
