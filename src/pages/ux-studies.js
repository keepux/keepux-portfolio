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
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                This service blueprint is a journey for a pathology service from
                acquisition at the clinic to the reporting of findings to the
                patient and the various physical and digital interactions that
                support service interactions and adds a little more detail to
                the mix.
            </a>
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
