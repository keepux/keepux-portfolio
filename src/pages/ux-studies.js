import React from 'react';
import Link from 'gatsby-link';
import uxStudiesImageOne from '../images/ux-studies/service-blueprint.png';

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
            <h2 className="bg-yellow inline-block my-8 p-3">
                UX is Quantitative and Qualitative
            </h2>
            <p className="leading-loose p-4">
                Lets step back and take a look at this statement from a shared
                perspective. To be more precise, we need quantifiable ways to
                measure qualatative properties. Does this sound like an
                oxymoron? Some might say it does. How do we measure quality
                exactly? Some have valuable insight on the matter, while others
                may say it's a balance of art and science or a right brain, left
                brain thing. We feel like discipline is a better way to describe
                the essence of the craft. One statement that we can most all
                agree on is that a delightful experience is the goal. Defining
                what exactly the experience is, however, both, a creative, and a
                scientific process.
            </p>
            <br />
            <p className="leading-loose p-4">
                Furthermore, creating delightful experiences requires knowledge
                of how decisions are made. Intuition plays a significant role in
                determining the complex and often subconscious sets of decisions
                that a person might make in their interactions with a product.
                UX gives us a set of guidelines and methods, that allow us to
                better understand those decisions and possible actions, which
                may or may not be mostly guided by intuition, and how we might
                improve, and/or guide, new design decisions to allow for an
                improvement in the overall interaction. Remember, the set of
                guidelines can exist in either qualitative, quantitative, or
                both states.
            </p>
            <br />
            <p className="leading-loose p-4">
                Naturally, quantifiable methods are somewhat engineer friendly
                and they are mesurable by their very fabric. Ok, good, so we
                have established that we can measure quantifiable data. So how
                do we measure qualatative data, and even more importantly, how
                do we present the data in a way that any improvements can be
                measured? The discipline of UX design sets out to addresses this
                question. It offers strategic ways of illustrating, interpreting
                and integrating the various components of design and production
                which can have tremendous benefit to the overall process of how
                delightful products are made.
            </p>
        </div>
        <br />
    </div>
);

export default uxStudies;
