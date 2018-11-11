import React from 'react';

const Header = () => (
    <div className="bg-blue">
        <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
                Copyright 2019{' '}
                <a
                    href="http://www.keepux.com"
                    className="font-bold no-underline text-white"
                >
                    keepUX
                </a>
                <a className="font-bold ml-6">Email</a>
                <a className=""> info@keepux.com</a>
            </p>
            <p>
                <a
                    href="https://github.com/keepux"
                    target="_blank"
                    className="font-bold no-underline text-white"
                >
                    keepUX @ GitHub
                </a>
            </p>
        </div>
    </div>
);

export default Header;
