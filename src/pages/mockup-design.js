import React from 'react';
import Link from 'gatsby-link';
import mockupDesignImageOne from '../images/mockup-design/soco_desktop.png';
import mockupDesignImageTwo from '../images/mockup-design/soco_mobile.png';
// import visualDesignImageThree from '../images/visual-design/isometric-spaces.png';

const mockupDesign = () => (
    <div className="text-center">
        <h2 className="bg-yellvisualDesignow inline-block my-8 pb-6">
            Mockup Design
        </h2>
        <div className="shadow-md bg-white pt-6">
            <img src={mockupDesignImageOne} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Desktop Mockup for Shopify Theme
            </h2>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={mockupDesignImageTwo} className="block mx-auto w-1/1" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Mobile Mockup for Shopify Theme
            </h2>
        </div>
        <br />
    </div>
);

export default mockupDesign;
