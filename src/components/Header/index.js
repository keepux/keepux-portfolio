import React from 'react';
import Link from 'gatsby-link';

const Header = () => {
    const handleClick = function(e) {
        const el = document.getElementById('nav');

        e.preventDefault();
        el.classList.toggle('block');
        el.classList.toggle('hidden');
    };

    return (
        <nav className="bg-teal">
            <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
                <a
                    href="https://www.keepux.com/"
                    className="flex items-center no-underline text-white"
                >
                    <svg
                        width="155px"
                        height="55px"
                        viewBox="0 0 761 313"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>keepux-square</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                            id="dark"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="keepUX"
                                transform="translate(-98.000000, -192.000000)"
                            >
                                <g
                                    id="keepux-square"
                                    transform="translate(98.000000, 192.000000)"
                                >
                                    <g id="keepux-logo-square-icon">
                                        <g
                                            id="Group"
                                            transform="translate(112.000000, 228.000000)"
                                        />
                                        <g id="keepux-logo-horizontal">
                                            <g id="keep-logo">
                                                <g
                                                    id="Group-4"
                                                    transform="translate(97.000000, 0.000000)"
                                                    fill="#E7E7E7"
                                                >
                                                    <path
                                                        d="M83.8856767,207.135847 C86.1252414,182.390036 80.1111315,170.5 66.0314034,170.5 C51.9419456,170.5 45.8331256,182.318333 47.8781201,206.907135 L83.8856767,207.135847 Z M45.0105662,208.537999 C42.485301,181.514312 49.43132,167.5 66.0314034,167.5 C82.6417617,167.5 89.4786881,181.604678 86.7406523,208.794821 L86.6038668,210.153172 L45.1368856,209.889784 L45.0105662,208.537999 Z"
                                                        id="Path-3"
                                                        fill-rule="nonzero"
                                                    />
                                                    <path
                                                        d="M83.8856767,148.135847 C86.1252414,123.390036 80.1111315,111.5 66.0314034,111.5 C51.9419456,111.5 45.8331256,123.318333 47.8781201,147.907135 L83.8856767,148.135847 Z M45.0105662,149.537999 C42.485301,122.514312 49.43132,108.5 66.0314034,108.5 C82.6417617,108.5 89.4786881,122.604678 86.7406523,149.794821 L86.6038668,151.153172 L45.1368856,150.889784 L45.0105662,149.537999 Z"
                                                        id="Path-3"
                                                        fill-rule="nonzero"
                                                    />
                                                    <polygon
                                                        id="Path-6"
                                                        points="8.78320312 125.016907 8.78320312 99.6894531 4.36181641 99.6894531 4.36181641 93.2680664 10.8173828 93.2680664 65.6342773 22.9516602 121.910645 93.2680664 127.608887 93.2680664 127.608887 99.6894531 122.827637 99.6894531 122.827637 125.988525 126.924316 125.988525 126.924316 104.307129 131.84668 104.307129 131.84668 89.7602539 124.001953 89.7602539 71.3081055 23.7050781 95.9272461 23.7050781 83.9897461 12.0917969 95.9272461 0.627441406 63.8530273 0.627441406 63.8530273 18.6904297 8.78320312 88.8989258 0.4609375 88.8989258 0.4609375 102.987793 4.36181641 102.987793 4.36181641 125.016907"
                                                    />
                                                    <path
                                                        d="M14.5872803,307.980011 L14.5872803,311.98999 L33.6875,311.98999 C33.6875,288.12557 33.6875,272.721354 33.6875,265.777344 C33.6875,243.822266 48.5585614,231.786133 65.9296875,231.786133 C85.0852217,231.786133 98.03125,247.739258 98.03125,265.777344 C98.03125,270.115885 98.03125,285.520101 98.03125,311.98999 L118.920898,311.98999 L118.920898,307.98999 L102.374023,307.98999 C102.374023,285.010335 102.374023,270.939453 102.374023,265.777344 C102.374023,245.925781 87.5776928,228.28125 65.9296875,228.28125 C41.5585915,228.28125 29.9248047,245.339844 29.9248047,265.777344 C29.9248047,272.589148 29.9248047,286.656704 29.9248047,307.980011 L14.5872803,307.980011 Z"
                                                        id="Path-7"
                                                    />
                                                </g>
                                                <g
                                                    id="Group-3"
                                                    transform="translate(0.000000, 125.000000)"
                                                    fill="#E7E7E7"
                                                    fill-rule="nonzero"
                                                >
                                                    <g id="Group-2">
                                                        <path
                                                            d="M13.7209378,182.636154 L108.079521,182.980011 L108.079521,54.5569829 L116.992541,54.5569829 L116.992541,4 L92.255413,4 C91.9249346,15.4743585 88.6626764,21.6342331 81.9942699,21.5231601 C75.3476627,21.4124503 72.4537637,15.4127501 72.8422661,4.53125 L48.1918336,4.53125 C47.8400557,15.5477986 44.4924222,21.5234375 37.7678128,21.5234375 C30.9895857,21.5234375 28.077179,15.6372208 28.6046964,4.94980498 L4,4.94980498 L4,55.1702935 L13.7209378,55.1702935 L13.7209378,182.636154 Z M112.079521,186.98999 L9.72093782,186.621658 L9.72093782,59.1702935 L2.22044605e-16,59.1702935 L0,0.949804983 L32.9264218,0.949804983 L32.738563,3.12211913 C31.8704241,13.160886 33.7187226,17.5234375 37.7678128,17.5234375 C41.9203485,17.5234375 44.2228909,12.8960133 44.2228909,2.53125 L44.2228909,0.53125 L77.0964273,0.53125 L76.9466528,2.67090691 C76.2298331,12.9112876 78.1232702,17.4581276 82.060887,17.5237149 C86.0227228,17.5897056 88.2834378,12.7912351 88.2834378,2 L88.2834378,2.22044605e-16 L120.992541,0 L120.992541,58.5569829 L112.079521,58.5569829 L112.079521,186.98999 Z"
                                                            id="Path-2"
                                                        />
                                                        <path
                                                            d="M78.8856767,115.135847 C81.1252414,90.390036 75.1111315,78.5 61.0314034,78.5 C46.9419456,78.5 40.8331256,90.3183325 42.8781201,114.907135 L78.8856767,115.135847 Z M40.0105662,116.537999 C37.485301,89.5143123 44.43132,75.5 61.0314034,75.5 C77.6417617,75.5 84.4786881,89.6046784 81.7406523,116.794821 L81.6038668,118.153172 L40.1368856,117.889784 L40.0105662,116.537999 Z"
                                                            id="Path-3"
                                                        />
                                                    </g>
                                                </g>
                                                <g
                                                    id="Group-3"
                                                    transform="translate(208.000000, 127.000000)"
                                                    fill="#E7E7E7"
                                                    fill-rule="nonzero"
                                                >
                                                    <g id="Group-2">
                                                        <path
                                                            d="M11.7209378,180.98999 L106.079521,180.98999 L106.079521,52.5569829 L114.992541,52.5569829 L114.992541,2 L90.255413,2 C89.9249346,13.4743585 86.6626764,19.6342331 79.9942699,19.5231601 C73.3476627,19.4124503 70.4537637,13.4127501 70.8422661,2.53125 L46.1918336,2.53125 C45.8400557,13.5477986 42.4924222,19.5234375 35.7678128,19.5234375 C28.9895857,19.5234375 26.077179,13.6372208 26.6046964,2.94980498 L2,2.94980498 L2,53.1702935 L11.7209378,53.1702935 L11.7209378,180.98999 Z M110.079521,184.98999 L7.72093782,184.98999 L7.72093782,57.1702935 L-2,57.1702935 L-2,-1.05019502 L30.9264218,-1.05019502 L30.738563,1.12211913 C29.8704241,11.160886 31.7187226,15.5234375 35.7678128,15.5234375 C39.9203485,15.5234375 42.2228909,10.8960133 42.2228909,0.53125 L42.2228909,-1.46875 L75.0964273,-1.46875 L74.9466528,0.670906912 C74.2298331,10.9112876 76.1232702,15.4581276 80.060887,15.5237149 C84.0227228,15.5897056 86.2834378,10.7912351 86.2834378,2.22044605e-15 L86.2834378,-2 L118.992541,-2 L118.992541,56.5569829 L110.079521,56.5569829 L110.079521,184.98999 Z"
                                                            id="Path-2"
                                                        />
                                                        <path
                                                            d="M76.8856767,113.135847 C79.1252414,88.390036 73.1111315,76.5 59.0314034,76.5 C44.9419456,76.5 38.8331256,88.3183325 40.8781201,112.907135 L76.8856767,113.135847 Z M38.0105662,114.537999 C35.485301,87.5143123 42.43132,73.5 59.0314034,73.5 C75.6417617,73.5 82.4786881,87.6046784 79.7406523,114.794821 L79.6038668,116.153172 L38.1368856,115.889784 L38.0105662,114.537999 Z"
                                                            id="Path-3"
                                                        />
                                                    </g>
                                                </g>
                                                <polygon
                                                    id="Path-5"
                                                    fill="#F4E07C"
                                                    points="164.710022 3.21972656 185.632812 3.21972656 176.44873 11.671875 185.632812 20.7993164 164.710022 20.7993164"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <path
                                        d="M359.598633,251.183594 L401.588379,212.92627 L408.837891,212.92627 L373.882324,245.08252 L409.196777,287.574707 L402.37793,287.574707 L369.647461,248.527832 L359.526855,257.571777 L359.526855,287.574707 L354,287.574707 L354,184 L359.526855,184 L359.526855,251.183594 L359.598633,251.183594 Z M436.367104,216.874023 C420.934975,216.874023 410.240151,228.717285 409.4506,246.518066 L462.709389,246.518066 C462.637611,228.86084 452.086342,216.874023 436.367104,216.874023 Z M461.919838,266.6875 L467.518471,266.6875 C465.078041,279.320312 453.593666,288.57959 437.0131,288.57959 C416.771889,288.57959 403.708412,274.367676 403.708412,250.322266 C403.708412,227.138184 416.700111,211.921387 436.438881,211.921387 C455.746986,211.921387 468.451576,226.348633 468.451576,248.025391 L468.451576,251.183594 L409.378822,251.183594 L409.378822,251.470703 C409.378822,271.711914 420.432533,283.626953 437.084877,283.626953 C450.722572,283.626953 459.69474,276.377441 461.919838,266.6875 Z M503.158524,216.874023 C487.726395,216.874023 477.031571,228.717285 476.24202,246.518066 L529.500809,246.518066 C529.429031,228.86084 518.877762,216.874023 503.158524,216.874023 Z M528.711258,266.6875 L534.309891,266.6875 C531.869461,279.320312 520.385086,288.57959 503.80452,288.57959 C483.563309,288.57959 470.499832,274.367676 470.499832,250.322266 C470.499832,227.138184 483.491531,211.921387 503.230301,211.921387 C522.538406,211.921387 535.242996,226.348633 535.242996,248.025391 L535.242996,251.183594 L476.170242,251.183594 L476.170242,251.470703 C476.170242,271.711914 487.223953,283.626953 503.876297,283.626953 C517.513992,283.626953 526.48616,276.377441 528.711258,266.6875 Z M574.328362,211.921387 C593.062248,211.921387 605.98217,227.49707 605.98217,250.250488 C605.98217,273.075684 593.134026,288.57959 574.400139,288.57959 C560.618889,288.57959 550.139397,279.607422 546.765862,267.979492 L546.622307,267.979492 L546.622307,312.050781 L541.023674,312.050781 L541.023674,212.92627 L546.26342,212.92627 L546.26342,232.808594 L546.478752,232.808594 C549.852287,221.037109 560.618889,211.921387 574.328362,211.921387 Z M573.682366,283.555176 C589.473381,283.555176 600.31176,270.061035 600.31176,250.322266 C600.31176,230.511719 589.473381,216.945801 573.682366,216.945801 C557.676018,216.945801 546.55053,230.655273 546.55053,250.250488 C546.55053,269.91748 557.676018,283.555176 573.682366,283.555176 Z M635.468903,210.774414 L612.902497,210.774414 L612.902497,260.218262 C612.902497,277.728516 626.474274,288.905273 646.752106,288.905273 C667.029938,288.905273 680.601715,277.728516 680.601715,260.218262 L680.601715,210.774414 L658.035309,210.774414 L658.035309,257.716797 C658.035309,265.806641 654.04361,270.224121 646.752106,270.224121 C639.460602,270.224121 635.468903,265.806641 635.468903,257.716797 L635.468903,210.774414 Z M684.182198,287.574707 L708.025948,287.574707 L721.171944,264.422852 L721.650948,264.422852 L734.850167,287.574707 L759.97126,287.574707 L736.287178,249.201172 L736.287178,248.775391 L760.077706,210.774414 L735.063057,210.774414 L722.928292,235.256836 L722.50251,235.256836 L710.420967,210.774414 L684.128975,210.774414 L706.801827,248.668945 L706.801827,249.094727 L684.182198,287.574707 Z"
                                        id="keepUX"
                                        fill="#E7E7E7"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>

                <button
                    className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
                    onClick={handleClick}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                <div
                    id="nav"
                    className="hidden md:flex md:items-center w-full md:w-auto"
                >
                    <div className="text-sm">
                        <Link
                            to="/"
                            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="/ecommerce"
                            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
                        >
                            eCommerce
                        </Link>
                        <Link
                            to="/marketing"
                            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
                        >
                            Marketing
                        </Link>
                        <Link
                            to="/ux-studies"
                            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
                        >
                            UX & Visual Design
                        </Link>
                        <Link
                            to="/contact"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
