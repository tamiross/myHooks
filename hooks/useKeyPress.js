import { useState, useEffect } from 'react';

// KeyPress Hook
export const useKeyPress = (key) => {
    // State for keeping track of whether key is pressed
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const onKeyDown = event => {
        // If pressed key is our target key then set to true
        if (event.key === key)
            setIsKeyPressed(true);

    }

    const onKeyUp = (event) => {
        // If released key is our target key then set to false
        if (event.key === key)
            setIsKeyPressed(false);

    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }); 

    return isKeyPressed;
}
