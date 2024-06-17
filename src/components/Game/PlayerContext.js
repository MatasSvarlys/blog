import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState({ abilities: [], playerClass: ''});


    const setPlayerClass = (playerClass) => {
        setPlayer(prevPlayer => ({
            ...prevPlayer,
            playerClass: playerClass
        }));
    };

    return (
        <PlayerContext.Provider value={{ player, setPlayer, setPlayerClass }}>
            {children}
        </PlayerContext.Provider>
    );
};