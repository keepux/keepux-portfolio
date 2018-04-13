import React from 'react';
import Link from 'gatsby-link';
import uxStudiesImageOne from '../images/ux-studies/service-blueprint.png';
// import uxStudiesDesignImageTwo from '../images/ux-studies/soco_mobile.png';
// import visualDesignImageThree from '../images/visual-design/isometric-spaces.png';

const uxStudies = () => (
    <div className="text-center">
        <h2 className="bg-yellow inline-block my-8 p-3">
            Service Model Blueprint
        </h2>
        <img src={uxStudiesImageOne} className="block mx-auto w-4/5" />
        <br />
    </div>
);

export default uxStudies;
