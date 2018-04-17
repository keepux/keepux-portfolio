import React from 'react';
import Link from 'gatsby-link';
import uxStudiesImageOne from '../images/ux-studies/service-blueprint.png';
import uxStudiesImageTwo from '../images/ux-studies/ux-dev-infographic.png';

const uxStudies = () => (
    <div className="text-center">
        <h2 className="bg-yellow inline-block my-8 p-3">
            Service Model Blueprint
        </h2>
        <img src={uxStudiesImageOne} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">
            UX Development Workflow
        </h2>
        <img src={uxStudiesImageTwo} className="block mx-auto w-4/5" />
        <br />
    </div>
);

export default uxStudies;
