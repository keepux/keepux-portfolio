import React from 'react';
import Link from 'gatsby-link';
import interactionDesignImageOne from '../images/interaction-design/interaction-launch.png';
import interactionDesignImageTwo from '../images/interaction-design/interaction-signin.png';
import interactionDesignImageThree from '../images/interaction-design/interaction-admin-signin.png';
import interactionDesignImageFour from '../images/interaction-design/interaction-share.png';

const interactionDesign = () => (
    <div className="text-center">
        <h2 className="bg-yellow inline-block my-8 p-3">Launch the app</h2>
        <img src={interactionDesignImageOne} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Sign-In</h2>
        <img src={interactionDesignImageTwo} className="block mx-auto w-1/1" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Admin Sign-In</h2>
        <img
            src={interactionDesignImageThree}
            className="block mx-auto w-1/1"
        />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Share App</h2>
        <img src={interactionDesignImageFour} className="block mx-auto w-1/1" />
        <br />
    </div>
);

export default interactionDesign;
