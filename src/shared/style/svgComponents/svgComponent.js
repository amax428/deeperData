import React from 'react';

const SvgComponent = (props) =>{
    switch (props.name){
        case 'empty-star':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12">
                    <defs>
                        <linearGradient id="a" x1="0%" y1="0%" y2="100%">
                            <stop offset="0%" stop-color="#FFC837"/>
                            <stop offset="100%" stop-color="#FF8008"/>
                        </linearGradient>
                    </defs>
                    <path fill="none" fill-rule="evenodd" stroke="url(#a)" d="M69 221.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L69 214l1.47 2.977 3.285.478-2.377 2.318.56 3.272z" transform="translate(-63 -212)"/>
                </svg>
            );
        case 'full-star':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 9">
                    <defs>
                        <linearGradient id="a" x1="0%" y1="0%" y2="100%">
                            <stop offset="0%" stop-color="#FFC837"/>
                            <stop offset="100%" stop-color="#FF8008"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#a)" fill-rule="evenodd" d="M364 316.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L364 309l1.47 2.977 3.285.478-2.377 2.318.56 3.272z" transform="translate(-359 -309)"/>
                </svg>
            );
        default:
            return null;
    }
};

export default SvgComponent;