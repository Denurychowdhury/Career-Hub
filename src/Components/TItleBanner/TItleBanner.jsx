import React from 'react';
import banone from '../../assets/bg1.png'
import bantwo from '../../assets/bg2.png'
const TItleBanner = ({ title }) => {
    const bg = {
        backgroundImage: `url(${banone}),url(${bantwo})`,
        backgroundPosition: "bottom left,top right",
        backgroundRepeat: "no-repeat",
        height: "300px",

    }
    return (
        <div style={bg} className='flex items-center justify-center'>
            <div className=''>
                <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
        </div>
    );
};

export default TItleBanner;