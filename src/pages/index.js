import React from 'react';
import Link from 'gatsby-link';
import indexPageImageOne from '../images/coaching-coders-coding-7374.jpg';

const IndexPage = () => (
    <div className="text-center">
        <h2>Bobcat owned and operated eCommerce Development</h2>
        <br />
        <div class="max-w-md w-full lg:flex">
            <img src={indexPageImageOne} className="block mx-auto w-4/5" />

            <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8" />
                <div class="mb-8">
                    <br />
                    <div class="text-black font-bold text-xl mb-2">
                        Specializing in WooCommerce
                    </div>
                </div>
                <div class="flex items-center" />
            </div>
        </div>
    </div>
);

export default IndexPage;
