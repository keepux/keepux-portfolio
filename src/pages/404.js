import React from 'react';
import Taken from '../images/taken.svg';

const NotFoundPage = () => (
    <div className="text-center">
        <img src={Taken} className="block mx-auto w-1/2" />
        <h2 className="bg-yellow inline-block my-8 p-3">
            So sorry, this page was abducted by aliens...
        </h2>
    </div>
);

export default NotFoundPage;
