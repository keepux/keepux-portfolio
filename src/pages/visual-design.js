import React from 'react';
import Link from 'gatsby-link';
import visualDesignImageOne from '../images/visual-design/roadtrip_01.png';
import visualDesignImageTwo from '../images/visual-design/roadtrip_02.png';
import visualDesignImageThree from '../images/visual-design/roadtrip_03.png';
import visualDesignImageFour from '../images/visual-design/roadtrip_04.png';
import visualDesignImageFive from '../images/visual-design/roadtrip_05.png';
import visualDesignImageSix from '../images/visual-design/roadtrip_06.png';

const visualDesign = () => (
    <div className="text-center">
        <h2 className="bg-yellvisualDesignow inline-block my-8 p-3">
            User Interaction Design
        </h2>
        <img src={visualDesignImageOne} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">User Journey Design</h2>
        <img src={visualDesignImageTwo} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Schema Design</h2>
        <img src={visualDesignImageThree} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">
            Mid-Fi Interaction Design
        </h2>
        <img src={visualDesignImageFour} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">
            Mid-Fi Interaction Design
        </h2>
        <img src={visualDesignImageFive} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">
            Hi-Fi Interaction Design
        </h2>
        <img src={visualDesignImageSix} className="block mx-auto w-4/5" />
        <br />
    </div>
);

export default visualDesign;
