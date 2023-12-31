import React, { useState } from 'react';
import CircularProgressBar from './CircularProgressBar';

const FullCircle = () => {
    const [percentage, setPercentage] = useState(25);

    const handleChangeEvent = (event) => {
        setPercentage(event.target.value);
    };
    return (
        <div>
            <div style={{ marginLeft: '100px' }}>
                <CircularProgressBar strokeWidth="20" sqSize="200" percentage={percentage} />
                <div>
                    <input
                        id="progressInput"
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={handleChangeEvent}
                    />
                </div>
            </div>
        </div>
    );
};

export default FullCircle;