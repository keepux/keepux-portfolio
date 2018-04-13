import React from 'react';
import Link from 'gatsby-link';
import illustrationsImageOne from '../images/illustrations/boardroom.png';
import illustrationsImageTwo from '../images/illustrations/clouds.png';
import illustrationsImageThree from '../images/illustrations/isometric-spaces.png';

const Illustrations = () => (
    <div className="text-center">
        <img src={illustrationsImageOne} className="block mx-auto w-4/5" />
        <h2 className="bg-yellow inline-block my-8 p-3">Boardroom</h2>
        <br />
        <img src={illustrationsImageTwo} className="block mx-auto w-1/1" />
        <h2 className="bg-yellow inline-block my-8 p-3">Clouds</h2>
        <br />
        <img src={illustrationsImageThree} className="block mx-auto w-1/1" />
        <h2 className="bg-yellow inline-block my-8 p-3">Isometric Spaces</h2>
        <br />
    </div>
);

export default Illustrations;
