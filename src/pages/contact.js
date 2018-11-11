import React from 'react';
import Link from 'gatsby-link';
import contactPageImageOne from '../images/contact/cable-call-communication-33999.jpg';

const contactPage = () => (
    <div className="text-center">
        <h2>Contact</h2>
        <br />
        <div class="max-w-md w-full lg:flex">
            <img src={contactPageImageOne} className="block mx-auto w-4/5" />

            <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8" />
                <div class="mb-8">
                    <br />
                    <div class="text-black font-bold text-xl mb-2">Say Hi</div>
                </div>
                <div class="flex items-center" />
            </div>
        </div>
    </div>
);

export default contactPage;
