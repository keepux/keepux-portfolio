import React from 'react';
import Link from 'gatsby-link';
import interactionDesignImageOne from '../images/interaction-design/onboarding.png';
import interactionDesignImageTwo from '../images/interaction-design/sign-in.png';
import interactionDesignImageThree from '../images/interaction-design/create-view-content.png';
import interactionDesignImageFour from '../images/interaction-design/view-edit-content.png';
import interactionDesignImageFive from '../images/interaction-design/schema.png';

const interactionDesign = () => (
    <div className="text-center">
        <h2 className="bg-yellow inline-block my-8 p-3">
            Launch the app as the first time user
        </h2>
        <img src={interactionDesignImageOne} className="block mx-auto w-4/5" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Sign-In</h2>
        <img src={interactionDesignImageTwo} className="block mx-auto w-1/1" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Create and View</h2>
        <img
            src={interactionDesignImageThree}
            className="block mx-auto w-4/5"
        />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">
            View and Edit Content
        </h2>
        <img src={interactionDesignImageFour} className="block mx-auto w-1/1" />
        <br />
        <h2 className="bg-yellow inline-block my-8 p-3">Schema</h2>
        <img src={interactionDesignImageFive} className="block mx-auto w-1/1" />
    </div>
);

export default interactionDesign;
