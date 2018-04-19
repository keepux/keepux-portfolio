import React from 'react';
import Link from 'gatsby-link';
import uxStudiesImageOne from '../images/ux-studies/service-blueprint.png';
import uxStudiesImageTwo from '../images/ux-studies/ux-dev-infographic.png';

const uxStudies = () => (
    <div className="text-center">
        <h2 className="bg-yellvisualDesignow inline-block my-8 pb-6">
            UX Studies
        </h2>
        <div className="shadow-md bg-white pt-6">
            <img src={uxStudiesImageOne} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Service Model Blueprint
            </h2>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={uxStudiesImageTwo} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                UX Development Workflow
            </h2>
        </div>
    </div>
);

export default uxStudies;
