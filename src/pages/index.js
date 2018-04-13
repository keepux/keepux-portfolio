import React from 'react';
import Link from 'gatsby-link';
import headingImage from '../images/heading.svg';

const IndexPage = () => (
    <div className="text-center">
        <img src={headingImage} className="block mx-auto w-2/3" />
        <h2 className="bg-yellow inline-block my-8 p-3">
            UX is Quantitative and Qualatative
        </h2>
        <p className="leading-loose">
            Lets step back and take a look at this statement from a shared
            perspective. To be more precise, we need quantifiable ways to
            measure qualatative properties. Does this sound like an oxymoron?
            Some might say it does. How do we measure quality exactly? Some have
            valuable insight on the matter, while others may say it's a balance
            of art and science or a right brain, left brain thing. We feel like
            discipline is a better way to describe the essence of the craft. One
            statement that we can most all agree on is that a delightful
            experience is the goal. Defining what exactly the experience is,
            however, both, a creative, and a scientific process.
        </p>
        <br />
        <p className="leading-loose">
            Furthermore, creating delightful experiences requires knowledge of
            how decisions are made. Intuition plays a significant role in
            determining the complex and often subconscious sets of decisions
            that a person might make in their interactions with a product. UX
            gives us a set of guidelines and methods, that allow us to better
            understand those decisions and possible actions, which may or may
            not be mostly guided by intuition, and how we might improve, and/or
            guide, new design decisions to allow for an improvement in the
            overall interaction. Remember, the set of guidelines can exist in
            either qualatative, quantitative, or both states.
        </p>
        <br />
        <p className="leading-loose">
            Naturally, quantifiable methods are somewhat engineer friendly and
            they are mesurable by their very fabric. Ok, good, so we have
            established that we can measure quantifiable data. So how do we
            measure qualatative data, and even more importantly, how do we
            present the data in a way that any improvements can be measured? The
            discipline of UX design sets out to addresses this question. It
            offers strategic ways of illustrating, interpreting and integrating
            the various components of design and production which can have
            tremendous benefit to the overall process of how delightful products
            are made.
        </p>
    </div>
);

export default IndexPage;
