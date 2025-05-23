import React from 'react';

import PlantGrow from '../../assets/lotties/lottie-animation.json'
import { useLottie, useLottieInteractivity } from 'lottie-react';

const style = {
    height: 200
}
const options = {
    animationData: PlantGrow,
    autoplay: true,
    loop:false
}
const Lottie = () => {

    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: 'scroll',
        actions: [
            {
                visibility: [0, 1],
                type: 'seek',
                frames: [0, 120]

            },
            
            
        ]
    })
    return Animation
};

export default Lottie;