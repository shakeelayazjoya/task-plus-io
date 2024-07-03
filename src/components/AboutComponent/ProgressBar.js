import React, { useState, useEffect } from 'react';

function ProgressBar({ targetPercentage }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= targetPercentage) {
                    clearInterval(timer);
                    return prevProgress;
                }
                return prevProgress + 1; // Increment progress until it reaches target
            });
        }, 20); // Determines the speed of the animation

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [targetPercentage]);

    return (
        <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
                width: `${progress}%`,
                transition: 'width 0.5s ease-in-out'
            }}>
                {progress}%
            </div>
        </div>
    );
}

export default ProgressBar;
