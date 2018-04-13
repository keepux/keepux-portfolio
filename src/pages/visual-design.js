import React from 'react';
import Link from 'gatsby-link';
import visualDesignImageOne from '../images/visual-design/soco_desktop.png';
import visualDesignImageTwo from '../images/visual-design/soco_mobile.png';
// import visualDesignImageThree from '../images/visual-design/isometric-spaces.png';

const visualDesign = () => (
    <div className="text-center">
        <h2 className="bg-yellow inline-block my-8 p-3">
            Desktop Mockup for Shopify Theme
        </h2>
        <img src={visualDesignImageOne} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">
            Mobile Mockup for Shopify Theme
        </h2>
        <img src={visualDesignImageTwo} className="block mx-auto w-1/1" />
        <br />
        {/* <img src={illustrationsImageThree} className="block mx-auto w-1/1" />
        <h2 className="bg-yellow inline-block my-8 p-3">Isometric Spaces</h2>
        <br /> */}
    </div>
);

export default visualDesign;
