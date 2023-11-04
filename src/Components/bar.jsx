import React, { useState } from 'react';
import HalfCircularProgressBar from './HalfCircularProgressBar';

const Bar = () => {
   
        const [percentage, setPercentage] = useState(10);

        const handleChangeEvent = (event) => {
            setPercentage(event.target.value);
        };
        return (
            <div>
                <div style={{ marginLeft: '100px', marginTop: '50px' }}>
                    <HalfCircularProgressBar strokeWidth="20" sqSize="400" percentage={percentage} />
                
                </div>
            </div>
        );
    };

    export default Bar;