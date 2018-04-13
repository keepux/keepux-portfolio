import React from 'react';

const Header = () => (
    <div className="bg-blue">
        <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
                Copyright{' '}
                <a
                    href="http://www.keepux.com"
                    className="font-bold no-underline text-white"
                >
                    keepUX
                </a>
            </p>
            <p>
                <a
                    href="https://github.com/keepux"
                    className="font-bold no-underline text-white"
                >
                    GitHub
                </a>
            </p>
        </div>
    </div>
);

export default Header;
