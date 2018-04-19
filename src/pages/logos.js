import React from 'react';
import Link from 'gatsby-link';
import logoImageOne from '../images/logos/balloon-logo.png';
import logoImageTwo from '../images/logos/clementine.png';
import logoImageThree from '../images/logos/gifty-logo.png';

const Logos = () => (
    <div className="text-center">
        {/* <img src={headerImage} className="block mx-auto w-1/3" /> */}
        <div className="shadow-md bg-white pt-6">
            <img src={logoImageOne} className="block mx-auto w-5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Logo for OpenSail
            </h2>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={logoImageTwo} className="block mx-auto w-64" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Logo for Clementine
            </h2>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={logoImageThree} className="block mx-auto w-64" />
            <h2 className="bg-yellow inline-block my-8 p-3">Logo for GIFty</h2>
        </div>
    </div>
);

export default Logos;
