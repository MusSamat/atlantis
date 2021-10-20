import React from 'react';
import LottieAnimation from './LottieAnimation';
import home from './file1.json';

const AnimationWithJson = () => {

    return (
        <div>
            <LottieAnimation lotti={home} height={500} width={500} />
        </div>
    )
}

export default AnimationWithJson;