import React from 'react';
import Link from 'gatsby-link';
import uxStudiesImageOne from '../images/ux-studies/service-blueprint.png';
import interactionDesignImageOne from '../images/interaction-design/interaction-launch.png';
import interactionDesignImageTwo from '../images/interaction-design/interaction-signin.png';
import interactionDesignImageThree from '../images/interaction-design/interaction-admin-signin.png';
import interactionDesignImageFour from '../images/interaction-design/interaction-share.png';
import mockupDesignImageOne from '../images/mockup-design/soco_desktop.png';
import mockupDesignImageTwo from '../images/mockup-design/soco_mobile.png';
import visualDesignImageOne from '../images/visual-design/lofi-landing.png';
import visualDesignImageTwo from '../images/visual-design/roadtrip_01.png';
import visualDesignImageThree from '../images/visual-design/roadtrip_02.png';
import visualDesignImageFour from '../images/visual-design/lofi-city.png';
import visualDesignImageFive from '../images/visual-design/midfi-landing.png';
import visualDesignImageSix from '../images/visual-design/roadtrip_05.png';
import visualDesignImageSeven from '../images/visual-design/hifi-landing.png';
import visualDesignImageEight from '../images/visual-design/hifi-journey.png';
import visualDesignImageNine from '../images/visual-design/hifi-experience.png';
import logoImageOne from '../images/logos/balloon-logo.png';
import logoImageTwo from '../images/logos/clementine.png';
import logoImageThree from '../images/logos/gifty-logo.png';

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
        <h2 className="bg-yellvisualDesignow inline-block my-8 pb-6">
            Interaction Design
        </h2>
        <div className="shadow-md bg-white pt-6">
            <img
                src={interactionDesignImageOne}
                className="block mx-auto w-4/5"
            />
            <h2 className="bg-yellow inline-block my-8 p-3">Launch the app</h2>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6 pr-6 pl-6">
            <img
                src={interactionDesignImageTwo}
                className="block mx-auto w-1/1"
            />
            <h2 className="bg-yellow inline-block my-8 p-3">Sign-In</h2>
            <br />
        </div>
        <br />
        <div className="shadow-md bg-white pt-6 pr-6 pl-6">
            <img
                src={interactionDesignImageThree}
                className="block mx-auto w-1/1"
            />
            <h2 className="bg-yellow inline-block my-8 p-3">Admin Sign-In</h2>
            <br />
        </div>
        <br />
        <div className="shadow-md bg-white pt-6 pr-6 pl-6">
            <img
                src={interactionDesignImageFour}
                className="block mx-auto w-1/1"
            />
            <h2 className="bg-yellow inline-block my-8 p-3">Share App</h2>
            <br />
        </div>
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
        <h2 className="bg-yellvisualDesignow inline-block my-8 pb-6">
            Visual Design
        </h2>
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageOne} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block p-3 mt-6">
                Lo-Fi Landing Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                This page is set to serve as the landing page. It is an
                invitation for a colorful and interactive road trip across the
                great state of Texas. The view should be able to choose their
                vehicle and explore the various landmarks while also learning
                how to properly drive clean.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageTwo} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block p-3 mt-6">
                Lo-Fi User Interactive Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                The road trip should start with a few prep visits such as
                visiting a fueling station where the user will be prompted for
                input such as what time of day would be best to fuel up.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageThree} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block p-3 mt-6">
                Low-Fi Journey Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                After the prep visits, the user should be presented with a map
                of the state of which the road trip is set to begin. A clear
                path to follow is to be illustrated, where the road trip starts
                and the progress along the way. Each destination city represents
                a unique experience along the road trip.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageFour} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block p-3 mt-6">
                Lo-Fi Experience Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                Each destination city should have a clean and unique background
                that engages the user and provides a narrative for its
                characteristics and attractions. In addition each destination
                city should have an interactive component where there user is
                prompted for input such as checking the tires for air.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageFive} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Mid-Fi Landing Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                The mid-fidelity landing page should articulate specific
                behavior and functionality that will provide navigation for the
                user. This view should provide ample orientation upon visual
                inspection that the user instinctually knows what actions to
                take next.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageSix} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Mid-Fi Experience Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                The mid-fidelity user experience composite will contain several
                interactive components that may have a sequential presentation.
                This composite is important to provide a wireframe for
                animations and user interface interactions such as toggles and
                buttons.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageSeven} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Hi-Fi Landing Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                The hi-fidelity landing composite will contain final output of
                graphical objects, or layers, as they are to appear in the final
                product. Furthermore, the landing composite should be inviting
                and contain a balanced color scheme; typefaces are finalized and
                an overall balanced aesthetic.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6">
            <img src={visualDesignImageEight} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Hi-Fi Journey Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                This high-fidelity composite reflects the nature of how the user
                interface can contain an alternative presentation to allow the
                user to receive a visual queue that a special part of the
                journey has been accomplished, (eg. A milestone). Interactive
                objects such as buttons or toggles will be colorful and animated
                appropriately to give sufficient notice to the user for the next
                action on their part.
            </a>
        </div>
        <br />
        <div className="shadow-md bg-white pt-6 mb-6">
            <img src={visualDesignImageNine} className="block mx-auto w-4/5" />
            <h2 className="bg-yellow inline-block my-8 p-3">
                Hi-Fi Experience Composite
            </h2>
            <a className="inline-block my-3 pb-6 pl-8 pr-8">
                The hi-fidelity user experience composite contains all of the
                interactive components with the sequential presentation layers
                and the order of presentation for objects entering and exiting
                the screen. This will include text, characters, narration,
                buttons, toggles, animation, etc.
            </a>
        </div>

        <a
            href="http://www.drivecleantexas.org/road-trip"
            className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white p-6 mt-6"
            target="_blank"
        >
            Visit the Drive Clean Texas Website
        </a>
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

export default uxStudies;
